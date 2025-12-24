import clsx from "clsx";
interface SidebarTabProps {
  onClick?: () => void;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  isOpen: boolean;
}
const SidebarTab = ({
  onClick,
  icon: Icon,
  title,
  isOpen,
}: SidebarTabProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        " cursor-pointer  p-2 rounded-md hover:bg-dark-200/6 w-full hover:border-t hover:shadow-[0_-3px_7px_rgba(256,256,256,0.1)] border-white/15 ",
        !isOpen && "justify-center"
      )}
    >
      <div
        className={clsx(
          "flex items-center gap-4 transition-all duration-150  hover:translate-x-1"
        )}
      >
        <span className="transition-all duration-150  hover:rotate-25">
          <Icon />
        </span>
        {isOpen && <span className="whitespace-nowrap">{title}</span>}
      </div>
    </button>
  );
};

export default SidebarTab;
