// import job_offerSVG from "/joa.svg";
import "./recruiting.css";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom"
export function Recruiting() {
  return (
    <>
      <div className="recruiting-grid main-grid ">
        <div className="main-grid-item top-item-recruiting ">
          <div className="w-full h-full"></div>
        </div>
        <h2 className="recruiting ">RECRUITING</h2>
        <h2 className="us">US</h2>
        <p className=" top-text text">
          At GBD, we connect people and businesses across industries, borders,
          and backgrounds. <br></br>
          At our core, we’re people who enjoy helping people and businesses
          grow. From team building, scaling, training and custom system's
          development, we’re here to help at an affordable price
        </p>

        <h4 className="mid-text ">
        We’d love to hear from you
        </h4>
        
        <button className="mid-button">
        <Link className="" to={"/contact_us"}>
          LET'S CONNECT
        </Link>
        </button>

        <div className="lower-text-div ">

        <img className="lower-img" src="/globe.png" alt="globe" />
        <p className="lower-text text">
        We're proud to work across borders, industries, and time zones — but what matters most to us is the connection we build with you.
        </p>
        
        </div>

        {/* form area */}
      </div>
      <Footer />
    </>
  );
}
