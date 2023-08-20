/** @format */

"use client";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Elewayte from "./works/Elewayte";

const Experience = () => {
  const [workElewayte, setWorkElewayte] = useState(true);

  const handleElewayte = () => {
    setWorkElewayte(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerSmall mx-auto py-10 lgl:py-24 px-4">
      <SectionTitle title="Work Experience" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            className={`${
              workElewayte
                ? " text-textGreen"
                : "border-l-hoverColor text-textDark"
            }border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            onClick={handleElewayte}>
            Elewayte
          </li>
        </ul>
        {workElewayte && <Elewayte />}
      </div>
    </section>
  );
};

export default Experience;
