import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AboutUs } from "./pages/AboutUs";
import { Home } from "./pages/Home";
import { Consulting } from "./pages/Consulting";
import { Recruiting } from "./pages/Recruiting";
import { GetAJob } from "./pages/GetAJob";
import { ContactUs } from "./pages/ContactUs";
import { Services } from "./pages/Services";
import {PrivacyPolicy} from "./pages/PrivacyPolicy";
import {Terms} from "./pages/Terms";

function App() {
  const links = [
    { name: "HOME", href: "/" },
    { name: "CONSULTING", href: "/consulting" },
    { name: "RECRUITING", href: "/recruiting" },
    { name: "ABOUT US", href: "/about_us" },
    { name: "CONTACT US", href: "/contact_us" },
  ];

  // const BASE_URL = import.meta.env.VITE_BASE_URL;
  return (
    <>
        <Navbar companyName="GBD LTD" links={links} showSearch={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/recruiting" element={<Recruiting />} />
          <Route path="/get_a_job" element={<GetAJob />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/privacy_policy" element={<PrivacyPolicy/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>

    </>
  );
}

export default App;
