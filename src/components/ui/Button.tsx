import { cn } from "../../lib/utils";

interface ButtonProps {
    onClick:()=>void;
    title:string;
    icon:React.ComponentType<React.SVGProps<SVGSVGElement>>;
    variant:string;
}

const Button = ({onClick,title,icon:Icon,variant}:ButtonProps) => {
  return (
     <button 
          onClick={onClick} 
          className={cn(
            " flex items-center gap-4  cursor-pointer p-4 m-3 rounded-xl w-46 justify-center duration-400 hover:scale-110 ",variant==='primary'?'bg-gray-300':'card-glass'
          )}
        >
            <span className="transition-all duration-150  hover:scale-105">
               < Icon  /> 
            </span>
            { <span className="whitespace-nowrap">{title}</span>}
           
        </button>
  )
}

export default Button