import React from "react";
import Logo from "../../public/assets/Logo.svg";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <header className="grid grid-cols-2 p-5">
      <div className="logo flex items-center justify-start">
        <Image src={Logo} alt="" className="w-24" />
      </div>
      <div className="navigation relative flex flex-row-reverse overflow-x-hidden">
        <button className="w-12 h-10 flex justify-center items-center md:hidden">
          <MenuIcon />
        </button>
        <nav className="absolute top-[-1.25rem] opacity-0 right-[-1.3rem] bg-white w-full h-[400px] px-5 py-6 flex flex-col list-none justify-around items-center translate-x-[100%]">
          <li className="w-full">About us</li>
          <li className="w-full">Services</li>
          <li className="w-full">Use Cases</li>
          <li className="w-full">Pricing</li>
          <li className="w-full">Blog</li>
          <li className="w-full">
            <button>Request a Quote</button>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
