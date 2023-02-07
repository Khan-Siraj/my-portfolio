import React from "react";

const Experience = ()=>{
    return (
        <>
            <div className="w-full min-h-screen p-4 bg-slate-900 flex flex-col items-center overflow-hidden">
                <div>
                    <h1 className="text-4xl md:text-6xl text-white text-center font-bold">
                        Work Experience
                    </h1>
                </div>
                <div className="w-full flex-grow flex justify-center items-center">
                    <div className="w-2/4 bg-slate-800 shadow-lg p-4 rounded">
                        <ol className="list-decimal px-3">
                            <li className=" text-white font-semibold mb-3">
                                Six month experience as a Freelance FullStack Developer
                            </li>
                            <li className="text-white">
                                <h1 className="text-lg font-bold">
                                    Software EngineerKairos Magus Private Limited | 2021-22
                                </h1>
                               <div className="px-3">
                                    <ul className="list-disc">
                                            <li className=" text-white font-semibold">Got 6 months  training from Kairosmagus’s developers.</li>
                                            <li className=" text-white font-semibold">Work on a project with my trainers and still gather experiences and knowledge.</li>
                                    </ul>
                               </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;