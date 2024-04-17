import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGreaterThan,
  faLocationDot,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <div className="w-[90%] mx-5 h-[16%]  md:h-[15%] md:w-[94%] font-sans absolute md:mx-10 bg-[#ffffff]">
      <div className="p-2 md:p-3 m-1 grid grid-flow-col items-center">
        <div className="col-span-2 text-[#CF2D2D] md:font-medium">
          BookUsNow
        </div>
        <div className="flex col-span-8 w-full gap-4">
          <div className="md:block hidden bg-black text-white py-1 px-2 rounded-md">
            <button>
              <span className="px-2">
                <FontAwesomeIcon icon={faBars} />
              </span>
              Categories
            </button>
          </div>
          <div className="relative w-2/4 hidden md:block border border-gray-200">
            <input className="w-full py-1 pr-8" placeholder="DJI phantom" />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          </div>
        </div>
        <div className="col-span-2 flex gap-4 items-center">
          <span className="md:hidden inline">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <div>
            <span className="px-2  ">
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <p className="hidden md:inline">Favorites</p>
          </div>
          <div>
            <span className="md:hidden block">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <button className="px-2 py-1 rounded-md hidden md:block border border-gray-300">
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div className="px-3 pb-1 mb-1 md:grid md:grid-flow-col">
        <div className="md:col-span-2 flex items-center">
          <FontAwesomeIcon icon={faLocationDot} /> Mumbai, India
          <span className="px-2">
            <FontAwesomeIcon icon={faGreaterThan} />
          </span>
        </div>
        <div className="overflow-hidden overflow-x-scroll no-scrollbar md:col-span-10">
          <ul className="flex gap-6 whitespace-nowrap py-1 font-sans">
            <li>Live Show</li>
            <li>Streams</li>
            <li>Movies</li>
            <li>Plays</li>
            <li>Events</li>
            <li>Sports</li>
            <li>Activities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;