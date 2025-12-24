import { JavaScriptIcon, TypeScriptIcon, TailwindIcon, ReactIcon, NodeJSIcon, ExpressIcon, MongoDBIcon,
} from "../icons/Skillsicon";



type sectionProps = {
  ref: React.RefObject<HTMLDivElement | null>;
};

const Skills = ({ ref }: sectionProps) => {

  const mySkills = [
    { Icon:  ExpressIcon , title: "Express" },
    { Icon:  JavaScriptIcon , title: "JavaScript" },
    { Icon:  MongoDBIcon , title: "MongoDB" },
    { Icon:  NodeJSIcon , title: "Node" },
    { Icon:  ReactIcon , title: "React" },
    { Icon:  TailwindIcon , title: "Tailwind" },
    { Icon:  TypeScriptIcon , title: "TypeScript" },
  ];
  return (
    <div
      ref={ref}
      className=" py-12 px-6 mx-auto max-w-6xl flex flex-col items-center"
    >
      <div className="uppercase tracking-[0.2em] font-semibold">
        Secrate Sause
      </div>
      <div className="py-6 text-4xl md:text-5xl font-bold">Tech Arsenal</div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {mySkills.map((skill, index) => {
          return (
            <div
              key={index}
              className=" group p-5 flex flex-col items-center rounded-xl card-glass"
              style={{opacity: "1", transform: "none"}}
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
               <skill.Icon/>
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
