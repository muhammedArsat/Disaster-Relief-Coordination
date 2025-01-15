import React from 'react';
import Image from '../../assets/VolunteerImg.jpg';

const VolunteerRegister = () => {
    return (
        <div className="p-5">
            <h1 className="text-center tracking-wider font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                beatae facere minima? Totam, corporis vero?
            </h1>
            <div className="grid sm:grid-cols-2 mt-10">
                <div className="flex justify-center items-center">
                    <img src={Image} alt="Volunteer-image" />
                </div>
                <div className="flex flex-col gap-5 mr-6">
                    <h1 className="text-2xl font-medium text-center">
                        Register Here
                    </h1>
                    <div className="flex flex-col gap-3">
                        <label className="text-lg sm:text-sm sm:font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="bg-slate-200 rounded-lg px-5 py-4 outline-blue-500 sm:px-3 sm:py-2"
                            placeholder="Jhone Doe..."
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-lg sm:text-sm sm:font-medium">
                            D.O.B
                        </label>
                        <input
                            type="date"
                            className="bg-slate-200 rounded-lg px-5 py-4 outline-blue-500 sm:px-3 sm:py-2 w-full"
                        />
                    </div>
                    <div className="grid gap-4">
                        <h1 className="text-lg sm:text-sm sm:font-medium">Gender</h1>
                        <div className="flex space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    className="bg-slate-300 rounded-lg px-5 py-4 outline-blue-500"
                                    required
                                />
                                <span className="text-lg sm:text-sm sm:font-medium ml-2">Male</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    className="bg-slate-300 rounded-lg px-5 py-4 outline-blue-500"
                                    required
                                />
                                <span className="text-lg sm:text-sm sm:font-medium ml-2">Female</span>
                            </label>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <h1 className="text-lg sm:text-sm sm:font-medium">Own Vehicle</h1>
                        <div className="flex space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="ownVehicle"
                                    value="yes"
                                    className="bg-slate-300 rounded-lg px-5 py-4 outline-blue-500"
                                    required
                                />
                                <span className="text-lg sm:text-sm sm:font-medium ml-2">Yes</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="ownVehicle"
                                    value="no"
                                    className="bg-slate-300 rounded-lg px-5 py-4 outline-blue-500"
                                    required
                                />
                                <span className="text-lg sm:text-sm sm:font-medium ml-2">No</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-lg sm:text-sm sm:font-medium">Age</label>
                        <input
                            type="text"
                            className="bg-slate-200 rounded-lg px-5 py-4 outline-blue-500 sm:px-3 sm:py-2"
                            placeholder='18+'
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-lg sm:text-sm sm:font-medium">Skill</label>
                        <input
                            type="text"
                            className="bg-slate-200 rounded-lg px-5 py-4 outline-blue-500 sm:px-3 sm:py-2"
                            placeholder='eg: medic, driving, etc..'
                        />
                    </div>
                    <div className="mb-5 flex justify-center items-center">
                        <button className="bg-blue-400 text-white px-4 py-3 rounded-md hover:scale-105 hover:transition-transform hover:shadow-lg">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerRegister;
