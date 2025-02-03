import React, { useState } from 'react';
import Image from '../../assets/VolunteerImg.jpg';
import {volunteerRegister} from "../../apis/Api"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const VolunteerRegister = () => {

    const [formData, setFormData ] = useState({
        name:"",
        age:"",
        role:"",
        vehicle:"",
        phone:"",
        gender:"",
        dob:"",
        email:"",
        status:"PENDING",
    })

    const[ageError, setAgeError] = useState("");

    const handleChange=(e)=>{
        const{name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })

        if(name === "age" ){

            if(value && parseInt(value) < 18){
                setAgeError("Age should be Above 18")
            }

        }else{
            setAgeError("")
        }
    }

    const isAgeValid = () =>{
        const age = formData.age;
        return !isNaN(age) && parseInt(age) > 18
    }

    const handleSubmit =async (e) =>{
        e.preventDefault();
        try{
            const response = await  volunteerRegister(formData);
            if(response.status === 201){
                setFormData({
                    name:"",
                    age:"",
                    role:"",
                    vehicle:"",
                    phone:"",
                    gender:"",
                    dob:"",
                    email:"",
                    status:"PENDING",
                })
                successNotify();
            }
            console.log(response);
        }catch(error)
        {
            failureNotify();
            console.log(error);


            }

    }

    const successNotify = () => toast("Registered Successfully!");
    const failureNotify = ()=> toast("Error Occured!");
    return (
        <div className="p-5">
            <ToastContainer/>
            <h1 className="text-center tracking-wider font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                beatae facere minima? Totam, corporis vero?
            </h1>

            <div className="grid sm:grid-cols-2 mt-10">
                <div className="flex justify-center items-center">
                    <img src={Image} alt="Volunteer-image" />
                </div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5 mr-6">
                    {/* heading */}
                    <h1 className="text-2xl font-medium text-center">
                        Register Here
                    </h1>

    {/* Name */}
    <div className="flex flex-col gap-3">
                        <label className="text-lg sm:text-sm sm:font-medium" >
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="bg-slate-200 rounded-lg px-5 py-4 outline-blue-500 sm:px-3 sm:py-2"
                            placeholder="Jhone Doe..."
                            name='name'
                            value={formData.name}
                            onChange={handleChange}


                        />
                    </div>

                    {/* d.o.b */}
                    <div className="flex flex-col gap-3">
                        <label className="text-lg sm:text-sm sm:font-medium">
                            D.O.B
                        </label>
                        <input
                            type="date"
                            className="bg-slate-200 rounded-lg px-5 py-4 outline-blue-500 sm:px-3 sm:py-2 w-full"
                            name='dob'
                            value={formData.dob}
                            onChange={handleChange}
                        />
                    </div>

                    {/* gender */}
                    <div className="grid gap-4">
                        <h1 className="text-lg sm:text-sm sm:font-medium">Gender</h1>
                        <div className="flex space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    className="bg-slate-300 rounded-lg px-5 py-4 outline-blue-500"
                                    checked={formData.gender === "male"}
                                    onChange={handleChange}
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
                                    checked = {formData.gender === "female"}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="text-lg sm:text-sm sm:font-medium ml-2">Female</span>
                            </label>
                        </div>
                    </div>

                    {/* vehicle */}
                    <div className="grid gap-4">
                        <h1 className="text-lg sm:text-sm sm:font-medium">Own Vehicle</h1>
                        <div className="flex space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="vehicle"
                                    value="yes"
                                    className="bg-slate-300 rounded-lg px-5 py-4 outline-blue-500"
                                    checked={formData.vehicle === "yes"}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="text-lg sm:text-sm sm:font-medium ml-2">Yes</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="vehicle"
                                    value="no"
                                    checked={formData.vehicle === "no"}
                                    onChange={handleChange}
                                    className="bg-slate-300 rounded-lg px-5 py-4 outline-blue-500"
                                    required
                                />
                                <span className="text-lg sm:text-sm sm:font-medium ml-2">No</span>
                            </label>
                        </div>
                    </div>

                    {/* Age */}
                    <div className="flex flex-col gap-3">
                        <label className="text-lg sm:text-sm sm:font-medium">Age</label>
                        <input
                            type="text"
                            name='age'
                            className="bg-slate-200 rounded-lg px-5 py-4 outline-blue-500 sm:px-3 sm:py-2"
                            placeholder='18+'
                            value={formData.age}
                            onChange={handleChange}
                        />
                        {ageError && <p className='text-red-500 text-sm'>{ageError}</p>}
                    </div>

                    {/*phone*/}
                    <div className="flex flex-col gap-3">
                        <label className="text-lg sm:text-sm sm:font-medium">Phone No</label>
                        <input
                            name="phone"
                            type="text"
                            className="bg-slate-200 rounded-lg px-5 py-4 outline-blue-500 sm:px-3 sm:py-2"
                            placeholder='e.g: 123456789'
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    {/*email*/}
                    <div className='flex flex-col gap-3'>
                        <label  className='text-lg sm:text-sm sm:font-medium'>Email</label>
                        <input type="email"
                        className='bg-slate-200 rounded-lg px-5 py-4 sm:px-3 sm:py-2 outline-blue-500'
                        value={formData.email}
                        onChange={handleChange}
                        name='email'
                        placeholder='e.g: jhondoe@gmail.com'

                        />
                    </div>

                    {/*role*/}
                    <div className="flex flex-col gap-3">
                        <label className="text-lg sm:text-sm sm:font-medium">Skill</label>
                        <input
                            name="role"
                            type="text"
                            className="bg-slate-200 rounded-lg px-5 py-4 outline-blue-500 sm:px-3 sm:py-2"
                            placeholder='eg: medic, driving, etc..'
                            value={formData.role}
                            onChange={handleChange}
                        />
                    </div>

                    {/*Register Button*/}
                    <div className="mb-5 flex justify-center items-center">
                        <button className="bg-blue-400 text-white px-4 py-3 rounded-md hover:scale-105 hover:transition-transform hover:shadow-lg"
                         disabled={!isAgeValid()}
                            >
                            Register
                        </button>
                    </div>





                </div>
                </form>
            </div>

        </div>
    );
};

export default VolunteerRegister;
