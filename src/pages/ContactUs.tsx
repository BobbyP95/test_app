import "./contact.css";
import { Footer } from "../components/Footer";
import { useState } from "react";
import emailjs from "emailjs-com";

export function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_mjp1q2k", // Replace with your EmailJS service ID
        "template_hdn9xp8", // Replace with your EmailJS template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        "duhcsamw4_kzbK7NY" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert(`Message sent successfully!${result.text}`);
        },
        (error) => {
          alert(`Failed to send message. Please try again.${error.text}`);
        }
      );
  };

  return (
    <>
      <div className="main-div main-grid ">
        <div className="main-grid-item top-item ">
          <div className="w-full h-full"> CONTACT US</div>
        </div>
        <div className="main-grid-item left-item bg-gray-100">
          <h3 className="topic">How To Reach Us</h3>
          <p className="topic-message">
            We’re always happy to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help. <br />
            Please fill out the contact form below, and we’ll get back to you as soon as possible. <br />
            <br />
            We look forward to hearing from you!
          </p>
          <br />
          <span className="contact-email">Email: gbdrecruit@gmail.com</span>
          
          <object className="contact-svg" data="/contact.svg" type="image/svg+xml"></object>
        </div>

        {/* form area */}
        <div className="main-grid-item right-item bg-gray-100">
          <form onSubmit={handleSubmit} className="form">
            <div className="form-item fname-div">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-item lname-div">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-item phone-div">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-item email-div">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-item message-div">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows={6}
                cols={30}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}