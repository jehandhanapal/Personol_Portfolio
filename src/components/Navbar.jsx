import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import { styled } from "styled-components";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

export default function Navbar() {
  const [showNav, setshowNav] = useState(false);
  const displayref = useRef(null);

  const handleClick = () => {
    setshowNav(!showNav);
    if (showNav === false) {
      displayref.current.classList.remove("hidden");
    } else displayref.current.classList.add("hidden");
  };
  return (
    <Container className=" relative shadow-xl">
      <nav className="flex  relative w-[85%] mx-auto items-center lg:justify-between flex-wrap  py-3 px-8">
        <div className="block lg:hidden">
          <button className="flex items-center px-2 py-2 text-white transition-all ">
            <span className={`block ${showNav === false ? "block" : "hidden"} text-2xl`} onClick={() => handleClick()}>
              <GiHamburgerMenu />
            </span>
            <span className={`block ${showNav === true ? "block" : "hidden"} text-2xl`} onClick={() => handleClick()}>
              <IoClose />
            </span>
          </button>
        </div>
        <div className="lg:flex items-center lg:relative md:flex text-white absolute md:left-[30%] left-[38%] lg:left-2 mr-6 top-5 lg:top-0">
          <img src="/pngegg(1).png" alt="kk" className="lg:w-[60px] md:w-[50px] w-[80px] lg:h-[60px] md:h-[50px] h-12 " />
          <span className="font-semibold text-2xl ml-3 lg:inline-block md:inline-block hidden  ">Jehan.dev</span>
        </div>

        <div className="w-full block lg:justify-center lg:ml-12  lg:flex lg:items-center lg:w-auto">
          <div ref={displayref} className="text-base hidden font-medium lg:flex-grow lg:flex lg:justify-center">
            <Link to="/our_vehicles" className="block mt-4 lg:focus:border-b-2 lg:focus:border-blue-500 lg:inline-block lg:mt-0 lg:mr-2 text-white hover:text-blue-600 p-2 transition-all">
              Projects
            </Link>
            <Link to="/our_packages" className="block mt-4 lg:focus:border-b-2 lg:focus:border-blue-500 lg:inline-block lg:mt-0 lg:mr-2 text-white hover:text-blue-600 p-2 transition-all">
              Skills
            </Link>
            <Link
              to="testimonials"
              className="block mt-4 lg:focus:border-b-2 lg:focus:border-blue-500 lg:inline-block lg:mt-0 lg:mr-2 text-white hover:text-blue-600 p-2 transition-all cursor-pointer"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </div>
        </div>
        <div className="inline-flex gap-4  lg:right-8 md:right-2 right-0 top-8 lg:top-10 ">
          <a className="text-white text-2xl">
            <BsGithub />
          </a>
          <a className="text-white text-2xl">
            <AiFillLinkedin />
          </a>
        </div>
      </nav>
    </Container>
  );
}
const Container = styled.div``;
