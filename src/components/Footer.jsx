import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div id="contact" className=" w-[85%] px-8 py-12 text-white flex lg:flex-row flex-wrap lg:gap-0 gap-4 justify-between border-gray-500 border-t-[1px] mx-auto">
      <div className="flex flex-col gap-4 items-start">
        <span>Phone</span>
        <a href="tel:9578153023" className="text-sm text-gray-500 transition-all hover:text-white ">+91 9578153023</a>
      </div>
      <div className="flex flex-col gap-4 items-start">
        <span>Email</span>
        <span ><a href="mailto:jehandhanapal@gmail.com" className="text-sm text-gray-500 transition-all hover:text-white ">jehandhanapal@gmail.com</a></span>
      </div>
      <div className="flex flex-col gap-4 items-start">
        <span>Follow me</span>
        <div className="flex gap-4">
        <a href="https://github.com/jehandhanapal" target="_blank" className="text-gray-500 text-xl transition-all cursor-pointer hover:text-white ">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/jehan-dhanapal-0a556a291/" target="_blank" className="text-gray-500 transition-all text-xl cursor-pointer hover:text-white ">
            <AiFillLinkedin  />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:my-0 my-4 items-start justify-center">
        <span className="text-sm text-gray-500">&copy; 2023 By Jehan Dhanapal.</span>
        <span className="text-sm text-gray-500 hover:text-white ">All Rights Reserved</span>
      </div>
    </div>
  );
}
