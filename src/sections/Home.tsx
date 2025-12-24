import { Download, FolderKanban } from "lucide-react";
import Button from "../components/ui/Button";


type sectionRef = React.RefObject<HTMLDivElement | null>;

type HomeProps = {
  ref: sectionRef;
  projectRef: sectionRef;
};

const Home = ({ ref, projectRef }: HomeProps) => {
  const scrollToSection = (
    sectionRefs: sectionRef
  ) => {
    sectionRefs.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="min-h-screen w-full py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 items-center  relative ">
        <div className="flex-2 px-12 py-20 ">
          <div className="flex flex-col gap-3 ">
            <div className=" font-medium tracking-[0.3em] uppercase text-sm">
              Full-Stack Developer
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
              <span className="block text-dark-100">Crafting Digital</span>
              <span className="block text-dark-100/60">Experiences</span>
            </h1>
            <div className="text-lg  max-w-md leading-relaxed">
              Building elegant, performant web applications with modern
              technologies. Turning complex problems into simple, beautiful
              solutions.
            </div>
          </div>
          <div className="mt-8 flex gap-4 flex-col sm:flex-row">
            <Button
              onClick={() => {
                console.log("submit");
              }}
              title={"Download CV"}
              icon={Download}
              variant={"primary"}
            />
            <Button
              onClick={() => {
                scrollToSection(projectRef);
              }}
              title={"Projects"}
              icon={FolderKanban}
              variant={"secondary"}
            />
          </div>
        </div>
        <div className="flex flex-1 hidden lg:block justify-center px-6">
          <div className="animate-soft-bounce card-glass p-4 w-60 h-80 "></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
