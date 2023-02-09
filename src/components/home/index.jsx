import React from "react";
import Skills from "../skills";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className=" w-screen min-h-screen main flex justify-center items-center">
        <div className="w-4/5 p-5 flex flex-col md:flex-row justify-around items-center">
          <div className="
          w-48
          h-48
          md:w-60 
          md:h-60 
          shadow-lg 
          rounded-full 
          overflow-hidden 
          border-4
         border-white
          animate__animated 
          animate__heartBeat
         ">
            <img
              src="images/profile.png"
              width="100%"
              height="100%"
              className=" object-cover"
              alt="profile"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2 md:items-start">
            <h1 className=" text-4xl md:text-9xl mb-2 font-bold animate__animated animate__backInDown animate__slow">Siraj Khan</h1>
            <h1 className=" text-2xl md:text-4xl font-bold animate__animated animate__backInUp animate__slow">Full Stack Developer</h1>
            <div className="mt-2">
                <Skills />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
