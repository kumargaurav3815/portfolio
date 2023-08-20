/** @format */

import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import Link from "next/link";
import transitions from "@material-ui/core/styles/transitions";
const Navbar = () => {
  return (
    <div className="width-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <div>
          <Image className="" width={200} src={logo} alt="" />
        </div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <li>Home</li>
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <li>About</li>
            </Link>
            <Link
              href="#experience"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <li>Experience</li>
            </Link>
            <Link
              href="#project"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <li>Project</li>
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <li>Contact</li>
            </Link>
          </ul>
          <a href="/assets/Resume.pdf" target="_blank">
            <button className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
              Resume
            </button>
          </a>
        </div>
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>{" "}
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>{" "}
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
