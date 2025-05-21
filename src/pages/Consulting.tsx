import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import "./Consulting.css";

export function Consulting() {
  return (
    <>
      <div className="consulting_grid   ">
        <div className="item item_1  flex-col md:flex-row ">
          <div className="w-11/12 p-36">
            <h3 className="text-green-50 text-lg md:text-2xl lg:text-4xl font-bold">
              Need a fresh pair of eyes to help you breakdown your business?
            </h3>
            <h4 className="text-emerald-600 text-lg  md:text-3xl font-bold">
              Ask our team for help
            </h4>
            <Link to={"/contact_us"}>
              {" "}
              <button className="btn bg-green-700 text-lg m-9 p-2 text-center ">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
        <div className="item item_2 text-3xl ">
          
          <h3 className=" p-5 border-t-2 border-b-2 mt-12 mb-12">Dedicated To Your Success</h3>
        </div>
        <div className="item item_3  item_P flex-col ">
          {" "}
          <p className="para border-t-2 border-b-2 p-5 ">
            Our dedicated Customer Care team is here to assist you every step of
            the way. We’re committed to providing fast, friendly, and effective
            solutions to ensure your satisfaction. Whether you have a question
            or need support, we're just a click away!
          </p>

        </div>
        <div className="item item_4  item_img">
          {" "}
          <img
            className="w-3/4 "
            src="/src/assets/customerCare.jpg"
            alt="customer care image"
          />
        </div>
        <div className="item item_5 item_img mt-14 mb-14">          
          <img
            className="w-3/4 "
            src="/src/assets/customerCare2.jpg"
            alt="customer care image"
          />
        </div>
        <div className="item item_6 flex-col ">
          {" "}
          <p className="para border-t-2 border-b-2 p-5 ">
          Partner with our expert Customer Care team to deliver exceptional service to your clients. We specialize in providing responsive, professional support tailored to meet your business needs. Let us help you enhance customer satisfaction and build lasting relationships with your customers!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
