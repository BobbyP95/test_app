import { Footer } from "../components/Footer";
import { ReadyOption } from "../components/ReadyOption";

const sections = [
  { 
    id: 0,
    tailwindColor: "rgb(22, 75, 96,0.8)",
    optionText: "Get TO WORK",
    buttonText: "Call Center",
    cssClass: "callCenter",
    link: "/contact_us",
  },
  // {
  //   id: 1,
  //   tailwindColor: "rgb(228, 143, 69,0.8)",
  //   optionText: "HIRE PEOPLE",
  //   buttonText: "Data Entry",
  //   cssClass: "dataEntry",
  //   link:"/recruiting",
  // },
  {
    id: 2,
    tailwindColor: "rgb(37, 67, 54,0.8)",
    optionText: "Get TO WORK",
    buttonText: "Consultation",
    cssClass: "consulting",
    link : "/consulting"
  },
];

export function Home() {
   window.scroll(0, 0);
  return (
    <>
      <div className="home flex flex-col md:flex-row ">
        {sections.map((values) => (
          <div key={values.id} className=" md:w-1/2  md:h-lvh">
            <ReadyOption  {...values} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
