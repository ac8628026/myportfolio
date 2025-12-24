import { useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const homeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);


  return (
    <div className="min-h-screen bg-dark-300">
      <Sidebar skillsRef={skillsRef} contactRef={contactRef} experianceRef = {experienceRef} homeRef={homeRef} projectsRef = {projectsRef} isOpen={isOpen} setIsOpen={setIsOpen} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <div className={`${isOpen ?'md:ml-64':' md:ml-14'} text-dark-200`}>
        <Home ref={homeRef} projectRef={projectsRef} />
        <Projects ref={projectsRef} />
        <Experience ref={experienceRef} />
        <Skills ref = {skillsRef}/>
        <Contact ref = {contactRef}/>
        <Footer />
      </div>
    </div>
  );
};

export default App;
