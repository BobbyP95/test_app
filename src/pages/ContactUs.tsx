import "./contact.css";
import { Footer } from "../components/Footer";
export function ContactUs() {
  return (
    <>
      <div className="main-div main-grid ">
        <div className="main-grid-item top-item ">
          <div className="w-full h-full"> CONTACT US</div>
        </div>
        <div className="main-grid-item left-item bg-gray-100">
            <h3 className=" topic">How To Reach Us</h3>
            <p className=" topic-message">We’re always happy to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help. <br></br>Please fill out the contact form below, and we’ll get back to you as soon as possible. <br></br>
            <br />
            We look forward to hearing from you!
            </p>
            <br />
            <span className=" contact-email">Email: info@gbd.com</span>
            <div className="map"></div>
        </div>

        {/* form area */}
        <div className="main-grid-item right-item bg-gray-100">
          <form action="" className="form">
            <div className="form-item fname-div">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" name="first-name" />
            </div>
            <div className="form-item lname-div">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" name="last-name" />
            </div>
            <div className="form-item phone-div">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" name="phone" />
            </div>
            <div className="form-item email-div">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" />
            </div>
            <div className="form-item message-div">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows={6}
                cols={30}
              ></textarea>
            </div>
            <button className="submit-btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
