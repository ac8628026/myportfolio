import { ExternalLink, Github } from "lucide-react";

type PropsType = {
  data: {
    imgLink?: string;
    title: string;
    description: string;
    techStacks: string[];
    liveLink: string;
    githubLink: string;
  };
};

const ProjectCard = ({ data }: PropsType) => {
  return (
    <div className="card-glass w-full flex flex-col gap-4 p-6">
      <h3 className="text-xl font-semibold text-white/90">
        {data.title}
      </h3>

      <p className="text-sm text-white/70 leading-relaxed">
        {data.description}
      </p>

      <div className="flex flex-wrap gap-2 text-xs">
        {data.techStacks.map((tec, index) => (
          <span key={index} className="card-glass px-3 py-1">
            {tec}
          </span>
        ))}
      </div>

      <div className="mt-auto flex justify-around pt-4 text-sm">
        <a
          href={data.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-white transition"
        >
          <ExternalLink size={16} />
          Demo
        </a>

        <a
          href={data.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-white transition"
        >
          <Github size={16} />
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
