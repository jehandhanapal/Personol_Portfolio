import React from "react";
import styled from "styled-components";

export default function Skills() {
  return (
    <Container id="skills" className="w-[85%] my-[12%] flex flex-col mx-auto px-8">
      <div className="flex flex-col justify-start items-start ">
        <span className="w-1/2 h-[6px] line mb-12 inline-block rounded-full"></span>
        <span className="text-white font-bold text-4xl ">Tech Stack</span>
      </div>
      <div className=" skills lg:mt-12 flex flex-wrap mt-8 md:mt-8 text-white  justify-between">
        <div>
          <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1" />
          <span>Html</span>
        </div>
        <div>
          <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3" />
          <span>Css</span>
        </div>
        <div>
          <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" />
          <span>JavaScript</span>
        </div>
        <div>
          <img width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native" />
          <span>React</span>
        </div>
        <div>
          <img width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git" />
          <span>Git</span>
        </div>
        <div>
          <img width="48" height="48" src="https://img.icons8.com/color/48/bootstrap.png" alt="bootstrap" />
          <span>Bootstrap</span>
        </div>
        <div>
          <img width="48" height="48" src="https://img.icons8.com/color/48/redux.png" alt="redux" />
          <span>Redux</span>
        </div>
        <div>
          <img width="48" height="48" src="https://img.icons8.com/color/48/sass.png" alt="sass" />
          <span>Sass</span>
        </div>
        <div>
          <img width="48" height="48" src="https://img.icons8.com/color/48/tailwind_css.png" alt="tailwind_css" />
          <span>Tailwind</span>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .skills {
    div {
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;
      gap: 1rem;
      margin: 1rem 0.5rem;
    }
  }
  .line {
    background: linear-gradient(90deg, #81708d 30%, rgba(29, 252, 253, 1) 64%);
  }
`;
