import ExperiaceCard from "../components/ExperiaceCard";

type HomeProps = {
  ref: React.RefObject<HTMLDivElement | null>;
};

const Experience = ({ ref }: HomeProps) => {
  return (
    <div
      ref={ref}
      className="min-h-screen mx-auto max-w-4xl py-12 px-6 flex flex-col items-center"
    >
      <div className="uppercase tracking-[0.2em] font-semibold">
        Career Journey
      </div>
      <div className="py-6 text-4xl md:text-5xl font-bold">Experience</div>

      <div className="flex gap-8 w-full justify-center  p-3 relative">
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>

        <div className="flex flex-col gap-8 w-full justify-center  pl-4">
          <ExperiaceCard />
          <ExperiaceCard />
          <ExperiaceCard />
        </div>
      </div>
    </div>
  );
};

export default Experience;
