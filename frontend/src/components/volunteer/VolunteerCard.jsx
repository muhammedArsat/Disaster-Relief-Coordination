import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const VolunteerCard = ({ name, location, expertise, contact, profilePic }) => {
  return (
    <div className="flex border-b-2 p-2 items-center sm:w-full">
      <img
        src={profilePic}
        alt={`Profile of ${name}`}
        className="w-16 h-16 rounded-full border-2 border-gray-100 sm:w-24 sm:h-24"
      />
      <div
        className="grid grid-cols-4 space-x-6 w-full overflow-hidden hover:overflow-x-auto scrollbar-hidden items-center text-center text-xs ml-2 sm:ml-5 sm:mr-5 sm:text-base sm:w-full"
      >
        <p className="text-gray-700 p-2">{name}</p>
        <p className="text-gray-700 p-1 ml-2">{location}</p>
        <p className="text-gray-700 p-1">{expertise}</p>
        <p className="text-gray-400 p-1 whitespace-nowrap">
          <FaPhoneAlt className="inline-block text-green-400 mr-1" />
          {contact}
        </p>
      </div>
    </div>
  );
};

export default VolunteerCard;
