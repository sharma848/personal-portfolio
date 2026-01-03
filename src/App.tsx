import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Header />
        <main className="w-full overflow-x-hidden">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer className="py-8 px-4 text-center text-text-muted text-sm border-t border-border-soft">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;

