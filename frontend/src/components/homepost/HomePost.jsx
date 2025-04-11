import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomePost = ({ location, image, disaster, date, time, id }) => {
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate(`/admin/relief/${id}`);
    };
  return (
    <div className="flex border-b-2 p-2 items-center sm:w-full">
      <img
        src={image}
        alt={`Image of ${location}`}
        className="w-16 h-16 rounded-full border-2 border-gray-100 sm:w-24 sm:h-24"
      />
      <div
        className="grid grid-cols-4 space-x-6 w-full overflow-hidden hover:overflow-x-auto scrollbar-hidden items-center text-left text-xs ml-2 sm:ml-5 sm:mr-5 sm:text-base sm:w-full"
      >
        <p className="text-gray-700 p-2 sm:p-8 sm:ml-20">{location}</p>
        <p className="text-gray-700 p-1 ml-2 ">{disaster}</p>
        <p className="text-gray-400 p-8 whitespace-nowrap">
          {date} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {time}
        </p>
      </div>
      <FaArrowAltCircleRight className="flex justify-center items-center text-blue-400 ml-2 w-5 h-5 sm:w-8 sm:h-8 flex-shrink-0 cursor-pointer" onClick={handleNavigate}/>
    </div>
  );
};

export default HomePost;
