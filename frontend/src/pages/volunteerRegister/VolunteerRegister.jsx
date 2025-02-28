import React, { useState, useEffect } from 'react';
import Image from '../../assets/Queue.gif';
import { volunteerRegister } from '../../apis/Api';
import VolunteerRegisterForm from '../../components/volunteerRegister/VolunteerRegisterForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const VolunteerRegister = () => {

    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await volunteerRegister(formData);
            console.log(formData)
            if (response.status === 201) {
                setFormData({
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
                successNotify();
                setTimeout(()=>{
                navigate("/login");
                },6000)

            }
            console.log(response);
        } catch (error) {
            failureNotify();
            console.log("error during form submission",error);
        }
    };

    const successNotify = () => toast('Registered Successfully!');
    const failureNotify = () => toast('Error Occured!');
    return (
        <div className="p-5">
            <ToastContainer />
            <h1 className="text-center tracking-wider font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                beatae facere minima? Totam, corporis vero?
            </h1>

            <div className="grid sm:grid-cols-2 mt-10">
                <div className="flex justify-center items-center">
                    <img src={Image} alt="Volunteer-image" />
                </div>
                <VolunteerRegisterForm handleClick={handleSubmit} setFormData={setFormData} />
            </div>
        </div>
    );
};

export default VolunteerRegister;
