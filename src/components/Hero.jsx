import React from "react";
import styled from "styled-components";
import profile from "../assets/profile_pic.jpg";
import resume from "../assets/my_resume V-1.pdf";

export default function Hero() {
  return (
    <Container className="w-[85%] mt-[6%]  mx-auto px-8  flex" id="hero">
      <div className="left text-white text-start flex flex-col h-auto gap-8 lg:w-[65%]">
        <div className="lg:text-5xl md:text-5xl text-3xl font-extrabold heading">
          <span>Hello, I'm Jehan,</span>
        </div>
        <div className="lg:text-5xl md:text-4xl text-2xl font-bold">
          <h4>Frontend Developer</h4>
        </div>
        <div className="lg:text-sm text-sm text-gray-400">
          <p>
            As a 25 years old fresh and passionate Front-End Developer<br/> I'm eager to embark my journey in the world of web development and i can<br/> build accessible, inclusive products and digital experiences for the
            web applications.
          </p>
        </div>
        <div>
          <button className="lg:text-base text-sm px-8 py-3 my-6 font-medium">
            <a href={resume} target="_blank" className="bg-transparent text-white">
              Resume
            </a>
          </button>
        </div>
      </div>
      <div className="right w-[35%] lg:relative lg:block hidden -left-[5rem]">
        <div className="circle absolute p-[2px]  w-[20rem] h-[20rem] rounded-full">
          <div className="w-full h-full rounded-full bg-[#000814]"></div>
        </div>
        <div className="bg w-[5rem] absolute h-[5rem] top-20   right-5  rounded-full"></div>
        <div className=" pic absolute right-10 p-[2px]  -top-10 rounded-full">
          <img src={profile} alt="" className="w-[10rem] h-[10rem] rounded-full" />
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .heading {
    span {
      background: rgb(131, 58, 180);
      background: linear-gradient(90deg, rgba(131, 58, 180, 1) 30%, rgba(29, 252, 253, 1) 64%);
      background-clip: text;
      -webkit-background-clip: text;

      color: transparent;
    }
  }
  button {
    background: linear-gradient(90deg, rgba(131, 58, 180, 1) 30%, rgba(29, 252, 253, 0.6) 64%);
    border-radius: 999px;
    box-shadow: 0px 7px 30px -9px rgba(29, 252, 253, 0.8);
  }
  .right {
    .circle {
      background-image: linear-gradient(150deg, rgba(131, 58, 180, 1) 30%, rgba(29, 252, 253, 0.6) 64%);
    }
    .bg {
      background: linear-gradient(90deg, rgba(131, 58, 180, 1) 15%, rgba(29, 252, 253, 1) 64%);
      box-shadow: 1px 10px 32px -13px rgba(29, 252, 253, 0.8);
    }
    .pic {
      background-image: linear-gradient(150deg, rgba(131, 58, 180, 1) 30%, rgba(29, 252, 253, 0.6) 64%);
      box-shadow: -5px 5px 32px -13px rgba(29, 252, 253, 0.8);
    }
  }
`;
