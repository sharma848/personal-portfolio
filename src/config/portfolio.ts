// Portfolio content configuration - Easy to customize
export const portfolioConfig = {
    personal: {
        name: "Abhishek Sharma",
        role: "Senior Lead Engineer",
        tagline:
            "Full-stack engineer building scalable applications and AI-powered solutions",
        bio: "I'm a senior lead engineer with 10+ years of experience in full-stack development, specializing in both frontend and backend technologies. I craft scalable, performant applications using React, TypeScript, Node.js, and modern web technologies. Recently, I've been exploring the intersection of AI and software development, creating intelligent agents on top of LLMs to solve complex problems and enhance user experiences.",
        email: "sharmaabhishek848@gmail.com",
        github: "https://github.com/sharma848",
        linkedin: "https://www.linkedin.com/in/abhishek-sharma-70b453a2/",
    },
    skills: {
        frontend: [
            "React",
            "TypeScript",
            "Next.js",
            "Vue.js",
            "Tailwind CSS",
            "Framer Motion",
        ],
        backend: ["Node.js", "Python", "PostgreSQL", "GraphQL", "REST APIs"],
        systemDesign: [
            "Microservices",
            "Cloud Architecture",
            "CI/CD",
            "Docker",
            "Kubernetes",
        ],
        tools: ["Git", "Webpack", "Vite", "Jest", "Cypress", "Figma"],
    },
    experience: [
        {
            company: "Tech Corp",
            role: "Senior Frontend Engineer",
            period: "2021 - Present",
            description:
                "Leading frontend architecture for a SaaS platform serving 1M+ users. Built design system, improved performance by 40%, and mentored junior engineers.",
            tech: ["React", "TypeScript", "GraphQL", "AWS"],
        },
        {
            company: "StartupXYZ",
            role: "Frontend Engineer",
            period: "2019 - 2021",
            description:
                "Developed customer-facing web applications from scratch. Implemented responsive designs and optimized bundle size by 50%.",
            tech: ["React", "Redux", "Sass", "Webpack"],
        },
    ],
    projects: [
        {
            name: "UniConvert",
            description:
                "All-in-one file conversion platform for PDFs and images. Features include converting between formats, merging/splitting PDFs, batch processing, and image transformations with resize, compress, and rotate options.",
            tech: [
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "Tailwind CSS",
                "Shadcn UI",
                "React Query",
            ],
            github: "https://github.com/sharma848/uni-converter",
            live: "https://uni-converter.netlify.app/",
        },
        {
            name: "Expense Tracker",
            description:
                "Cross-platform mobile expense tracking app built with React Native and Expo. Features include expense management, payment method tracking, filtering by category/date, monthly analytics with charts, and full offline support using AsyncStorage.",
            tech: [
                "React Native",
                "TypeScript",
                "Expo",
                "React Navigation",
                "Zustand",
                "AsyncStorage",
            ],
            github: "https://github.com/sharma848/expense-tracker-react-native",
        },
        {
            name: "MCP Marketplace",
            description:
                "Full-stack web application for managing and testing MCP (Model Context Protocol) servers and tools. Features include server registration and management, tool discovery, real-time tool testing with custom parameters, formatted result visualization, and team-based organization.",
            tech: [
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "MongoDB",
                "Mongoose",
                "Tailwind CSS",
                "Vite",
            ],
        },
        {
            name: "iCoder",
            description:
                "AI-powered error monitoring and analysis platform that reads logs from Kibana/Elasticsearch. Features include intelligent error detection using RAG-powered LLM analysis, automated root cause prediction, code fix generation with PR templates, real-time Kafka-based log processing, Telegram alerts, and a comprehensive React dashboard for error tracking and management.",
            tech: [
                "Python",
                "FastAPI",
                "React",
                "Ant Design",
                "MongoDB",
                "Elasticsearch",
                "LangGraph",
                "Kafka",
                "Vector Embeddings",
                "Telegram API",
            ],
        },
    ],
};
