/** @format */

import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import Project1 from "../public/assets/images/project1.png";
const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Projects" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              href="https://mediguide.netlify.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group">
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={Project1}
                  alt=""
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:ml-16 z-10 ">
              <h3 className="text-2xl font-bold">MediGuide</h3>
              <p className="bg-[#112240] text-sm md:text-base md:p-6 rounded-md">
                The main goal of the project is to create a web application
                capable of forecasting several diseases and recommending the
                possible cure for the predicted disease using machine learning
                so that one can improve their present condition. The project
                contains a register page after and a login page etc. On login of
                the user, the webpage takes required input from users and then
                predict the possible diseases by analyzing the data entered by
                the user after that the webpage will provide recommendations
                related to the disease that helps the user to improve his/her
                condition and if required can book appointments with the doctor.
              </p>
              <ul
                className="text-xs md:text-sm lg:text-sm font-titleFont tracking-wide flex gap-1 md:gap-5 justify-between text-textDark text-center
            ">
                <li>Tech Used:</li>
                <li>Mongo DB</li>
                <li>Express JS</li>
                <li>React JS</li>
                <li>Node Js</li>
                <li>Tailwind CSS</li>
                <li>Stripe Payment gateway</li>
              </ul>
              <div></div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              href="https://mediguide.netlify.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group">
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={Project1}
                  alt=""
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:ml-16 z-10 ">
              <h3 className="text-2xl font-bold">MediGuide</h3>
              <p className="bg-[#112240] text-sm md:text-base md:p-6 rounded-md">
                The main goal of the project is to create a web application
                capable of forecasting several diseases and recommending the
                possible cure for the predicted disease using machine learning
                so that one can improve their present condition. The project
                contains a register page after and a login page etc. On login of
                the user, the webpage takes required input from users and then
                predict the possible diseases by analyzing the data entered by
                the user after that the webpage will provide recommendations
                related to the disease that helps the user to improve his/her
                condition and if required can book appointments with the doctor.
              </p>
              <ul
                className="text-xs md:text-sm lg:text-sm font-titleFont tracking-wide flex gap-1 md:gap-5 justify-between text-textDark text-center
            ">
                <li>Tech Used:</li>
                <li>Mongo DB</li>
                <li>Express JS</li>
                <li>React JS</li>
                <li>Node Js</li>
                <li>Tailwind CSS</li>
                <li>Stripe Payment gateway</li>
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
