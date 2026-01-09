import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense, useMemo, useRef, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import * as THREE from "three";

// Starfield Animation Component
function Starfield() {
    const pointsRef = useRef<THREE.Points>(null);
    const positionsRef = useRef<Float32Array | null>(null);
    const sizesRef = useRef<Float32Array | null>(null);
    const phasesRef = useRef<Float32Array | null>(null);
    const timeRef = useRef(0);
    const isActiveRef = useRef(true);

    // Detect mobile
    const isMobile = useMemo(() => {
        if (typeof window === "undefined") return true;
        return window.innerWidth < 768 || "ontouchstart" in window;
    }, []);

    // Star count
    const starCount = isMobile ? 500 : 1500;

    // Create initial star positions
    const { initialPositions, initialSizes, initialPhases } = useMemo(() => {
        const positions = new Float32Array(starCount * 3);
        const sizes = new Float32Array(starCount);
        const phases = new Float32Array(starCount);
        const spread = 30;
        const depth = 20;

        for (let i = 0; i < starCount; i++) {
            // Random position in 3D space
            positions[i * 3] = (Math.random() - 0.5) * spread * 2;
            positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 2;
            positions[i * 3 + 2] = -(Math.random() * depth + 2); // Negative Z (in front of camera)

            // Small dot sizes
            const rand = Math.random();
            if (rand > 0.9) {
                sizes[i] = Math.random() * 0.5 + 1.0; // Slightly larger dots (10%)
            } else if (rand > 0.7) {
                sizes[i] = Math.random() * 0.4 + 0.6; // Medium dots (20%)
            } else {
                sizes[i] = Math.random() * 0.3 + 0.3; // Small dots (70%)
            }

            // Phase for twinkling
            phases[i] = Math.random() * Math.PI * 2;
        }

        return {
            initialPositions: positions,
            initialSizes: sizes,
            initialPhases: phases,
        };
    }, [starCount]);

    // Store in refs
    useEffect(() => {
        positionsRef.current = new Float32Array(initialPositions);
        sizesRef.current = new Float32Array(initialSizes);
        phasesRef.current = new Float32Array(initialPhases);
    }, [initialPositions, initialSizes, initialPhases]);

    // Pause animation when tab is inactive
    useEffect(() => {
        const handleVisibilityChange = () => {
            isActiveRef.current = !document.hidden;
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () =>
            document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);

    // Create geometry
    const geometry = useMemo(() => {
        const geom = new THREE.BufferGeometry();
        geom.setAttribute("position", new THREE.BufferAttribute(initialPositions, 3));
        geom.setAttribute("size", new THREE.BufferAttribute(initialSizes, 1));
        return geom;
    }, [initialPositions, initialSizes]);

    // Custom shader for star shapes
    const vertexShader = `
        attribute float size;
        varying float vSize;
        varying float vPhase;
        
        void main() {
            vSize = size;
            vPhase = 0.0;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            float zDepth = -mvPosition.z;
            gl_PointSize = size * (200.0 / max(zDepth, 1.0)); // Smaller multiplier for dot size
            gl_Position = projectionMatrix * mvPosition;
        }
    `;

    const fragmentShader = `
        precision highp float;
        
        uniform float uTime;
        varying float vSize;
        varying float vPhase;
        
        void main() {
            vec2 coord = gl_PointCoord - vec2(0.5);
            float dist = length(coord);
            
            // Simple circular dot - no star shape, just a small dot
            float alpha = 1.0 - smoothstep(0.0, 0.4, dist);
            
            // Subtle twinkling
            float twinkle = sin(uTime * 1.5 + gl_FragCoord.x * 0.01 + gl_FragCoord.y * 0.01) * 0.2 + 0.8;
            
            // Star color - white with slight blue tint
            vec3 starColor = vec3(0.95, 0.97, 1.0);
            
            alpha = alpha * twinkle;
            
            gl_FragColor = vec4(starColor, alpha);
        }
    `;

    // Shader uniforms
    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
        }),
        []
    );

    // Shader material
    const material = useMemo(() => {
        return new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
    }, [vertexShader, fragmentShader, uniforms]);

    // Animation loop - slow drift
    useFrame((_, delta) => {
        if (!pointsRef.current || !positionsRef.current || !isActiveRef.current)
            return;

        timeRef.current += delta * 0.2; // Slow time

        // Update time uniform for twinkling
        if (material.uniforms) {
            material.uniforms.uTime.value = timeRef.current;
        }

        // Forward drift - faster movement
        const positions = positionsRef.current;
        const driftSpeed = 0.3; // Faster movement
        const resetZ = -25;

        for (let i = 0; i < starCount; i++) {
            const zIndex = i * 3 + 2;

            // Move star forward (toward camera)
            positions[zIndex] += delta * driftSpeed;

            // Reset when star passes camera
            if (positions[zIndex] > -1) {
                positions[zIndex] = resetZ;
                positions[i * 3] = (Math.random() - 0.5) * 60;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
            }
        }

        // Update geometry
        const positionAttribute = pointsRef.current.geometry.attributes.position;
        if (positionAttribute && positionAttribute instanceof THREE.BufferAttribute) {
            const array = positionAttribute.array as Float32Array;
            for (let i = 0; i < positions.length; i++) {
                array[i] = positions[i];
            }
            positionAttribute.needsUpdate = true;
        }
    });

    return <points ref={pointsRef} geometry={geometry} material={material} />;
}

// Main scene component
function Scene() {
    const { theme } = useTheme();
    // Dark background for night sky
    const bgColor = theme === "dark" ? "#0A0E1A" : "#0A0E1A";

    return (
        <>
            <color attach="background" args={[bgColor]} />
            <Starfield />
        </>
    );
}

// Loading fallback
function Loading() {
    return null;
}

// Main exported component
export function Scene3D() {
    // Disable on low-end devices or very small screens
    const shouldDisable = useMemo(() => {
        if (typeof window === "undefined") return true;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        const isLowEnd =
            navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
        const isVerySmall = window.innerWidth < 480;

        return prefersReducedMotion || isLowEnd || isVerySmall;
    }, []);

    if (shouldDisable) {
        return null;
    }

    return (
        <Canvas
            className="w-full h-full"
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
        >
            <PerspectiveCamera makeDefault position={[0, 0, 0]} fov={75} />
            <Suspense fallback={<Loading />}>
                <Scene />
            </Suspense>
        </Canvas>
    );
}
