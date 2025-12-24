import ProjectCard from "../components/ProjectCard";

type ProjectsProps = {
  ref: React.RefObject<HTMLDivElement|null>;
};

const Projects = ({ ref }: ProjectsProps) => {
  return (
    <div ref={ref} className="min-h-screen py-12 mx-auto max-w-5xl flex flex-col justify-center items-center">
      <div className="uppercase tracking-[0.2em] font-semibold">
        Portfolio
      </div>
      <div className="py-6 text-4xl md:text-5xl font-bold">
        Featured Projects
      </div>
      {/* <div>
        <input className="my-6 outline-none card-glass p-3 w-126 " type="text" placeholder="Ask Anything About Project" />
      </div> */}
      
        <div className=" flex flex-wrap items-center justify-center gap-6">
           <ProjectCard/>
            <ProjectCard/> 
            <ProjectCard/>
             <ProjectCard/> 
             <ProjectCard/> 
             <ProjectCard/> 
             <ProjectCard/> 
             <ProjectCard/> 
             <ProjectCard/>
         </div>
    </div>
  );
};

export default Projects;
