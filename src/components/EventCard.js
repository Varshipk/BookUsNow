import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const EventCard = ({ info }) => {
  const extractId = (url) => {
    const match = url.match(/\/file\/d\/(.+?)\//);
    return match ? match[1] : null;
  };
  const url = info.imgUrl;
  const Id = extractId(url);
  const imgUrl = `https://lh3.googleusercontent.com/d/${Id}=s420?authuser=0`;
  return (
    <div>
      <div className="w-72 rounded-lg overflow-hidden font-sans relative ">
        <img
          className="-mt-4 -mb-4 mr-8 object-fit   -ml-4  object-contain"
          alt="cardImage"
          src={imgUrl}
        />
        <div className="absolute flex justify-between text-sm text-white top-[75%] w-[87%]">
          <div className="w-36 px-2">
            <p className="font-semibold font-sans ">{info?.eventName}</p>
          </div>
          <div className="">
            {info?.date
              ? new Date(info.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : "No date available"}
          </div>
          <div className="absolute top-[92%] font-sans text-sm flex justify-between w-full py-2 ">
            <p className="pl-2 font-sans">
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              {info.cityName}
            </p>
            <p>
              {info.weather} | {Math.floor(info.distanceKm / 100)} km
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;