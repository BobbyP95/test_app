import "../components/ReadyOption.css";
import {Link} from "react-router-dom"
type ReadyOptionProps = {
  id: number;
  tailwindColor: string;
  optionText: string;
  buttonText: string;
  cssClass: string;
  link?: string ;
};

export function ReadyOption({
  id,
  tailwindColor,
  optionText,
  buttonText,
  cssClass,
  link,
}: ReadyOptionProps) {
  return (
    <>
      <div
        id={`readyO`}
        className={` 
      ${cssClass} md:h-full options readyOption-div `}
      >
        <div
          style={{ backgroundColor: `${tailwindColor}` }}
          className={`p-5
      bg-opacity-85 w-auto md:h-full flex flex-col justify-center gap-24 text-2xl text-white`}
        >
          <div className="flex flex-col ">
            <span>I'm ready to</span>
            
            <span>{optionText}</span>
            
          </div>
          <Link
            key={id}
            to={link?link:""}
            >
          <button className="  w-fit mx-auto border-2 p-3 transition-all hover:bg-white hover:bg-opacity-40 rounded-full">
            {buttonText}
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}
