import React from "react";
import ShowList from "./ShowList";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpcomingEvent from "./UpcomingEvent";

const Body = () => {
  return (
    <div className="absolute  -z-10">
      <div className="relative">
        <img
          alt="banner"
          className="h-screen  w-full object-cover md:w-[100vw]"
          src="/Banner.jpg"
        />
        <div className="absolute top-[32%] px-[10%] md:px-[20%]   text-white">
          <h1 className="font-medium md:font-bold text-lg md:text-5xl md:leading-relaxed font-sans">
            Discover Exiciting Events Happening
          </h1>
          <h1 className="font-meduim md:font-bold text-lg md:text-5xl md:leading-relaxed  px-2 font-sans  ">
            Near You - Stay Tuned For Updates!
          </h1>
          <p className="    px-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Integer nec odio.
          </p>
          <p className="  hidden md:block px-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Integer nec.
          </p>
        </div>
        <div className=" absolute text-white w-full    md:mx-24 md:w-[85%]   top-[80%]">
          <div className="  text-white flex pl-10   w-[90%] justify-between  top-[80%]">
            <p>
              Recommended Shows{" "}
              <span className="px-2">
                {" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </span>{" "}
            </p>
            <a href="/">
              <p className="underline">see all</p>
            </a>
          </div>
          <div className="overflow-hidden pl-8   overflow-x-scroll no-scrollbar w-full ">
            <ShowList />
          </div>
          <div className=" py-2 text-black flex   w-[90%] justify-between  top-[80%]">
            <h3 className="font-semibold px-7">
              {" "}
              UpcomingEvent{" "}
              <span className="px-2">
                {" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </span>{" "}
            </h3>
            <a href="/">
              <p className="underline md:hidden">see all</p>
            </a>
          </div>
          <div className="overflow-hidden px-6 py-4   h-[80vh] no-scrollbar overflow-y-scroll">
            <UpcomingEvent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;