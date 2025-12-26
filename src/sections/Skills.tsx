import { fadeSide, fadeSideleft } from "../animations/variants";
import { mySkills } from "./data";
import { motion } from "framer-motion";

type sectionProps = {
  ref: React.RefObject<HTMLDivElement | null>;
};

const Skills = ({ ref }: sectionProps) => {
  return (
    <section ref={ref} className="py-8 w-full ">
      <div className=" mx-auto px-4 sm:px-6 max-w-6xl flex flex-col items-center">
        <p className="flex uppercase tracking-[0.2em] font-semibold">
          secret sauce
        </p>
        <h2 className="mb-12 mt-2 text-4xl md:text-5xl font-bold">
          Tech Arsenal
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {mySkills.map((skill, index) => {
             {if(index %2===0){
               return (
                   <motion.div
                variants={fadeSide}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                key={index}
                className=" group p-5 flex flex-col items-center rounded-xl card-glass"
                style={{ opacity: "1", transform: "none" }}
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <skill.Icon />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill.title}
                </span>
              </motion.div>
               )
              }
              else {
                 return (
                <motion.div
                variants={fadeSideleft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                key={index}
                className=" group p-5 flex flex-col items-center rounded-xl card-glass"
                style={{ opacity: "1", transform: "none" }}
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <skill.Icon />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill.title}
                </span>
              </motion.div>
                 )
              }
              }
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
