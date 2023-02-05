import React, { useState } from "react";
const skills = [
  {
    name: "JavaScript",
    img: "images/skills/java-script.png",
  },
  {
    name: "TypeScript",
    img: "images/skills/typescript.png",
  },
  {
    name: "Angular",
    img: "images/skills/angular.png",
  },
  {
    name: "React",
    img: "images/skills/react.png",
  },
  {
    name: "NodeJS",
    img: "images/skills/node.png",
  },
  {
    name: "MongoDB",
    img: "images/skills/mongodb.png",
  },
  {
    name: "PostgreSQL",
    img: "images/skills/postgreSQL.png",
  },
  {
    name: "Git",
    img: "images/skills/git.png",
  },
];
const Skills = () => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <>
      <div className=" relative ">
        <div className="flex gap-x-2">
          {skills.map(
            (item, index) =>
              index <= 3 && (
                <div
                  key={index}
                  className="md:w-10 md:h-10 w-8 h-8 bg-white border p-1 shadow-lg rounded-full overflow-hidden "
                >
                  <img
                    src={item.img}
                    width="100%"
                    height="100%"
                    className=" object-cover"
                    alt={item.name}
                    title={item.name}
                  />
                </div>
              )
          )}
          <button
            className="py-2 md:px-3 px-2 bg-amber-500 rounded shadow-lg text-sm font-semibold"
            onMouseOver={() => setSeeMore(!seeMore)}
            onMouseOut={() => setSeeMore(!seeMore)}
          >
            See More...
          </button>
        </div>
        {
        seeMore && (
          <div className=" absolute right-0 bottom-12  bg-white shadow-lg rounded p-4 grid grid-cols-3 gap-2">
            {skills.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <div className="w-12 h-12 bg-white border p-1 shadow-lg rounded-full overflow-hidden ">
                  <img
                    src={item.img}
                    width="100%"
                    height="100%"
                    className=" object-cover"
                    alt={item.name}
                    title={item.name}
                  />
                </div>
                <div>
                  <h2 className=" text-sm font-semibold">{item.name}</h2>
                </div>
              </div>
            ))}
            <div className=" relative bg-white w-12 h-12 -bottom-8 -right-6 rotate-45"></div>
          </div>
         )
        }
      </div>
    </>
  );
};

export default Skills;
