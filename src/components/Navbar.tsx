import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import gbdLogo from "/gbd.svg";
import { useState } from "react";
import "../components/navBar.css";


type NavbarProps = {
  companyName: string;
  links?: { name: string; href: string }[];
  showSearch?: boolean;
};

const socialMediaUrls = [
  "https://twitter.com/",
  "https://facebook.com/",
  "https://instagram.com/",
];

export function Navbar({
  companyName,
  links = [],
  showSearch = true,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState("open");
  const [id_label, setId_label] = useState("normal"); 
  
  function handleButton(){
    if(menuOpen == "open"){
      setMenuOpen("close")
      setId_label("side")
    }else{
      setMenuOpen("open")
      setId_label("normal")
    }
  }

  return (
    <>
      <div id="header" className="header ">
        <div className="topNav p-2 flex items-center justify-end gap-8 w-full bg-emerald-950 ">
          {showSearch && (
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-emerald-100 text-emerald-950 rounded-full px-3 py-1 focus:outline-none  focus:ring focus:ring-emerald-700"
              />
            </div>
          )}
          <div className="flex space-x-4 pr-3">
            {socialMediaUrls.map((url, index) => (
              <SocialIcon
                key={index}
                url={url}
                target="_blank"
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
            ))}
          </div>
        </div>
        <nav className=" bg-gray-300 p-2 ">
          <div className=" container mx-auto flex items-center justify-between">
            {/* Left side: Logo and Company Name */}
            <div className="flex items-center">
              <a href="/">
                <img
                  src={gbdLogo}
                  alt={`${companyName} logo`}
                  className="h-8 w-28 mr-2"
                />
              </a>

              <span className="resize text-emerald-950 text-auto font-semibold">
                {companyName}
              </span>
            </div>

            {/* Right side: Links and optional search box */}
            <div
              id={id_label}
              className={`navMenu flex text-sm md:flex-row items-center ${menuOpen} `}
            >
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="rightLinks font-semibold text-emerald-900 hover:text-emerald-950 "
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div
              className={`menu-button ${menuOpen}  p-1 flex flex-col justify-around items-center rounded-full text-3xl md:hidden relative `}
              onClick={handleButton}
            >
              <div className="bar"></div>
              <div className="bar mid-bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
