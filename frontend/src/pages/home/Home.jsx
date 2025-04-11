import React ,{useState,useEffect} from 'react';
import { IoAddCircle } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";
import HomePost from "../../components/homepost/HomePost";
import img from '../../assets/HeroImg.jpg';
import { useNavigate } from 'react-router-dom';
import { getAllPosts } from '../../apis/Api';

const Home = () => {
    const navigate = useNavigate();
    const [getAllpost,setAllpost]=useState([]);
    useEffect(()=>{
        const listofAllPosts=async()=>{
            try{
                const response=await getAllPosts();
                setAllpost(response.data.allPosts);
            }
            catch(error){}
        };
        listofAllPosts();
    },[getAllpost]);

  return (
    <div className='mt-24 sm:mt-0 sm:ml-72 sm:mr-2 '>
      <div className='flex justify-between py-7 px-5 sm:py-7 sm:px-8'>
        <h1 className='text-lg font-medium sm:text-2xl sm:font-semibold'>Relief Areas</h1>
        <ul className='flex'>
          <button className='bg-blue-400 flex items-center py-2 px-4 h-10 rounded-lg text-white text-sm sm:text-lg sm:p-5 'onClick={()=> navigate("/admin/post")}>
            <IoAddCircle className="mr-2 sm:mr-3 sm:w-6 sm:h-6" />
            New Alert
          </button>
        </ul>
      </div>
      <div className="flex flex-col items-start px-5 sm:p-2 sm:justify-center sm:align-center">
        <div className="relative w-full">
          <LuFilter className="absolute left-3 top-2 text-gray-500 sm:left-5 sm:top-3 sm:h-7" />
          <input
            id="search"
            type="search"
            placeholder="Search for the Relief Areas"
            className=" sm:py-4 pl-12 outline-blue-400 bg-slate-200 rounded-lg px-3 py-2 text-xs w-full sm:text-sm "
          />
        </div>
        <div className='flex flex-col items-start py-5 px-1 sm:w-full'>
          {getAllpost.map((post, index) => (
            <HomePost key={index} image={post.image || img}  location={post.location.district} disaster={post.disaster} date={post.date} time={post.time} id={post._id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
