import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Profile from "../assets/tejas2.jpeg";
import Skills from "./Skills";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import Portfolio from "./Portfolio";

const Home = () => {
  let text = "Fullstack Developer";
  let speed = 200;
  let eraseSpeed = 100;
  let pause = 1000;
  const [displayedText, setDisplayedText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isErasing) {
      intervalId = setInterval(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, eraseSpeed);
    } else {
      intervalId = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
    }

    if (!isErasing && index === text.length) {
      clearInterval(intervalId);
      setTimeout(() => setIsErasing(true), pause);
    } else if (isErasing && index === 0) {
      clearInterval(intervalId);
      setIsErasing(false);
    }

    return () => clearInterval(intervalId);
  }, [index, isErasing, text, speed, eraseSpeed, pause]);

  return (
    <Layout title={"Tejas Saykar - Developer"}>
      <div className="w-full bg-neutral-900 md:px-28">
        <div className="grid md:grid-cols-2">
          <div className="mt-10 md:mt-32 text-center md:text-start order-2 md:order-1">
            <div className="flex md:items-center justify-center md:justify-start gap-3">
              <h3 className="hidden md:block h-[1.8px] rounded-full w-6 md:w-8 bg-teal-500"></h3>
              <h2 className="text-3xl font-medium md:font-thin text-teal-500">Hello</h2>
            </div>
            <div className="mt-4 md:mt-10">
              <h1 className="text-4xl">I'm Tejas Saykar</h1>
            </div>
            <div className="mt-6">
              <motion.h2 className="font-medium text-stone-400 text-lg h-8">
                {displayedText}
              </motion.h2>
            </div>
            <div className="mt-4 mx-5 md:mx-0" style={{ lineHeight: "32px" }}>
              <h3 className="">
                Hi there! My name is Tejas Saykar and I'm a software engineer
                with over 1 year of experience in the industry. I love all
                things tech and coding.
              </h3>
            </div>

            <div className="mt-8">
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: [1.12, 1, 1.12] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-teal-500 rounded-md shadow-xl shadow-stone-500 text-stone-800 font-semibold py-4 px-4"
              >
                <a
                  href="https://in.linkedin.com/in/tejas-saykar-oo5"
                  target="_blank"
                  className="text-base flex items-center gap-2"
                >
                  Visit LinkedIn Profile <FaLinkedin className="text-2xl" />
                </a>
              </motion.button>
            </div>
          </div>
          <div className="flex justify-center items-center order-1 md:order-2 md:justify-end md:items-end mt-12">
            <div className="md:pr-10 relative">
              <img
                src={Profile}
                className="h-[250px] shadow-2xl shadow-stone-400 sm:h-[300px] lg:h-[400px] xl:h-[450px] bg-contain rounded-full object-contain mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mt-10 bg-neutral-900">
          <Skills />
        </div>

        <div className="mt-10 bg-neutral-900">
          <Portfolio />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
