
type cardProps = {
  data:{
  role:string,
  company:string,
  duration:string,
  description:string,
  points:string[],
  skills:string[]
  }
  
}


const ExperiaceCard = ({data}:cardProps) => {

  return (
    <div className="flex gap-6 relative -translate-x-8 ">
      <div className="absolute animate-ping  mt-4 h-2 w-2 rounded-full bg-white shadow-lg"></div>
      <div className=" relative  mt-4 h-2 w-2 rounded-full bg-white shadow-lg"></div>
      <div className="card-glass flex flex-col min-w-52 max-w-196 grow  p-6 gap-4 w-full ">
        <div className="flex flex-col sm:flex-row justify-between ">
          <div className="flex flex-col ">
            <div className="text-white/60 text-xl font-mono font-semibold">
              {data.role}
            </div>
            <span>{data.company}</span>
          </div>
          <div className=" flex h-7 items-center min-w-36 justify-center card-glass py-1 px-3">
            {" "}
            {data.duration}{" "}
          </div>
        </div>

        {/* small description of work at company */}
        <div>
          {data.description}
        </div>

        {/* Points of work done */}
        <div className="flex flex-col gap-1">
          {data.points.map((pnt, index) => {
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
          {data.skills.map((tech, index) => {
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
