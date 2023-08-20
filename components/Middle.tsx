/** @format */

import Link from "next/link";
import React from "react";

const Middle = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <h3 className="text-lg font-titleFont tracking-wide text-textGreen">
        Hi, My name is{" "}
      </h3>
      <h1 className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col">
        Kumar Gaurav
      </h1>
      <p className="text-base md:max-w-[650px] text-textDark font-medium">
        A versatile developer who thrives on the excitement of crafting
        comprehensive software solutions. With a dual proficiency as both a Full
        Stack Developer and a Software Developer, I am equipped to tackle the
        complexities of the digital landscape from all angles. This portfolio is
        an invitation for you to explore my journey, skills, and projects that
        encapsulate my passion for innovation and problem-solving. <br />
      </p>
      <Link href="https://mediguide.netlify.app/">
        <button className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">
          Check out my Project
        </button>
      </Link>
    </section>
  );
};

export default Middle;
