/** @format */

import Image from "next/image";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Left from "../..//components/Left";
import Right from "../..//components/Right";
import Middle from "../..//components/Middle";
import About from "../..//components/About";
import Experience from "../..//components/Experience";
import Projects from "../..//components/Projects";
import Contact from "../..//components/Contact";
import Footer from "../..//components/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="../public/assets/images/logo.png" />
      </Head>
      <main className="w-full  h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            <Left />
          </div>
          <div className="h-[88vh] mx-auto p-4 w-full">
            <Middle />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </div>
          <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
            <Right />
          </div>
        </div>
      </main>
    </>
  );
}
