import React from 'react';
import { IoAddCircle } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";
import HomePost from "../../components/homepost/HomePost";
import img from '../../assets/HeroImg.jpg';

const Home = () => {
  const posts = [
    {
      image: img,
      place: 'California',
      disaster: 'Fire',
      date: '2025-01-10',
      time:'09.00 pm'
    },
    {
      image: img,
      place: 'Kerala',
      disaster: 'Earthquake',
      date: '2025-01-11',
      time:'09:00 am'
    },
    {
      image: img,
      place: 'Madhya Pradesh',
      disaster: 'flood',
      date: '2025-01-11',
      time:'09:00 am'
    },
    {
      image: img,
      place: 'Goa',
      disaster: 'Earthquake',
      date: '2025-01-11',
      time:'09:00 am'
    },
    {
      image: img,
      place: 'Antarctica',
      disaster: 'Earthquake',
      date: '2025-01-11',
      time:'09:00 am'
    },
    {
      image: img,
      place: 'Los Angeles',
      disaster: 'Earthquake',
      date: '2025-01-11',
      time:'09:00 am'
    },
  ];

  return (
    <div className='sm:ml-72 sm:mr-2 '>
      <div className='flex justify-between py-7 px-5 sm:py-7 sm:px-8'>
        <h1 className='text-lg font-medium sm:text-2xl sm:font-semibold'>Relief Areas</h1>
        <ul className='flex'>
          <button className='bg-blue-400 flex items-center py-2 px-4 h-10 rounded-lg text-white text-sm sm:text-lg sm:p-5'>
            <IoAddCircle className="mr-2 sm:mr-3 sm:w-6 sm:h-6" />
            New Alert
          </button>
        </ul>
      </div>
      <div className="flex flex-col items-start px-5 sm:p-2 sm:justify-center sm:align-center">
        <div className="relative w-full">
          <LuFilter className="absolute left-3 top-3 text-gray-500 sm:left-5 sm:top-3" />
          <input
            id="search"
            type="search"
            placeholder="Search for Relief Areas"
            className="bg-gray-100 pl-12 border rounded-lg px-3 py-2 text-xs w-full sm:text-sm"
          />
        </div>
        <div className='flex flex-col items-start py-5 px-1 sm:w-full'>
          {posts.map((post, index) => (
            <HomePost key={index} image={post.image} place={post.place} disaster={post.disaster} date={post.date} time={post.time} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
