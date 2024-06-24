import React from "react";
import ReactLogo from "../assets/reactLogo.png";
import Express from "../assets/expressjs.png";
import NodeJs from "../assets/nodejs.png";
import Mongo from "../assets/mongodb.png";
import NextJs from "../assets/nextjs.png";
import Git from "../assets/git.png";
import Tailwind from "../assets/tailwind.png";
import Docker from "../assets/docker.png";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="w-[70vw] mx-auto py-10">
      <div className="w-full pb-16">
        <h2 className="text-center font-semibold text-3xl relative">My Skills</h2>
        <div className="absolute mt-2 text-center flex items-center justify-center w-[68%] mx-auto">
          <div className="h-[3px] w-20 text-center flex justify-center items-center rounded-full bg-teal-600"></div>
        </div>
      </div>
      <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <motion.div
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-800 p-4 flex flex-col py-10 rounded-xl hover:bg-teal-700 gap-6 items-center justify-center"
        >
          <img src={ReactLogo} className="rounded-full h-20" alt="" />
          <h2 className="font-medium">React Js</h2>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-800 p-4 flex flex-col py-10 rounded-xl hover:bg-teal-700 gap-6 items-center justify-center"
        >
          <img src={NodeJs} className="rounded-full h-20" alt="" />
          <h2 className="font-medium">Node Js</h2>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-800 p-4 flex flex-col py-10 rounded-xl hover:bg-teal-700 gap-6 items-center justify-center"
        >
          <img src={Express} className="rounded-full h-20" alt="" />
          <h2 className="font-medium">Express Js</h2>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-800 p-4 flex flex-col py-10 rounded-xl hover:bg-teal-700 gap-6 items-center justify-center"
        >
          <img src={Mongo} className="rounded-full h-20" alt="" />
          <h2 className="font-medium">Mongo DB</h2>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-800 p-4 flex flex-col py-10 rounded-xl hover:bg-teal-700 gap-6 items-center justify-center"
        >
          <img src={NextJs} className="rounded-full h-20" alt="" />
          <h2 className="font-medium">Next Js</h2>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-800 p-4 flex flex-col py-10 rounded-xl hover:bg-teal-700 gap-6 items-center justify-center"
        >
          <img src={Git} className="rounded-full h-20" alt="" />
          <h2 className="font-medium">Git Source Control</h2>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-800 p-4 flex flex-col py-10 rounded-xl hover:bg-teal-700 gap-6 items-center justify-center"
        >
          <img src={Tailwind} className="rounded-full h-20" alt="" />
          <h2 className="font-medium">Tailwind CSS</h2>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-800 p-4 flex flex-col py-10 rounded-xl hover:bg-teal-700 gap-6 items-center justify-center"
        >
          <img src={Docker} className="rounded-full h-20" alt="" />
          <h2 className="font-medium">Docker</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
