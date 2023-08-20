/** @format */

import { AiOutlineArrowRight } from "react-icons/ai";

const Elewayte = () => {
  return (
    <div>
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Developer{" "}
        <span className="text-textGreen tracking-wide"> @Elewayte</span>
      </h3>
      <p className="text-sm mr-1 font-medium">December 2022 - February-2023</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-sm flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <AiOutlineArrowRight />
          </span>
          Joined the organization as Web Development Intern.
        </li>
        <li className="text-sm flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <AiOutlineArrowRight />
          </span>
          Developed a responsive website for gym.
        </li>
        <li className="text-sm flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <AiOutlineArrowRight />
          </span>
          Collaborative team work with strong communication skills to implement
          functionalities.
        </li>
        <li className="text-sm flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <AiOutlineArrowRight />
          </span>
          Tech Used: HTML, CSS, JavaScript.
        </li>
      </ul>
    </div>
  );
};

export default Elewayte;
