import React, { useEffect, useState, useRef } from 'react';
import EventCard from './EventCard';

const ShowList = () => {
  const [recommendedShow, setRecommendedShow] = useState([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchShow();
  }, []);

  const fetchShow = async () => {
    setLoading(true);
    const response = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco`,
   );
    const data = await response.json();
    setRecommendedShow(prevShow => [...prevShow, ...data.events]);
    setLoading(false);
  };

  const handleScroll = () => {
    const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
    if (scrollLeft + clientWidth >= scrollWidth) {
      fetchShow();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div ref={containerRef} className='flex  w-[90%] md:w-screen  overflow-x-scroll no-scrollbar'>
      {recommendedShow.map((event,index) => (
        <EventCard key={index} info={event} />
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default ShowList;
