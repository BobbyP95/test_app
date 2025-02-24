import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Import HashRouter
import { Navbar } from "./components/Navbar";
import { AboutUs } from "./pages/AboutUs";
import { Home } from "./pages/Home";
import { Consulting } from "./pages/Consulting";
import { Recruiting } from "./pages/Recruiting";
import { GetAJob } from "./pages/GetAJob";
import { ContactUs } from "./pages/ContactUs";

function App() {
  const links = [
    { name: "CONSULTING", href: "/#/consulting" }, // Use correct paths
    { name: "RECRUITING", href: "/#/recruiting" },
    { name: "GET A JOB", href: "/#/get-a-job" }, // Use hyphens instead of spaces
    { name: "ABOUT US", href: "/#/about-us" },
    { name: "CONTACT US", href: "/#/contact-us" },
  ];

  return (
    <Router> {/* Wrap your app with HashRouter */}
      <Navbar companyName="GBD LTD" links={links} showSearch={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/recruiting" element={<Recruiting />} />
        <Route path="/get-a-job" element={<GetAJob />} /> {/* Use hyphens */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;