import React from "react";
import jitesh from "../../assets/LandingPage Images/Screenshot_20240131-162512.jpg"

import Katole from "../../assets/LandingPage Images/Katole.jpeg"
import Gajendra from "../../assets/LandingPage Images/Gajendra.jpeg"

  
function TeamComp() {
  // 
  const data = [
    
    {
      url: jitesh,
      name: "Jitesh Varade",
      desc: "Full stack Developer"
    },
    
    {
      url: Gajendra,
      name: "Gajendra Naphade",
      desc: "Frontend Developer"
    },
    {
      url: Katole,
      name: "Ankit Katole",
      desc: "Backend Developer"
    },
  
  ];

  return (
    <div className="py-10 text-white">
      <h5 className="text-center font-bold my-5 mb-20 lg:text-4xl text-xl sm:text-2xl uppercase">
        Team Members
      </h5>
      <div
        id="outer-wrapper"
        className="max-w-[1300px] overflow-hidden mx-auto mb-10"
      >
        <div
          id="inner-weapper"
          className="flex gap-3 animate-[toRight_20s_linear_infinite]"
        >
          {data.map(({ url, name ,desc }, index) => (
            <div className="card w-[180px] border-2 border-[#111330] p-3 rounded-3xl bg-[#0a0b1d] relative ctaBtn" key={"members" + index}>
              <div className="img w-[150px] h-[150px]">
                <img
                  src={url}
                  className="object-cover w-[150px] h-[150px] rounded-full"
                  alt=""
                />
              </div>
              <div className="name text-xl text-white font-semibold text-center pt-5">
                {name}
              </div>
              <div className="name text-md text-white font-semibold text-center pt-5">
                {desc}
              </div>
            </div>
          ))}
          {data.map(({ url, name ,desc }, index) => (
            <div className="card w-[180px] border-2 border-[#111330] p-3 rounded-3xl bg-[#0a0b1d] relative ctaBtn" key={"members" + index}>
              <div className="img w-[150px] h-[150px]">
                <img
                  src={url}
                  className="object-cover w-[150px] h-[150px] rounded-full"
                  alt=""
                />
              </div>
              <div className="name text-xl text-white font-semibold text-center pt-5">
                {name}
              </div>
              <div className="name text-md text-white font-semibold text-center pt-5">
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamComp;

// after:content-[""] after:w-[85%] after:bg-gradient-to-r after:from-[#0a0b1d] after:via-[#ECECEC] after:to-[#0a0b1d] after:absolute after:bottom-0  after:h-[2px] after:block
