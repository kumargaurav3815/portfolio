/** @format */

import Image from "next/image";
import SectionTitle from "./SectionTitle";
import image from "../public/assets/images/Gaurav.jpeg";
import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandBootstrap, TbBrandCpp, TbHtml } from "react-icons/tb";
const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 ">
      <SectionTitle title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p className="text-base md:max-w-[650px] text-textDark font-medium">
            A versatile developer who thrives on the excitement of crafting
            comprehensive software solutions. With a dual proficiency as both a
            Full Stack Developer and a Software Developer, I am equipped to
            tackle the complexities of the digital landscape from all angles.
            This portfolio is an invitation for you to explore my journey,
            skills, and projects that encapsulate my passion for innovation and
            problem-solving. <br />
          </p>
          <p>Here are few technologies I have been working with:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen gap-1">
                <SiMongodb />
              </span>
              <span>Mongo DB</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen gap-1">
                <SiExpress />
              </span>
              <span>Express JS</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen gap-1">
                <SiReact />
              </span>
              <span>React JS</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen gap-1">
                <SiNodedotjs />
              </span>
              <span>Node JS</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen gap-1">
                <TbHtml />
              </span>
              <span>HTML</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen gap-1">
                <SiTailwindcss />
              </span>
              <span>Tailwind CSS</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen gap-1">
                <TbBrandBootstrap />
              </span>
              <span>BootStrap</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen gap-1">
                <TbBrandCpp />
              </span>
              <span>C++</span>
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div>
            <div>
              <Image
                height={500}
                src={image}
                alt=""
                className="rounded-lg h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
