import { fadeSide } from "../animations/variants";
import ExperiaceCard from "../components/ExperiaceCard";
import { experianceData } from "./data";
import { motion } from "framer-motion";

type HomeProps = {
  ref: React.RefObject<HTMLDivElement | null>;
};

const Experience = ({ ref }: HomeProps) => {
  return (
    <section ref={ref} className="min-h-screen w-full py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 flex flex-col items-center">
        <p className="flex uppercase tracking-[0.2em] font-semibold">
          Career Journey
        </p>

        <h2 className="mb-12 mt-2 text-4xl md:text-5xl font-bold">
          Experience
        </h2>
        <div className="flex gap-8 w-full justify-center  p-3 relative">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
          <div className="flex flex-col gap-8 w-full pl-4">
            {experianceData.map((data, ind) => {
              return <motion.div
                key={ind}
                variants={fadeSide}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
              >
               <ExperiaceCard data={data} key={ind} />
              </motion.div> ;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
