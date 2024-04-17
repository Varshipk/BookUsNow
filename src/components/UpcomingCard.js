import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const UpcomingCard = ({ info }) => {
  const extractId = (url) => {
    const match = url.match(/\/file\/d\/(.+?)\//);
    return match ? match[1] : null;
  };
  const url = info.imgUrl;
  const Id = extractId(url);
  const imgUrl = `https://lh3.googleusercontent.com/d/${Id}=s320?authuser=0`;
  return (
    <div className="max-w-sm relative w-64 h-72 no-scrollbar font-sans  rounded overflow-hidden border border-[#B0BABF]">
      <img
        className="h-52 pl-3 w-72"
        src={imgUrl}
        alt="Sunset in the mountains"
      />
      <div className="absolute top-[54%] left-[9%] bg-black opacity-50 text-white rounded-b-lg font-sans p-2 w-[87%]">
        <p className="w-full">
          {info?.date
            ? new Date(info.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            : "No date available"}
        </p>
      </div>
      <div className="px-1 py-3 font-sans">
        <div className=" font-medium md:font-semibold text-xs md:text-sm  px-5 ">
          {info.eventName}
        </div>
        <div className="absolute top-[89%]  md:text-sm  text-xs flex justify-between w-full">
          <p className="md:pl-1">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            {info.cityName}
          </p>
          <p className="pr-1 md:pr-2">
            {info.weather}|{Math.floor(info.distanceKm / 100)} km
          </p>
        </div>
      </div>
    </div>
  );
};
export default UpcomingCard;