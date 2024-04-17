import React, { useEffect, useRef, useState } from "react";
import UpcomingCard from "./UpcomingCard";

const UpcomingEvent = () => {
  const [upcomingEvent, setUpcomingEvent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);
  useEffect(() => {
    fetchEvent();
  }, []);
  const fetchEvent = async () => {
    setLoading(true);
    const response = await fetch(
      `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
        },
      },
    );
    const data = await response.json();
    setUpcomingEvent((prev) => [...prev, ...data.events]);
    setPage(page + 1);
    setLoading(false);
  };
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
    if (scrollTop + clientHeight >= scrollHeight) {
      fetchEvent();
    }
  };
  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className="text-black gap-4 px-12 flex overflow-hidden h-[80vh] no-scrollbar overflow-y-auto flex-wrap"
    >
      {upcomingEvent &&
        upcomingEvent.map((event, index) => (
          <UpcomingCard key={index} info={event} />
        ))}
    </div>
  );
};

export default UpcomingEvent;