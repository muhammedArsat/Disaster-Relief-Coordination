import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginGif from '../../assets/login.gif';
import { IoIosLogIn } from 'react-icons/io';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className=" flex justify-center items-center min-h-screen">
            <div className=" mx-10 shadow-lg flex justify-center items-center gap-4 flex-col px-4 rounded-md py-3 sm:flex-row">
                <div>
                    <h1 className="sm:hidden text-xl -tracking-tighter">
                        RescueBridge
                    </h1>
                </div>
                <div>
                    <img
                        src={LoginGif}
                        alt="login Gif"
                        className="rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-2 sm:gap-8 ">
                    <h1 className="hidden sm:block text-2xl -tracking-tighter">
                        RescueBridge
                    </h1>
                    <p className="font-medium -tracking-tighter text-lg">
                        Signed In to Stay Update
                    </p>
                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Email</label>
                        <input
                            type="text"
                            placeholder="Email"
                            className="border border-solid border-black px-4 py-2 rounded-md outline-blue-400"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Password</label>
                        <input
                            type="text"
                            placeholder="Password"
                            className="border border-solid border-black px-4 py-2 rounded-md outline-blue-400"
                        />
                    </div>
                    <button
                        className="min-w-full bg-blue-400 text-white py-2 rounded-md flex justify-center items-center gap-2"
                        onClick={() => navigate('/admin/home')}
                    >
                        login <IoIosLogIn size={25} />{' '}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
