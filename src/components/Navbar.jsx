import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="w-full">
      <div className="w-fit md:w-full grid grid-cols-2 justify-between py-5 px-5 md:px-28 items-center">
        <div className="flex gap-2 items-center w-full mx-auto">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl text-stone-300"
          >
            <motion.span className="text-teal-600 font-semibold">T</motion.span>
            ejas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl text-stone-300"
          >
            <motion.span
              // initial={{ opacity: 0, x: -30 }}
              // animate={{ opacity: 1, x: 0 }}
              // transition={{ duration: 1 }}
              className="text-teal-600 font-semibold"
            >
              S
            </motion.span>
            aykar
          </motion.h2>
        </div>
        <div className="hidden w-full md:flex items-center justify-end">
          {/* <div className="flex items-center gap-10 justify-end border-r-2 pr-12 h-5 border-stone-300">
            <Link className="hover:text-teal-600 text-lg font-medium text-stone-300">
              Home
            </Link>
            <Link className="hover:text-teal-600 text-lg font-medium text-stone-300">
              Portfolio
            </Link>
          </div> */}
          <div className="flex items-center gap-8 ml-2 text-lg px-4 py-4">
            <motion.a
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2 }}
              href="https://github.com/TejasSaykar"
              target="_blank"
            >
              <FaGithub className="cursor-pointer text-xl hover:text-teal-500" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2 }}
              href="https://in.linkedin.com/in/tejas-saykar-oo5"
              target="_blank"
            >
              <FaLinkedinIn className="cursor-pointer text-xl hover:text-teal-500" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2 }}
              href=""
            >
              <FaXTwitter className="cursor-pointer text-xl hover:text-teal-500" />
            </motion.a>
          </div>
        </div>
        <div className="flex justify-end items-end">
          <div className="relative">
            <IoIosArrowDropdownCircle
              onClick={() => setShow(!show)}
              className="text-2xl cursor-pointer text-teal-100 font-semibold"
            />
            <AnimatePresence>
              {show && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-stone-600 absolute rounded-full py-5 top-10 -right-1 p-2 flex flex-col gap-3"
                >
                  <motion.a
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    exit={{ opacity: 0, y: -40 }}
                    href="https://www.linkedin.com/in/tejas-saykar-oo5"
                    target="_blank"
                  >
                    <FaLinkedinIn className="cursor-pointer" />
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    exit={{ opacity: 0, y: -40 }}
                    href="https://www.github.com/TejasSaykar"
                    target="_blank"
                  >
                    <FaGithub className="cursor-pointer" />
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
