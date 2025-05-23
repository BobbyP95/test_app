type ReadyOptionProps = {
  tailwindColor: string;
  optionText: string;
  buttonText: string;
  cssClass: string;
};

export function ReadyOption({
  tailwindColor,
  optionText,
  buttonText,
  cssClass,
}: ReadyOptionProps) {
  return (
    <>
      <div
        className={` 
      ${cssClass} md:h-full options `}
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
          <button className="  w-fit mx-auto border-2 p-3 transition-all hover:bg-white hover:bg-opacity-40 rounded-full">
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
}
