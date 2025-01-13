import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";

const HomePost = ({ place, image, disaster, description, date, time }) => {
  return (
    <div className="flex border-b-2 p-2 items-center sm:w-full">
      <img
        src={image}
        alt={`Image of ${place}`}
        className="w-16 h-16 rounded-full border-2 border-gray-400 sm:w-24 sm:h-24"
      />
     <div
  className="grid grid-cols-4 space-x-6 w-full overflow-hidden sm:overflow-hidden sm:hover:overflow-hidden hover:overflow-x-scroll scrollbar-hidden  items-center text-center text-xs ml-2 sm:justify-center sm:items-center  sm:ml-5 sm:mr-5 sm:justify-start sm:text-base sm:w-full"
>
        <p className="text-gray-700 p-2 sm:p-2">{place}</p>
        <p className="text-gray-700 p-1 ml-2 sm:p-2">{disaster}</p>
        <p className="text-gray-700 p-1 sm:p-2">{description}</p>
        <p className="text-gray-400 p-1 sm:p-2 whitespace-nowrap ">{date}<br></br>{time}</p>
      </div>
      <FaArrowAltCircleRight className="flex justify-center items-center text-blue-400 ml-2 w-5 h-5 sm:w-10 sm:h-10 flex-shrink-0" />
    </div>
  );
};

export default HomePost;
