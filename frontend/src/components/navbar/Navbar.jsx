import React, { useState,useEffect } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { useLocation } from 'react-router-dom';
const Navbar = () => {
    const {pathname} = useLocation();
    const [isMobile, setIsMobile] = useState(false);
    const[isLandingPage,setIsLandingPage] = useState(false);
    useEffect(()=>{
        if(isMobile){
            document.body.style.overflow='hidden'
        }else{
            document.body.style.overflow='auto'

        }
    },[isMobile])

    useEffect(()=>{
        if(pathname === '/'){
            setIsLandingPage(true);
        }
        else{
            setIsLandingPage(false);
        }
    },[pathname])
    return (
        <>
         {!isLandingPage && (
            <nav className="flex justify-between items-center px-3 py-7 bg-opacity-80 backdrop-blur-lg shadow-lg sm:flex-col sm:justify-start sm:items-start sm:w-64 sm:fixed sm:h-screen ">
            <h1 className="text-2xl font-medium p-1 sm:text-center sm:w-full md:text-3xl sm:mb-5 ">RescueBridge</h1>
            <CiMenuBurger size={30} className="sm:hidden cursor-pointer" onClick={()=>setIsMobile(!isMobile)}/>
            <ul className="hidden sm:block">
                <li className='p-4 flex justify-center items-center w-56 text-lg font-medium cursor-pointer  '>Relief Areas</li>
                <li className='p-4 flex justify-center items-center w-56 text-lg font-medium cursor-pointer'>Volunteers</li>
                <li className='p-4 flex justify-center items-center w-56 text-lg font-medium cursor-pointer '>New Requests</li>
                <li className='p-4 flex justify-center items-center w-56 text-lg font-medium absolute bottom-0 cursor-pointer'>logout</li>
            </ul>
            <ul className={`${isMobile ? 'left-0' : '-left-full'} sm:hidden absolute bg-white top-24  p-4 h-screen transition-all`}>
                <li className='p-4 font-medium text-lg'>Relief Areas</li>
                <li className='p-4 font-medium text-lg'>Volunteers</li>
                <li className='p-4 font-medium text-lg'>New Requests</li>
                <li className=' p-4 absolute bottom-36 flex justify-center items-center w-full right-1 font-medium text-lg'>logout</li>
            </ul>

        </nav>
        )
    }
        </>

        );




};

export default Navbar;
