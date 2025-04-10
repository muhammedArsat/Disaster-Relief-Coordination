import React from 'react';
import profile_avtr from '../../assets/profile-avatar.jpeg';
const VolunteerProfile = () => {
    return (
        <div className=" mt-14 sm:ml-72">
            <div className="flex justify-center items-center m-auto flex-col  p-4 sm:flex-row sm:justify-start sm:items-start sm:gap-3">
                {/* left Card */}
                <div className="w-full  shadow-lg  p-3 flex flex-col justify-center items-center gap-5">
                    <h1 className="w-full text-center font-medium text-2xl">
                        Profile
                    </h1>
                    <img
                        src={profile_avtr}
                        alt="profile pic"
                        className="object-cover"
                    />
                    <input
                        type="file"
                        title="change Profile"
                        className="w-full"
                    />

                    <div className="flex flex-col gap-3 sm:flex-row sm:w-full sm:justify-start sm:items-center ">
                        <label>Name</label>
                        <input
                            className="border focus:to-blue-400 outline-blue-400 px-3 py-4 rounded-md sm:w-full sm:gap-8"
                            value={'Jhon Doe'}
                        />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:w-full sm:justify-start sm:items-center sm:gap-8 ">
                        <label>Age</label>
                        <input
                            className="border focus:to-blue-400 outline-blue-400 px-3 py-4 rounded-md sm:w-full"
                            value={20}
                        />
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:w-full sm:justify-start sm:items-center ">
                        <label>Gender</label>
                        <div className="flex gap-2 justify-center items-center m-auto">
                            <input
                                className="border focus:to-blue-400 outline-blue-400 px-3 py-4 rounded-md"
                                value="male"
                                type="radio"
                            />
                            <span>Male</span>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:w-full sm:justify-start sm:items-center ">
                            <input
                                className="border focus:to-blue-400 outline-blue-400 px-3 py-4 rounded-md"
                                type="radio"
                            />
                            <span>Female</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:w-full sm:justify-start sm:items-center sm:gap-7 ">
                        <label>D.O.B</label>
                        <input
                            className="border focus:to-blue-400 outline-blue-400 px-3 py-4 rounded-md w-full"
                            type="date"
                        />
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:w-full sm:justify-start sm:items-center ">
                        <label className='w-44  '>Own Vehicle</label>
                        <div className="flex gap-2 justify-center items-center m-auto">
                            <input
                                className="border focus:to-blue-400 outline-blue-400 px-3 py-4 rounded-md"
                                value="male"
                                type="radio"
                            />
                            <span>Yes</span>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:w-full sm:justify-start sm:items-center ">
                            <input
                                className="border focus:to-blue-400 outline-blue-400 px-3 py-4 rounded-md"
                                type="radio"
                            />
                            <span>No</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:w-full sm:justify-start sm:items-center sm:gap-4 ">
                        <label>Phone</label>
                        <input
                            className="border focus:to-blue-400 outline-blue-400 px-3 py-4 rounded-md sm:w-full"
                            value={9443663804}
                        />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:w-full sm:justify-start sm:items-center sm:gap-6 ">
                        <label>Email</label>
                        <input
                            className="border focus:to-blue-400 outline-blue-400 px-3 py-4 rounded-md sm:w-full"
                            value={'jhondoe@gmail.com'}
                        />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:w-full sm:justify-start sm:items-center sm:gap-7 ">
                        <label>Skills</label>
                        <input
                            className="border focus:to-blue-400 outline-blue-400 px-3 py-4 rounded-md sm:w-full"
                            value={'Medic'}
                        />
                    </div>

                    <button className="bg-blue-400 p-5 w-full rounded-md text-white">
                        Save
                    </button>
                </div>

                {/* right Card */}
                <div className="w-full h-40">
                    <div className="w-full shadow-lg h-72 p-5 flex flex-col gap-4">
                        <h1 className="w-full text-center font-medium">
                            Ongoing Records
                        </h1>
                        <div className="h-52 overflow-auto w-full">
                            <table className="w-full">
                                <thead>
                                    <tr className="">
                                        <th className="p-3 border ">S.No</th>
                                        <th className="p-3 border ">
                                            Ongoing Volunteering
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="">
                                        <td className="p-3 border">1</td>
                                        <td className="p-3 border">
                                            Chennai - Anna Nagar
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border">2</td>
                                        <td className="p-3 border">
                                            Chennai - Anna Nagar
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border">3</td>
                                        <td className="p-3 border">
                                            Chennai - Anna Nagar
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border">4</td>
                                        <td className="p-3 border">
                                            Chennai - Anna Nagar
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border">5</td>
                                        <td className="p-3 border">
                                            Chennai - Anna Nagar
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-full shadow-lg h-72 p-5 flex flex-col gap-4">
                        <h1 className="w-full text-center font-medium">
                            Completed Records
                        </h1>
                        <div className="h-52 overflow-auto w-full">
                            <table className="w-full">
                                <thead>
                                    <tr className="">
                                        <th className="p-3 border ">S.No</th>
                                        <th className="p-3 border ">
                                            Completed List
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="">
                                        <td className="p-3 border">1</td>
                                        <td className="p-3 border">
                                            Chennai - Anna Nagar
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border">2</td>
                                        <td className="p-3 border">
                                            Chennai - Anna Nagar
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border">3</td>
                                        <td className="p-3 border">
                                            Chennai - Anna Nagar
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border">4</td>
                                        <td className="p-3 border">
                                            Chennai - Anna Nagar
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border">5</td>
                                        <td className="p-3 border">
                                            Chennai - Anna Nagar
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerProfile;
