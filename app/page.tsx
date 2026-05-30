import About from "./components/about";
import Blog from "./components/blog";
import Certification from "./components/certification";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
    <div className="min-h-screen flex flex-col max-w-5xl mx-auto px-4">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certification />
      <Blog />
      <Contact />
    </div>
    
    </>
    
  );
}
