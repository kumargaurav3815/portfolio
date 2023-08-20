/** @format */

import React from "react";
import SectionTitle from "./SectionTitle";
const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center">
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        Let us Connect
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil
        ullam aut suscipit eveniet quos quibusdam voluptates esse, maiores omnis
        tenetur aspernatur totam modi, accusamus sapiente porro sit molestiae?
        Sed.
      </p>
      <a href="mailto:kuamrgaurav.3815@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wide rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
