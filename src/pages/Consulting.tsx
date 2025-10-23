import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import "./Consulting.css";

export function Consulting() {
   window.scroll(0, 0);
  return (
    <>
      <div className="consulting-grid   ">
        <div className="item item_1  flex-col md:flex-row ">
          <div className="w-11/12 p-36">
            <h3 className="text-green-50 text-lg md:text-2xl lg:text-4xl font-bold">
              Need a fresh pair of eyes to help you breakdown your business?
            </h3>
            <h4 className="text-emerald-600 text-lg  md:text-3xl font-bold">
              Ask our team for help
            </h4>
          </div>
        </div>

      
      <button className="contact-button ">
              <Link to={"/contact_us"}>
                CONTACT US
                </Link>
              </button>

          
          <h3 className="dedicated set-2 ">DEDICATED</h3>
          <h3 className="to-your set-2">TO   YOUR</h3>
          <h3 className="success set-2">SUCCESS</h3>
        
        <div className="item item_3  item_P flex-col ">
          {" "}
          <p className="para ">
            Our dedicated Customer Care team is here to assist you every step of
            the way. We’re committed to providing fast, friendly, and effective
            solutions to ensure your satisfaction. Whether you have a question
            or need support, we're just a click away!
          </p>

        </div>
        <div className="item item_4  item_img ">
          {" "}
          <img
            className="w-3/4 "
            src="/customerCare.jpg"
            alt="customer care image"
          />
        </div>
        <div className="item item_5 item_img mt-14 mb-14">          
          <img
            className="w-3/4 "
            src="/customerCare2.jpg"
            alt="customer care image"
          />
        </div>
        <div className="item item_6 flex-col ">
          {" "}
          <p className="para  ">
          Partner with our expert Customer Care team to deliver exceptional service to your clients. We specialize in providing responsive, professional support tailored to meet your business needs. Let us help you enhance customer satisfaction and build lasting relationships with your customers!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
