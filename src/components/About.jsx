import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Container id="about" className="w-[85%] my-[6%] flex flex-col mx-auto  px-8">
      <div className="flex flex-col justify-start items-start ">
        <span className="text-white font-bold text-4xl mb-12 ">My Story</span>
        <div className="w-[67%] text-white  relative  inline-flex justify-between">
          <span className="inline-block ">2016</span>
          <span className="inline-block">2021</span>
          <span className="inline-block">2022</span>
          <span className="inline-block ">2023</span>
        </div>
        <div className="w-[67%] h-[5px] relative  bg-gray-600 my-8 inline-flex justify-between rounded-full">
          <span className="w-4 h-4 rounded-full -m-[5px]  line inline-block"></span>
          <span className="w-4 h-4 rounded-full -m-[5px] line inline-block"></span>
          <span className="w-4 h-4 rounded-full -m-[5px] line inline-block"></span>
          <span className="w-4 h-4 rounded-full -m-[5px] line inline-block"></span>
        </div>
      </div>
      <div className=" flex lg:flex-nowrap flex-wrap gap-4 text-gray-500 justify-between">
        <div >
          <p className="text-sm text-start">Completed DCE from Kongunadu Polytechic college and for about 6.5yrs worked as a site engineer in construction sector.</p>
        </div>
        <div>
          <p className="text-sm text-start">Pursuing B.E from S.R.G Enginnering college by distance education mode.</p>
        </div>
        <div>
          <p className="text-sm text-start">In the last of 2022, realized that i couldn't explore any new things and my ability and skills are not properly utilized so i decided to shift my career.</p>
        </div>
        <div>
          <p className="text-sm text-start">
            Became more interested in IT sector and decided to learn web development by my own. worked out in which field i want to build a developer career and started to learn front end development.
          </p>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .line {
    background: linear-gradient(90deg, rgba(131, 58, 180, 1) 30%, rgba(29, 252, 253, 1) 64%);
  }
`;
