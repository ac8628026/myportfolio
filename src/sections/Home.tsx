import { Download, FolderKanban } from "lucide-react";
import Button from "../components/ui/Button";
type HomeProps = {
  ref: React.RefObject<HTMLDivElement | null>;
  projectRef:React.RefObject<HTMLDivElement | null>;
};

const Home = ({ ref,projectRef }: HomeProps) => {
 
  const scrollToSection =(sectionRef:React.RefObject<HTMLDivElement |null>)=>{
    sectionRef.current?.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-row py-12  items-center relative justify-center "
    >
      <div className="flex-2 px-12 py-20 relative z-10">
        <div className="flex flex-col gap-3 ">
            <div className=" font-medium tracking-[0.3em] uppercase text-sm">
              Full-Stack Developer
            </div>
            <div className="text-5xl md:text-7xl font-heading font-bold leading-tight text-balance">
              <span className="liquid-text text-dark-100">Crafting Digital</span>
              <div className="block text-dark-100/60">Experiences</div>
            </div>
            <div className="text-lg  max-w-md leading-relaxed">
              Building elegant, performant web applications with modern
              technologies. Turning complex problems into simple, beautiful
              solutions.
            </div>
          </div>
        <div className="flex p-2  flex-col sm:flex-row">
          <Button
            onClick={() => {
              console.log("submit");
            }}
            title={"Download CV"}
            icon={Download}
            variant={"primary"}
          />
          <Button
            onClick={()=>{scrollToSection(projectRef)}}
            title={"Projects"}
            icon={FolderKanban}
            variant={"secondary"}
          />
        </div>
      </div>
      <div className="flex flex-1 hidden lg:block justify-center px-6">
         <div className="animate-soft-bounce  card-glass p-4 w-60 h-80 ">
        
      </div>
      </div>
     
      
    </div>
  );
};

export default Home;
