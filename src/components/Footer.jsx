import React from "react";
import { LuMail } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-800/90 w-full">
      <div className="">
        <div className="grid grid-cols-12 gap-2">
          <div className="border-t-[3px] col-span-3 lg:col-span-5 border-teal-600 w-full"></div>
          <div className="col-span-6 lg:col-span-2 relative">
            <h3 className="text-center text-2xl md:text-4xl -mt-5 font-semibold">
              Contact Me
            </h3>
          </div>
          <div className="col-span-3 border-t-[3px] lg:col-span-5 border-teal-600 w-full"></div>
        </div>
        <div className="pb-20">
          <div className="w-full px-5 lg:w-2/3 xl:w-1/2 lg:px-0 lg:mx-auto mt-5 grid md:grid-cols-2 gap-5 py-10">
            <div className="bg-zinc-800/80 rounded-lg p-4 flex items-center gap-3">
              <LuMail className="text-4xl md:text-[2.5rem]" />
              <span className="text-base md:text-xl font-semibold text-teal-500">
                tejassaykar2001@gmail.com
              </span>
            </div>
            <div className="bg-neutral-800/80 rounded-lg p-4 flex items-center gap-3">
              <IoCallOutline className="text-4xl md:text-[2.5rem]" />
              <span className="text-base md:text-xl font-semibold text-teal-500">
                +91 7620307622
              </span>
            </div>
          </div>
          <div className="md:w-1/2 xl:w-1/2 mx-auto px-5 md:px-0">
            <div className="bg-neutral-800/80 rounded-lg p-4 w-full xl:w-1/2 mx-auto flex items-center gap-3">
              <IoLocationOutline className="text-4xl md:text-[2.5rem]" />
              <span className="text-base md:text-xl font-semibold text-teal-500">
                Nashik, Maharashtra, India
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="border-t-[3px] border-teal-600 col-span-4 rounded-full w-full"></div>
        <div className="col-span-4 relative w-full flex items-center justify-center">
          <div className="absolute -top-3justify-center flex items-center gap-3 md:gap-9">
            <FaLinkedinIn className="text-2xl md:text-4xl hover:text-teal-500 cursor-pointer"/>
            <FaGithub className="text-2xl md:text-4xl hover:text-teal-500 cursor-pointer"/>
            <FaXTwitter className="text-2xl md:text-4xl hover:text-teal-500 cursor-pointer"/>
          </div>
        </div>
        <div className="col-span-4 border-t-[3px] border-teal-600 rounded-full w-full"></div>
      </div>
      <div className="bg-neutral-900 p-4 text-center text-sm pt-10">
        <div>
          <h3 className="text-stone-400">
            © Copyright 2024 - Developed by Tejas Saykar. All right reserved.
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
