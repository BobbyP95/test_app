import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
// import { Storage } from 'aws-amplify';
import "./recruiting.css";



type FormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
};
export function Recruiting() {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    country: "Ghana",
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

      emailjs
        .send(
          "service_mjp1q2k", 
          "template_hdn9xp8", 
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            country: formData.country,
          }, 
          "duhcsamw4_kzbK7NY" 
        )
        .then((response) => {
          console.log("Email sent successfully:", response);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    };


  
  return (
    <>
      <div className="recruiting-grid main-grid">
        <div className="main-grid-item top-item-recruiting">
          <div className="w-full h-full"></div>
        </div>
        <h2 className="recruiting">RECRUITING</h2>
        <p className="top-text text">
          <b>Looking for what’s next?</b> <br />
          We’re here to help. Tell us what you’re after, your skills, your goals, your “must-haves” and we’ll help you find a role that actually fits. Real jobs. Real support. No ghosting. Let’s find something great together. 👉 send us your resume.
        </p>
        
        <h4 className="mid-text">We’d love to hear from you</h4>
        <button className="mid-button">
          <Link to="/contact_us">LET'S CONNECT</Link>
        </button>
        <div className="lower-text-div">
          <img className="lower-img" src="/globe.png" alt="globe" />
          <p className="lower-text text">
            We're proud to work across borders, industries, and time zones — but what matters most to us is the connection we build with you.
            <br />
            We’re always happy to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help.
          </p>
        </div>
        <div className="recruiting-form">
          <form onSubmit={handleSubmit}>
            <div className="form-item">
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
            <div className="form-item">
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
            <div className="form-item">
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
            <div className="form-item">
              <label htmlFor="country">Country</label>
              <select
              className="country-select"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="Ghana">Ghana</option>
                <option value="Nigeria">Nigeria</option>
              </select>
            </div>
            <button className="submit-btn recruitment-btn" type="submit">Submit</button>
          </form>
   
        </div>
        
      </div>
      <Footer />
    </>
  );
}