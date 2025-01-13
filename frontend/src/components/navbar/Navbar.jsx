import React, { useState, useEffect } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { useLocation, useNavigate} from 'react-router-dom';
const Navbar = () => {
    const { pathname } = useLocation();
    const [isMobile, setIsMobile] = useState(false);
    const [isLandingPage, setIsLandingPage] = useState(false);
    useEffect(() => {
        if (isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMobile]);

    useEffect(() => {
        if (pathname === '/' || pathname === '/register') {
            setIsLandingPage(true);
        } else {
            setIsLandingPage(false);
        }
    }, [pathname]);
    const navigate = useNavigate();
    return (
        <>
            {!isLandingPage && (
                <nav className="flex justify-between items-center px-3 py-7 bg-opacity-80 backdrop-blur-lg shadow-lg fixed top-0 w-full sm:flex-col sm:justify-start sm:items-start sm:w-64 sm:fixed sm:h-screen z-10 sm:top-0">
                    <h1 className="text-2xl font-medium p-1 sm:text-center sm:w-full md:text-3xl sm:mb-5 ">
                        RescueBridge
                    </h1>
                    <CiMenuBurger
                        size={30}
                        className="sm:hidden cursor-pointer"
                        onClick={() => setIsMobile(!isMobile)}
                    />
                    <ul className="hidden sm:block">
                        <li
                            className={`${
                                pathname === '/admin/relif' ? 'bg-blue-400 rounded-md text-white' : ''
                            } p-4 flex justify-center items-center w-56 text-lg font-medium cursor-pointer`}
                        >
                            Relief Areas
                        </li>

                        <li
                            className={`${
                                pathname === '/admin/volunteer-list' ? 'bg-blue-400 rounded-md text-white' : ''
                            } p-4 flex justify-center items-center w-56 text-lg font-medium cursor-pointer`}
                        >
                            Volunteers
                        </li>
                        <li className={`${
                                pathname === '/admin/new-request' ? 'bg-blue-400 rounded-md text-white' : ''
                            } p-4 flex justify-center items-center w-56 text-lg font-medium cursor-pointer`}>
                            New Requests
                        </li>
                        <li className="p-4 flex justify-center items-center w-56 text-lg font-medium absolute bottom-2 cursor-pointer bg-slate-400 rounded-lg hover:scale-105 transition-transform hover:shadow-lg text-white" onClick={()=>navigate('/')}>
                            logout
                        </li>
                    </ul>
                    <ul
                        className={`${
                            isMobile ? 'left-0' : '-left-full'
                        } sm:hidden absolute bg-white top-24  p-4 h-screen transition-all z-10`}
                    >
                        <li className={`${pathname === '/admin/relif' ? "bg-blue-400 text-white p-3 rounded-lg" : ''}p-4 font-medium text-lg `}>
                            Relief Areas
                        </li>
                        <li className={`${pathname === '/admin/volunteer-list' ? "bg-blue-400 text-white p-3 rounded-lg" : ''}p-4 font-medium text-lg `}>Volunteers</li>
                        <li className={`${pathname === '/admin/new-request' ? "bg-blue-400 text-white p-3 rounded-lg" : ''}p-4 font-medium text-lg `}>
                            New Requests
                        </li>
                        <li className=" p-4 absolute bottom-36 flex justify-center items-center w-36 left-5 font-medium text-lg bg-slate-400 rounded-lg text-white  ">
                            logout
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Navbar;
