const ExperiaceCard = () => {
  const workDone = [
    "Reduced page load time by 60%",
    "Led team of 8 developers",
    "Implemented CI/CD pipeline",
  ];

  const skillsTech = ["React", "Express", "next.js"];

  return (
    <div className="flex gap-6 relative -translate-x-8 ">
      <div className="absolute animate-ping  mt-4 h-2 w-2 rounded-full bg-white shadow-lg"></div>
      <div className=" relative  mt-4 h-2 w-2 rounded-full bg-white shadow-lg"></div>
      <div className="card-glass flex flex-col min-w-52 max-w-196 grow  p-6 gap-4 w-full ">
        <div className="flex justify-between ">
          <div className="flex flex-col ">
            <div className="text-white/60 text-xl font-mono font-semibold">
              FullStact Developer
            </div>
            <span>Company Name</span>
          </div>
          <div className=" flex h-7 items-center justify-center card-glass py-1 px-3">
            {" "}
            2023 - 2024{" "}
          </div>
        </div>

        {/* small description of work at company */}
        <div>
          Leading development of enterprise SaaS platform. Architected
          microservices handling 1M+ daily requests.
        </div>

        {/* Points of work done */}
        <div className="flex flex-col gap-1">
          {workDone.map((pnt, index) => {
            return (
              <div
                key={index}
                className="relative flex flex-row items-center gap-2"
              >
                <div className="absolute animate-ping  h-1 w-1 rounded-full bg-white shadow-lg"></div>
                <div className=" relative  h-1 w-1 rounded-full bg-white shadow-lg"></div>
                <div>{pnt}</div>
              </div>
            );
          })}
        </div>

        {/* skills */}
        <div className="flex gap-1 flex-wrap">
          {skillsTech.map((tech, index) => {
            return (
              <div key={index} className="card-glass py-1 px-3">
                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperiaceCard;
