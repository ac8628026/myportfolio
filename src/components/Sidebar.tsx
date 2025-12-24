import React from "react";
import clsx from "clsx";
import SidebarTab from "./SidebarTab";
import {
  House,
  FolderKanban,
  PanelLeftClose,
  Briefcase,
  Zap,
  Mail,
  PanelRightClose,
} from "lucide-react";

type sectionRef = React.RefObject<HTMLDivElement | null>;

type sideBarProps = {
  skillsRef: sectionRef;
  contactRef: sectionRef;
  homeRef: sectionRef;
  experianceRef: sectionRef;
  projectsRef: sectionRef;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({
  skillsRef,
  contactRef,
  homeRef,
  experianceRef,
  projectsRef,
  isOpen,
  setIsOpen,
  mobileOpen,
  setMobileOpen,
}: sideBarProps) => {
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const toScroll = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-40 p-3 text-dark-100 cursor-pointer  md:hidden"
      >
        <PanelRightClose />
      </button>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 backdrop-blur-sm md:hidden"
        />
      )}

      <aside
        className={clsx(
          "fixed left-0 top-0 h-full z-50 flex flex-col border-r border-dark-200  text-dark-100",
          "transition-all duration-300",
          isOpen ? "w-64" : "w-14",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div
              onClick={toggleSidebar}
              className="cursor-w-resize w-8 h-8 bg-white/20 rounded-full duration-400  hover:scale-110"
            />
            {isOpen && (
              <div>
                <p className="font-semibold">Ashok Choudhary</p>
                <p className="text-sm text-white/60">Full-Stack Developer</p>
              </div>
            )}
          </div>

          {isOpen && (
            <PanelLeftClose
              className="cursor-pointer"
              onClick={toggleSidebar}
            />
          )}
        </div>

        <div
          className={clsx(
            "flex flex-col gap-3 border-t border-dark-200 pt-4",
            isOpen ? "items-start px-4" : "items-center px-2"
          )}
        >
          <SidebarTab
            onClick={() => toScroll(homeRef)}
            isOpen={isOpen}
            icon={House}
            title="Home"
          />
          <SidebarTab
            onClick={() => toScroll(projectsRef)}
            isOpen={isOpen}
            icon={FolderKanban}
            title="Projects"
          />
          <SidebarTab
            onClick={() => toScroll(experianceRef)}
            isOpen={isOpen}
            icon={Briefcase}
            title="Experiance"
          />
          <SidebarTab
            onClick={() => toScroll(skillsRef)}
            isOpen={isOpen}
            icon={Zap}
            title="Skills"
          />
          <SidebarTab
            onClick={() => toScroll(contactRef)}
            isOpen={isOpen}
            icon={Mail}
            title="Contact"
          />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
