import React, { useState } from "react";
import portfolio from "../assets/portfolio.png";
import ecomm from "../assets/ecomm.jpg";
import blog from "../assets/blog.jpg";
import loan from "../assets/loan.png";
import website from "../assets/website.jpeg";
import { motion } from "framer-motion";
import { FaEarthAsia, FaGithub } from "react-icons/fa6";

const Portfolio = () => {
  const [img, setImg] = useState("1");
  return (
    <div className="w-full pb-32">
      <div className="w-[75vw] mx-auto">
        <div className="text-center text-3xl font-semibold">
          <h2 className="relative">Portfolio</h2>
          <div className="absolute mt-1 text-center flex items-center justify-center w-[73%] mx-auto">
            <div className="h-[3px] w-20 text-center flex justify-center items-center rounded-full bg-teal-600"></div>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setImg("1")}
            onMouseLeave={() => setImg("")}
          >
            <img src={ecomm} className="aspect-square object-cover" alt="" />
            {img === "1" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-stone-800/80 transition-transform"
              >
                <div>
                  <div>
                    <h2
                      className="absolute top-16 left-10 md:top-[38%] lg:top-[20%] inset-0 text-teal-400 md:left-20 font-semibold xl:top-[38%] xl:left-20  text-xl md:text-2xl"
                      //   style={{ textShadow: "1px 1px white" }}
                    >
                      Ecommerce Website
                    </h2>
                  </div>
                  <div className="absolute top-20 left-24 md:top-[45%] md:left-[38%] mt-6 flex gap-4">
                    <div
                      title="GitHub Link"
                      className="h-10 w-10 border border-stone-400 flex items-center justify-center rounded-full p-2"
                    >
                      <a
                        href="https://github.com/TejasSaykar/AyurvedaEcomm"
                        target="_blank"
                      >
                        <FaGithub className="text-3xl" />
                      </a>
                    </div>
                    <div
                      title="Live Link"
                      className="h-10 w-10 border border-stone-400 flex items-center justify-center rounded-full p-2"
                    >
                      <a
                        href="https://gangagiriayurvedstore.com/"
                        target="_blank"
                      >
                        <FaEarthAsia className="text-3xl" />
                      </a>
                    </div>
                  </div>
                  <h4 className="block absolute bottom-16 md:bottom-[10%] text-center mt-12 text-lg font-semibold mx-5">
                    Visit Git Hub and Live Link given above
                  </h4>
                </div>
              </motion.div>
            )}
          </div>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setImg("2")}
            onMouseLeave={() => setImg("")}
          >
            <img src={blog} className="aspect-square object-cover" alt="" />
            {img === "2" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-stone-800/80 transition-transform"
              >
                <div>
                  <div>
                    <h2
                      className="absolute top-16 left-20 md:top-32 lg:top-20 lg:left-20 xl:top-32 xl:left-28 text-teal-400 md:left-28 font-semibold text-xl md:text-2xl"
                      //   style={{ textShadow: "1px 1px white" }}
                    >
                      Blog Website
                    </h2>
                  </div>
                  <div className="absolute top-20 left-[40%] md:top-40 md:left-40 lg:top-24 lg:left-32 xl:top-40 xl:left-40 mx-2 mt-6 flex gap-4">
                    <div
                      title="GitHub Link"
                      className="h-10 w-10 border border-stone-400 flex items-center justify-center rounded-full p-2"
                    >
                      <a
                        href="https://github.com/TejasSaykar/mernblogapp"
                        target="_blank"
                      >
                        <FaGithub className="text-3xl" />
                      </a>
                    </div>
                    {/* <div
                      title="Live Link"
                      className="h-10 w-10 border border-stone-400 flex items-center justify-center rounded-full p-2"
                    >
                      <FaEarthAsia className="text-3xl" />
                    </div> */}
                  </div>
                  <h4 className="absolute text-center bottom-16 mt-12 text-lg font-semibold mx-10 md:mx-20">
                    Visit Git Hub link given above
                  </h4>
                </div>
              </motion.div>
            )}
          </div>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setImg("3")}
            onMouseLeave={() => setImg("")}
          >
            <img src={loan} className="aspect-square" alt="" />
            {img === "3" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-stone-800/80 transition-transform"
              >
                <div>
                  <div>
                    <h2
                      className="absolute top-10 left-10 md:top-32 text-teal-400 md:left-20 lg:top-20 lg:left-10 xl:top-32 xl:left-20 font-semibold text-xl md:text-2xl"
                      //   style={{ textShadow: "1px 1px white" }}
                    >
                      Loan Management
                    </h2>
                  </div>
                  <div className="absolute top-[25%] left-[30%] md:top-40 md:left-32 lg:top-24 xl:top-[40%] xl:left-32 lg:left-28 mt-6 flex gap-4">
                    <div
                      title="GitHub Link"
                      className="h-10 w-10 border border-stone-400 flex items-center justify-center rounded-full p-2"
                    >
                      <a
                        href="https://github.com/TejasSaykar/walsawangi_Loan"
                        target="_blank"
                      >
                        <FaGithub className="text-3xl" />
                      </a>
                    </div>
                    <div
                      title="Live Link"
                      className="h-10 w-10 border border-stone-400 flex items-center justify-center rounded-full p-2"
                    >
                      <a
                        href="https://walsawangikarurban.netlify.app/"
                        target="_blank"
                      >
                        <FaEarthAsia className="text-3xl" />
                      </a>
                    </div>
                  </div>
                  <h4
                    className="absolute bottom-20 text-center mt-12 textbase
                   md:text-lg font-semibold mx-5"
                  >
                    Visit Git Hub and Live Link given above
                  </h4>
                </div>
              </motion.div>
            )}
          </div>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setImg("4")}
            onMouseLeave={() => setImg("")}
          >
            <img
              src={portfolio}
              className="aspect-square w-full h-full object-cover"
              alt=""
            />
            {img === "4" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-stone-800/80 transition-transform"
              >
                <div>
                  <div>
                    <h2
                      className="absolute top-10 left-[20%] md:top-32 text-teal-400 md:left-20 lg:top-20 lg:left-16 font-semibold text-xl xl:left-20 xl:top-28 md:text-2xl"
                      //   style={{ textShadow: "1px 1px white" }}
                    >
                      Portfolio Website
                    </h2>
                  </div>
                  <div className="absolute top-[25%] left-[35%] md:top-40 md:left-32 lg:top-24 lg:left-28 xl:top-36 xl:left-32 mt-6 flex gap-4">
                    <div
                      title="GitHub Link"
                      className="h-10 w-10 border border-stone-400 flex items-center justify-center rounded-full p-2"
                    >
                      <FaGithub className="text-3xl" />
                    </div>
                    <div
                      title="Live Link"
                      className="h-10 w-10 border border-stone-400 flex items-center justify-center rounded-full p-2"
                    >
                      <FaEarthAsia className="text-3xl" />
                    </div>
                  </div>
                  <h4 className="absolute bottom-20 text-center mt-12 text-base md:text-lg font-semibold mx-5">
                    Visit Git Hub and Live Link given above
                  </h4>
                </div>
              </motion.div>
            )}
          </div>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setImg("5")}
            onMouseLeave={() => setImg("")}
          >
            <img src={website} className="aspect-square object-cover" alt="" />
            {img === "5" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-stone-800/80 transition-transform"
              >
                <div>
                  <div>
                    <h2
                      className="absolute top-10 left-10 md:top-32 text-teal-400 md:left-20 lg:top-20 lg:left-10 font-semibold xl:top-28 xl:left-20 text-xl md:text-2xl"
                      //   style={{ textShadow: "1px 1px white" }}
                    >
                      MAF Group Website
                    </h2>
                  </div>
                  <div className="absolute top-[25%] left-[30%] md:top-40 md:left-32 lg:top-24 lg:left-28 xl:top-36 xl:left-32 mt-6 flex gap-4">
                    <div
                      title="GitHub Link"
                      className="h-10 w-10 border border-stone-400 flex items-center justify-center rounded-full p-2"
                    >
                      <a
                        href="https://github.com/TejasSaykar/MAFGroupWebsite"
                        target="_blank"
                      >
                        <FaGithub className="text-3xl" />
                      </a>
                    </div>
                    <div
                      title="Live Link"
                      className="h-10 w-10 border border-stone-400 flex items-center justify-center rounded-full p-2"
                    >
                      <a href="https://www.mafgroup.com/" target="_blank">
                        <FaEarthAsia className="text-3xl" />
                      </a>
                    </div>
                  </div>
                  <h4 className="absolute bottom-20 text-base text-center mt-12 md:text-lg font-semibold mx-5">
                    Visit Git Hub and Live Link given above
                  </h4>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
