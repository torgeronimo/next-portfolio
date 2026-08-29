import About from "./components/sections/about";
import Blog from "./components/sections/blog";
import Certification from "./components/sections/certification";
import Contact from "./components/sections/contact";
import Hero from "./components/sections/hero";
import Projects from "./components/sections/projects";
import Skills from "./components/sections/skills";

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
