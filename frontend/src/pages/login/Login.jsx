import React from 'react';
import LoginGif from "../../assets/login.gif"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center min-h-screen  ">
            <img src={LoginGif} alt="" />
            <div className=" shadow-2xl md:shadow-none flex justify-center items-center   flex-col gap-3 mx-10 px-2 rounded-md ">
                <h1 className="text-left w-full  font-medium text-lg mt-3">Sign In</h1>
                <p className='text-left w-full '>stay updated by signed in</p>
                <input
                    type="text"
                    placeholder="Email"
                    className="rounded-3xl py-2  outline-blue-400 border-white  px-3 bg-gray-200  "
                />
                <input
                    type="text"
                    placeholder="password"
                    className="rounded-3xl py-2  outline-blue-400 border-white  px-3 bg-gray-200  "
                />
              <p className='text-blue-800 w-full text-center decoration-solid ' >forget Password</p>
                <button className="bg-blue-300 w-20 h-10 my-3 rounded-md" onClick={()=>navigate("/admin/home")}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
