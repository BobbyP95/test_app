import phone from "/phone.svg";
import loc from "/location.svg";
import email from "/email.svg";
import "../components/footer.css";
export function Footer() {
  return (
    <>
      <div className="w-full bottom-0 text-white ">
        <div className="bg-emerald-950 p-7 grid grid-cols-3  gap-4 text-sm md:text-md lg:text-xl ">
          <div className="v-list flex flex-col w-60  ">
            <h1 className="font-bold text-left">
              <a href="#/">Company</a>
            </h1>
            <div className=" mt-3 flex flex-col text-left gap-2">
              <h3>
                <a href="#/about_us">About</a>
              </h3>
              <h3>
                <a href="#/contact_us">Contact</a>
              </h3>
              <h3>
                <a href="#/consulting">Consulting</a>
              </h3>
            </div>
          </div>
          <div className="v-list flex flex-col  w-60 ">
            <h1 className="font-bold text-left">
              <a href="#/terms">Terms & Policies</a>
            </h1>
            <div className=" mt-3 flex flex-col text-left gap-2">
              <h3>
                <a href="#/terms/">Privacy Policy</a>
              </h3>
              <h3>
                <a href="#/terms/">Rights</a>
              </h3>
              <h3>
                <a href="#/terms/">Conditions</a>
              </h3>
              <h3>
                <a href="#/terms/">Services</a>{" "}
              </h3>
            </div>
          </div>
          <div className="v-list flex-col w-auto ml-10 ">
            <h1 className="font-bold text-left">Follow Us</h1>
            <div className=" mt-3 flex flex-col text-left gap-2">
              <h3>
                <a
                  href="https://www.facebook.com/recruitingfirm"
                  target="_blank"
                >
                  Facebook
                </a>
              </h3>
              <h3>
                <a
                  href="https://www.threads.com/@gbd_recruit?xmt=AQF0gNNzZHRmbEZGCrGkJ0FAKexdF9chyR98c41tG5orGhg"
                  target="_blank"
                >
                  Thread
                </a>
              </h3>
              <h3>
                <a
                  href="https://www.instagram.com/gbd_recruit/"
                  target="_blank"
                >
                  Instagram
                </a>
              </h3>
              <h3>
                <a
                  href="https://www.linkedin.com/company/gbd-recruit-global-ventures-limited/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </h3>
            </div>
          </div>
          <div className="flex flex-col w-60 ">
            <a href="#/">
              <img className="w-40" src="/gbd.svg" alt="Logo" />
            </a>
            <h1 className="my-10 text-left font-extrabold text-white cursor-pointer">
              GBD Company LTD
            </h1>
          </div>
          <div className="v-list flex flex-col  w-60 main-loc">
            
            <div className=" mt-3 flex flex-row text-left gap-2">
              <img src={loc} alt="location" className="w-5" />
              <span className="font-normal text-sm" > 19 Ogunshola, Ifelodun Jogbodile Ifo, Sango Otta, Ogun, Nigeria 112104</span>
            </div>
            <div className=" mt-3 flex flex-row text-left gap-2">
              <img src={email} alt="email" className="w-5" />
              <span className="font-normal text-sm" > info@gbdrecruit.com</span>
            </div>
            <div className=" mt-3 flex flex-row text-left gap-2">
              <img src={email} alt="email" className="w-5" />
              <span className="font-normal text-sm" > gbdrecruit@gmail.com</span>
            </div>
            <div className=" mt-3 flex flex-row text-left gap-2">
              <img src={phone} alt="phone" className="w-5" />
              <span className="font-normal text-sm" > +2347026285552</span>
            </div>
          </div>
        </div> 
        <div className="v-list flex flex-col    bg-emerald-950 p-7 phone-loc">
            
            <div className=" mt-3 flex flex-row text-left gap-2">
              <img src={loc} alt="location" className="w-5" />
              <span className="font-normal text-sm" > 19 Ogunshola, Ifelodun Jogbodile Ifo, Sango Otta, Ogun, Nigeria 112104</span>
            </div>
            <div className=" mt-3 flex flex-row text-left gap-2">
              <img src={email} alt="email" className="w-5" />
              <span className="font-normal text-sm" > info@gbdrecruit.com</span>
            </div>
            <div className=" mt-3 flex flex-row text-left gap-2">
              <img src={email} alt="email" className="w-5" />
              <span className="font-normal text-sm" > gbdrecruit@gmail.com</span>
            </div>
            <div className=" mt-3 flex flex-row text-left gap-2">
              <img src={phone} alt="phone" className="w-5" />
              <span className="font-normal text-sm" > +2347026285552</span>
            </div>
          </div>
        <div className="bg-emerald-950 p-7 flex justify-around text-xl font-light items-center text-white ">
          <h2>Copyright © 2024 GBD Company LTD. All Rights Reserved</h2>
        </div>
      </div>
    </>
  );
}
