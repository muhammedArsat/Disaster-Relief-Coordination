import React, { useEffect, useState,useRef } from 'react';

const VolunteerRegisterForm = ({handleClick,setFormData}) => {

    const fullnameRef = useRef();
    const bofRef = useRef();
    const genderRef = useRef();
    const vehichleRef = useRef();
    const ageRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const skillRef = useRef();

    useEffect(()=>{
        fullnameRef.current.focus();
    },[])

    const nameDown = (e) =>{
        if(e.key === 'Enter'){
            bofRef.current.focus();
        }
    }

    const dobDown=(e)=>{
        if(e.key === 'Enter'){
            genderRef.current.focus();
        }
    }

    const genderDown= (e) =>{
        if(e.key === 'Enter'){
            vehichleRef.current.focus();
        }
    }

    const vehicleDown = (e) =>{
        if(e.key === 'Enter'){
            ageRef.current.focus();
        }
    }

    const ageDown = (e)=>{
        if(e.key === 'Enter'){
            phoneRef.current.focus();
        }
    }


    const phoneDown = (e)=>{
        if(e.key === 'Enter'){
            emailRef.current.focus();
        }
    }

    const emailDown = (e) =>{
        if(e.key === 'Enter'){
            skillRef.current.focus();
        }
    }

    const skillDown = (e) =>{
        if(e.key === 'Enter'){
           handleClick();
        }
    }




    const [formData, setLocalFormData] = useState({
        name: '',
        age: '',
        role: '',
        vehicle: '',
        phone: '',
        gender: '',
        dob: '',
        email: '',
        status: 'PENDING',
    });

    useEffect(()=>{
        setFormData(formData)
    },[formData])
    const [ageError, setAgeError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'age') {
            if (value && parseInt(value) < 18) {
                setAgeError('Age should be Above 18');
            }
        } else {
            setAgeError('');
        }
    };

    const isAgeValid = () => {
        const age = formData.age;
        return !isNaN(age) && parseInt(age) > 18;
    };
    return (
        <form onSubmit={handleClick} >
            <div className="flex flex-col gap-5 mr-6">
                {/* heading */}
                <h1 className="text-2xl font-medium text-center">
                    Register Here
                </h1>

                {/* Name */}
                <div className="flex flex-col gap-3">
                    <label className="text-lg sm:text-sm sm:font-medium">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="bg-slate-200 rounded-lg px-5 py-4 outline-blue-500 sm:px-3 sm:py-2"
                        placeholder="Jhone Doe..."
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        ref={fullnameRef}
                        required
                        onKeyDown={nameDown}
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
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        ref={bofRef}
                        required
                        onKeyDown={dobDown}
                    />
                </div>

                {/* gender */}
                <div className="grid gap-4">
                    <h1 className="text-lg sm:text-sm sm:font-medium">
                        Gender
                    </h1>
                    <div className="flex space-x-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                className="bg-slate-300 rounded-lg px-5 py-4 outline-blue-500"
                                checked={formData.gender === 'male'}
                                onChange={handleChange}
                                ref={genderRef}
                                onKeyDown={genderDown}
                                required
                            />
                            <span className="text-lg sm:text-sm sm:font-medium ml-2">
                                Male
                            </span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                className="bg-slate-300 rounded-lg px-5 py-4 outline-blue-500"
                                checked={formData.gender === 'female'}
                                onChange={handleChange}
                                required
                            />
                            <span className="text-lg sm:text-sm sm:font-medium ml-2">
                                Female
                            </span>
                        </label>
                    </div>
                </div>

                {/* vehicle */}
                <div className="grid gap-4">
                    <h1 className="text-lg sm:text-sm sm:font-medium">
                        Own Vehicle
                    </h1>
                    <div className="flex space-x-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="vehicle"
                                value="yes"
                                className="bg-slate-300 rounded-lg px-5 py-4 outline-blue-500"
                                checked={formData.vehicle === 'yes'}
                                onChange={handleChange}
                                required
                                ref={vehichleRef}
                                onKeyDown={vehicleDown}
                            />
                            <span className="text-lg sm:text-sm sm:font-medium ml-2">
                                Yes
                            </span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="vehicle"
                                value="no"
                                checked={formData.vehicle === 'no'}
                                onChange={handleChange}
                                className="bg-slate-300 rounded-lg px-5 py-4 outline-blue-500"
                                required
                            />
                            <span className="text-lg sm:text-sm sm:font-medium ml-2">
                                No
                            </span>
                        </label>
                    </div>
                </div>

                {/* Age */}
                <div className="flex flex-col gap-3">
                    <label className="text-lg sm:text-sm sm:font-medium">
                        Age
                    </label>
                    <input
                        type="text"
                        name="age"
                        className="bg-slate-200 rounded-lg px-5 py-4 outline-blue-500 sm:px-3 sm:py-2"
                        placeholder="18+"
                        value={formData.age}
                        onChange={handleChange}
                        ref={ageRef}
                        onKeyDown={ageDown}
                    />
                    {ageError && (
                        <p className="text-red-500 text-sm">{ageError}</p>
                    )}
                </div>

                {/*phone*/}
                <div className="flex flex-col gap-3">
                    <label className="text-lg sm:text-sm sm:font-medium">
                        Phone No
                    </label>
                    <input
                        name="phone"
                        type="text"
                        className="bg-slate-200 rounded-lg px-5 py-4 outline-blue-500 sm:px-3 sm:py-2"
                        placeholder="e.g: 123456789"
                        value={formData.phone}
                        onChange={handleChange}
                        ref={phoneRef}
                        required
                        onKeyDown={phoneDown}
                    />
                </div>

                {/*email*/}
                <div className="flex flex-col gap-3">
                    <label className="text-lg sm:text-sm sm:font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        className="bg-slate-200 rounded-lg px-5 py-4 sm:px-3 sm:py-2 outline-blue-500"
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        placeholder="e.g: jhondoe@gmail.com"
                        ref={emailRef}
                        required
                        onKeyDown={emailDown}
                    />
                </div>

                {/*role*/}
                <div className="flex flex-col gap-3">
                    <label className="text-lg sm:text-sm sm:font-medium">
                        Skill
                    </label>
                    <input
                        name="role"
                        type="text"
                        className="bg-slate-200 rounded-lg px-5 py-4 outline-blue-500 sm:px-3 sm:py-2"
                        placeholder="eg: medic, driving, etc.."
                        value={formData.role}
                        onChange={handleChange}
                        ref={skillRef}
                        required
                    />
                </div>

                {/*Register Button*/}
                <div className="mb-5 flex justify-center items-center">
                    <button
                        className={`${isAgeValid() ?`bg-blue-400  hover:scale-105`:` bg-gray-700  hover:scale-100`}  text-white px-4 py-3 rounded-md  hover:transition-transform hover:shadow-lg`}
                        disabled={!isAgeValid()}
                    >
                        Register
                    </button>
                </div>
            </div>
        </form>
    );
};

export default VolunteerRegisterForm;
