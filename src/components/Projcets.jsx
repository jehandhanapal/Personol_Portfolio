import React from "react";
import styled from "styled-components";



export default function Projects() {
  return (
    <Container className="w-[85%] mt-[12%] flex flex-col mx-auto px-8" id="projects">
      <div className="flex  justify-start items-center ">
        <span className="text-white font-bold text-4xl ">Projects</span>
        <span className="w-1/3 h-[2px] ml-6 line inline-block rounded-full"></span>
      </div>
      <div className="cards ">
        <ul className="card flex my-[10%] flex-col gap-16">
          <li className="flex lg:flex-row flex-col text-white  lg:p-8 ">
            <div>
              <img src="https://drive.google.com/uc?export=view&id=1eFkAaLphHHmpnRI6XyJkCuknF7xq4g8b" alt="" className=" h-[100%]" />
            </div>
            <div className="lg:text-end lg:ml-12">
              <h1 className="text-2xl mt-8  lg:mb-8 lg:mt-0 heading font-semibold">K.K Tours & Travels</h1>
              <p className="text-sm text-gray-500 my-8 font-medium">
                A web app created for my friend's startup they used to rent vehicles for your local and outstation trips with skilled drivers and we also provide customizable tour packages for your dream vacation.{" "}
              </p>
              <div className="tech flex gap-3 lg:justify-end justify-center  ">
                <span className="text-xs px-2 py-1 rounded-full text-black bg-gray-500">React Js</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-500 text-black">Tailwind Css</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-500 text-black">Styled Components</span>
              </div>
              <div className="flex gap-4 lg:justify-end justify-center mt-8 ">
                <button className=" text-xs lg:text-sm px-4 py-2 my-4 font-medium">
                  <a href="https://kktoursandtravels.netlify.app/" target="_blank" className="bg-transparent text-white">
                    Live Demo
                  </a>
                </button>
                <button className=" text-sm px-4 py-2 my-4 font-medium">
                  <a href="https://github.com/jehandhanapal/Tours-Travels-App.git" target="_blank" className="bg-transparent text-white">
                    View Code
                  </a>
                </button>
              </div>
            </div>
          </li>
          <li className="flex lg:flex-row flex-col-reverse text-white lg:p-8 ">
            <div className="lg:text-start lg:mr-12">
              <h1 className="text-2xl lg:mb-8 lg:mt-0 mt-8 heading font-semibold">Spotify App - Clone</h1>
              <p className="text-sm text-gray-500 my-8 font-medium">
                A web app for visualizing personalized spotify playlists and you can view detailed audio information about each track in your playlist and you can use audio control functionality.
              </p>
              <div className="tech flex gap-3 lg:justify-start justify-center ">
                <span className="text-xs px-2 py-1 rounded-full text-black bg-gray-500">React Js</span>
                <span className="text-xs px-2 py-1 rounded-full text-black bg-gray-500">Spotify Api</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-500 text-black">Tailwind Css</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-500 text-black">Styled Components</span>
              </div>
              <div className="flex gap-4 lg:justify-start justify-center mt-8 ">
                <button className=" text-sm px-4 py-2 my-4 font-medium">
                  <a href="https://myspotifycloned.netlify.app/" target="_blank" className="bg-transparent text-white">
                    Live Demo
                  </a>
                </button>
                <button className=" text-sm px-4 py-2 my-4 font-medium">
                  <a href="https://github.com/jehandhanapal/Spotify-Playlist-Clone.git" target="_blank" className="bg-transparent text-white">
                    View Code
                  </a>
                </button>
              </div>
            </div>
            <div>
              <img src="https://drive.google.com/uc?export=view&id=1Z7VpSQ6-NLGfK6PT-KD4LOLHsKLGcoyU" alt="" className="h-[100%]" />
            </div>
          </li>
          <li className="flex lg:flex-row flex-col text-white lg:p-8 ">
            <div>
              <img src="https://drive.google.com/uc?export=view&id=1n4KoZUB5BGdYTWosPPiXOmhu3nB9GLMY" alt="" className="h-[100%] opacity-100" />
            </div>
            <div className="lg:text-end lg:ml-12">
              <h1 className="text-2xl lg:mb-8 lg:mt-0 mt-8 heading font-semibold">News App - Daily News</h1>
              <p className="text-sm text-gray-500 my-8 font-medium">A web app that displays up to date news from different categories and you can view any specific category</p>
              <div className="tech flex gap-3 lg:justify-end justify-center ">
                <span className="text-xs px-2 py-1 rounded-full text-black bg-gray-500">React Js</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-500 text-black">Bootstrap</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-500 text-black">News Api</span>
              </div>
              <div className="flex gap-4 lg:justify-end justify-center mt-8 ">
                <button className=" text-sm px-4 py-2 my-4 font-medium">
                  <a href="https://mydailynewsapp.netlify.app/" target="_blank" className="bg-transparent text-white">
                    Live Demo
                  </a>
                </button>
                <button className=" text-sm px-4 py-2 my-4 font-medium">
                  <a href="https://github.com/jehandhanapal/News-App.git" target="_blank" className="bg-transparent text-white">
                    View Code
                  </a>
                </button>
              </div>
            </div>
          </li>
          <li className="flex lg:flex-row flex-col-reverse text-white lg:p-8  ">
            <div className="lg:text-start lg:mr-12">
              <h1 className="text-2xl lg:mb-8 lg:mt-0 mt-8 heading font-semibold">ShopZone - ECommerce App</h1>
              <p className="text-sm text-gray-500 my-8 font-medium">A web app built with fakestore api used for online shopping which has products and product detail page with cart functionality </p>
              <div className="tech flex gap-3 lg:justify-start justify-center ">
                <span className="text-xs px-2 py-1 rounded-full text-black bg-gray-500">React Js</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-500 text-black">Tailwind Css</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-500 text-black">Fakestore Api</span>
              </div>
              <div className="flex gap-4 lg:justify-start justify-center mt-8 ">
                <button className=" text-sm px-4 py-2 my-4 font-medium">
                  <a href="https://myshopzone.netlify.app/" target="_blank" className="bg-transparent text-white">
                    Live Demo
                  </a>
                </button>
                <button className=" text-sm px-4 py-2 my-4 font-medium">
                  <a href="https://github.com/jehandhanapal/Shop-Zone.git" target="_blank" className="bg-transparent text-white">
                    View Code
                  </a>
                </button>
              </div>
            </div>
            <div>
              <img src="https://drive.google.com/uc?export=view&id=1Dpw-_Jx1MB-jNrSh0MFcqvfgndagTUhF" alt="" className="h-[100%] opacity-100" />
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .line {
    background: linear-gradient(90deg, rgba(131, 58, 180, 1) 30%, rgba(29, 252, 253, 1) 64%);
  }
  .heading {
    background: rgb(131, 58, 180);
    background: linear-gradient(90deg, rgba(131, 58, 180, 1) 30%, rgba(29, 252, 253, 1) 64%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  button {
    background: linear-gradient(90deg, rgba(131, 58, 180, 1) 30%, rgba(29, 252, 253, 0.6) 64%);
    border-radius: 999px;
    box-shadow: 0px 7px 30px -9px rgba(29, 252, 253, 0.4);
  }
`;
