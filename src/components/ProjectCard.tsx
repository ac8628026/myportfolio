import { ExternalLink, Github } from "lucide-react"

const ProjectCard = () => {
 
    const techStacks= ["Next.js", "TypeScript","Prisma","Stripe"]

  return (
    <div className="card-glass flex flex-col w-52  h-96 p-6 flex items-center">
        <h3 className="text-2xl text-white/80 font-semibold"> E-Commerce Plateform</h3>

        <div className="text-sm py-4">
           Full-stack marketplace with real-time inventory management 
        </div>

        <div className="flex gap-2 flex-wrap ">
              {techStacks.map((tec,index) => 
                <div className="card-glass py-1 px-3" key={index}>
                    {tec}
                </div>
              )}
        </div>
        <div className="flex justify-around py-4 w-full">
            <div className="flex gap-1 cursor-pointer">
                <ExternalLink/>
                <span>Demo</span>
            </div>
            <div className="flex gap-1 cursor-pointer">
                <Github/>
                <span>Code</span>
            </div>
        </div>
       
    </div>
  )
}

export default ProjectCard