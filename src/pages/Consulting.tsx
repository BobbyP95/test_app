import { Footer } from "../components/Footer";
import "./Consulting.css";

export function Consulting() {
  return (
    <>
      <div className="consulting_grid   ">
        <div className="item item_1  flex-col md:flex-row ">
          <div className="w-11/12 md:text-left md:w-1/2  p-16">
            <h3 className="text-green-50  sm:text-2xl lg:text-4xl font-bold">
              Need a fresh pair of eyes to help you breakdown your business?
            </h3>
            <h4 className="text-emerald-600 text-3xl font-bold">
              Ask our team for help
            </h4>
            <a href="/#/contact_us">
              {" "}
              <button className="btn bg-green-700 text-3xl m-9 p-2 rounded-2xl shadow-xl text-center ">
                CONTACT US
              </button>
            </a>
          </div>
        </div>
        <div className="item item_2">
          <h3>Dedicated to Your Success</h3>
        </div>
        <div className="item item_3 item_P flex-col">
          {" "}
          <p>
            Our dedicated Customer Care team is here to assist you every step of
            the way. We’re committed to providing fast, friendly, and effective
            solutions to ensure your satisfaction. Whether you have a question
            or need support, we're just a click away!
          </p>

        </div>
        <div className="item item_4 item_img">
          {" "}
          <img
            className="w-3/4 "
            src="/customer_care.svg"
            alt="customer care image"
          />
        </div>
        <div className="item item_5 mb-10">          
          <img
            className="w-3/6 "
            src="/customer_care_2.svg"
            alt="customer care image"
          />
        </div>
        <div className="item item_6 flex-col">
          {" "}
          <p>
          Partner with our expert Customer Care team to deliver exceptional service to your clients. We specialize in providing responsive, professional support tailored to meet your business needs. Let us help you enhance customer satisfaction and build lasting relationships with your customers!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
