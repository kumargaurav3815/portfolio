/** @format */

import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="https://facebook.com/" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <BsFacebook />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/kumar-gaurav-21103122b/"
        target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <BsLinkedin />
        </span>
      </a>

      <a href="https://github.com/" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <BsGithub />
        </span>
      </a>
    </div>
  );
};

export default Footer;
