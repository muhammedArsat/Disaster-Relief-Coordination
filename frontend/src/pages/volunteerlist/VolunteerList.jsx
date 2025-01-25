import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { FaSearch } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";
import VolunteerCard from "../../components/volunteer/VolunteerCard";
import profilePic from "../../assets/VolunteerImg.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";

const VolunteerList = () => {
    const posts = [
      {
        name: 'Kavin',
        location: 'California',
        expertise: 'Medical Assistance',
        contact: '123-456-7890',
      },
      {
        name: 'Jane Smith',
        location: 'Kerala',
        expertise: 'Disaster Relief',
        contact: '987-654-3210',
      },
      {
        name: 'Rahul Verma',
        location: 'Madhya Pradesh',
        expertise: 'Rescue Operations',
        contact: '567-890-1234',
      },
      {
        name: 'Emily Davis',
        location: 'Goa',
        expertise: 'Food Distribution',
        contact: '345-678-9012',
      },
      {
        name: 'Robert Brown',
        location: 'Antarctica',
        expertise: 'Shelter Management',
        contact: '456-789-0123',
      },
    ];

    return (
      <div className="flex min-h-screen">
        <Navbar />
        <main className="flex-1 mt-24 sm:mt-0 ml-0 sm:ml-64 p-4">
          <h1 className="text-2xl p-4 font-bold text-gray-600">VOLUNTEER LIST</h1>
          <div className="flex justify-between items-center bg-gray-100 rounded-md p-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search for Volunteers"
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            </div>
            <button className="flex ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
              <IoAddCircleSharp className="mr-2 w-5 h-5 sm" />
              <span>Add Volunteer</span>
            </button>
          </div>

          <div className="mt-6 grid gap-4">
            {posts.map((post, index) => (
              <VolunteerCard
                key={index}
                name={post.name}
                location={post.location}
                expertise={post.expertise}
                contact={post.contact}
                profilePic={profilePic}
                
              />
              
            ))}
            
          </div>
        </main>
      </div>
    );
};

export default VolunteerList;
