import ProjectCard from "../components/ProjectCard";

type ProjectsProps = {
  ref: React.RefObject<HTMLDivElement | null>;
};

const Projects = ({ ref }: ProjectsProps) => {
  return (
    <section ref={ref} className=" py-12 w-full">
      <div className=" mx-auto px-4 sm:px-6 max-w-6xl flex flex-col items-center">
        <p className="flex uppercase tracking-[0.2em] font-semibold">
          Portfolio
        </p>
        <h2 className="mb-12 mt-2 text-4xl md:text-5xl font-bold">
          Featured Projects
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
