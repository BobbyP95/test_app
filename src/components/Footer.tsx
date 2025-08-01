export function Footer() {
  return (
    <><div className="w-full bottom-0 text-white">
      <div className="bg-emerald-950 p-7 grid grid-cols-3  gap-4 text-sm md:text-md lg:text-xl ">
        
        <div className="flex flex-col w-60 ">
          <h1 className="font-bold text-left">Company</h1>
          <div className=" mt-3 flex flex-col text-left gap-2" >
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Blog</h3>
          </div>
        </div>
        <div className="flex flex-col  w-60">
          <h1 className="font-bold text-left" >Terms & Policies</h1>
          <div className=" mt-3 flex flex-col text-left gap-2" >
          <h3>Policies</h3>
          <h3>Terms of Use</h3>
          <h3>Code of Conduct</h3>
          <h3>Privacy</h3>
          </div>
        </div>
        <div className="flex flex-col w-auto">
          <h1 className="font-bold text-left" >Follow Us</h1>
          <div className=" mt-3 flex flex-col text-left gap-2" >
          <h3>Policies</h3>
          <h3>Terms of Use</h3>
          <h3>Code of Conduct</h3>
          <h3>Privacy</h3>
          </div>
        </div>
        <div className="flex flex-col w-60 ">
          <img className="w-40" src="/gbd.svg" alt="Logo" />
          <h1 className="my-10 text-left font-extrabold text-white">
            GBD Company LTD
          </h1>
        </div>
      </div>
      <div className="bg-emerald-950 p-7 flex justify-around text-xl font-light items-center text-white ">
        <h2>Copyright © 2024 GBD Company LTD. All Rights Reserved</h2>
      </div>
      </div>
    </>
  );
}
