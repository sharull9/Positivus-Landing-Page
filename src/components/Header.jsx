import React, { useState } from "react";
import Logo from "../../public/assets/Logo.svg";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="grid grid-cols-2 p-5">
      <div className="logo flex items-center justify-start">
        <Image src={Logo} alt="" className="w-24" />
      </div>
      <div className="relative flex flex-row-reverse">
        <button
          className={`w-12 h-10 flex justify-center items-center md:hidden z-10 transition-all duration-300 ${
            menu ? "text-white" : "text-dark"
          }`}
          onClick={() => {
            setMenu(!menu);
          }}
        >
          {menu ? <CloseIcon /> : <MenuIcon />}
        </button>
        <nav
          className={`absolute top-[-1.25rem] right-[-1.3rem] bg-dark text-white w-[375px] h-[100vh] px-10 py-16 flex flex-col list-none justify-start gap-8 items-center transition-all duration-300  ${
            menu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100%]"
          }`}
        >
          <li className="w-full border-b border-primary pb-5">About us</li>
          <li className="w-full border-b border-primary pb-5">Services</li>
          <li className="w-full border-b border-primary pb-5">Use Cases</li>
          <li className="w-full border-b border-primary pb-5">Pricing</li>
          <li className="w-full border-b border-primary pb-5">Blog</li>
          <li className="w-full border-b border-primary pb-5">
            <button>Request a Quote</button>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
