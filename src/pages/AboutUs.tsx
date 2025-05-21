import "./aboutUs.css";
import { Footer } from "../components/Footer";
export function AboutUs() {
  return (
    <>
      <div className="main-div-about main-grid ">
        <div className="main-grid-item top-item ">
          <div className="w-full h-full"></div>
        </div>
          <h2 className="about ">ABOUT</h2>
          <h2 className="us">US</h2>
          <p className=" top-text">
          At GBD, we connect people and businesses — across industries, borders, and backgrounds.
          At our core, we’re people who enjoy helping people and businesses grow.  From team building, scaling, training and custom system's development, we’re here to help at an affordable price
          </p>
          <div className="lower-text-div bg-slate-400"></div>

        {/* form area */}

      </div>
      <Footer />
    </>
  );
}
