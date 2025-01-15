import React, { useEffect } from 'react';
import HeroImg from '../../assets/HeroImg.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
const Landing = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    const navigate = useNavigate();
    return (
        <div>
            <nav className="flex justify-between py-7 px-5 shadow-lg items-center">
                <h1 className="text-lg font-medium">RescueBridge</h1>
                <ul className="flex">
                    <button className="bg-blue-400 py-4 px-7 rounded-lg text-white">
                        Login
                    </button>
                </ul>
            </nav>

            <div className="flex flex-col-reverse mt-5 p-4 mb-10 mr-3 ml-3 sm:flex-row sm:justify-center sm:items-center">
                <div className="sm:basis-2/4 sm:flex sm:flex-col sm:justify-center sm:items-center sm:mx-10 ">
                    <p className="font-medium " data-aos="zoom-in">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Id fuga dolores assumenda rem dolore, ipsa numquam
                        quaerat, quidem ratione incidunt, amet itaque
                        temporibus. Nulla ad, aut modi molestiae veniam est.
                    </p>
                    <div className="flex justify-center items-center mt-3 sm:basis-2/4">
                        <button
                            className="bg-blue-400 py-4 px-7 rounded-lg w-2/4 sm:w-full text-white hover:shadow-md hover:shadow-blue-400 transition-all hover:scale-105"
                            data-aos="slide-left"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
                <div
                    className="flex justify-center items-center sm:basis-2/4"
                    data-aos="slide-right"
                >
                    <img src={HeroImg} alt="Hero Image " className="w-80 " />
                </div>
            </div>
            <h1 className="w-full text-center text-xl tracking-wider font-semibold">
                Lorem, ipsum.
            </h1>
            <div className="grid gap-5 mx-5 mb-10 sm:grid-cols-3">
                <div
                    className="flex flex-col justify-center items-center shadow-lg rounded-md "
                    data-aos="zoom-in"
                >
                    <img src={HeroImg} alt="Feature 1" className="w-64" />
                    <p className="font-medium">Lorem, ipsum.</p>
                </div>
                <div
                    className="flex flex-col justify-center items-center shadow-lg rounded-md"
                    data-aos="zoom-in"
                >
                    <img src={HeroImg} alt="Feature 1" className="w-64" />
                    <p className="font-medium">Lorem, ipsum.</p>
                </div>{' '}
                <div
                    className="flex flex-col justify-center items-center shadow-lg rounded-md"
                    data-aos="zoom-in"
                >
                    <img src={HeroImg} alt="Feature 1" className="w-64" />
                    <p className="font-medium">Lorem, ipsum.</p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-3 p-5">
                <p
                    className="text-center text-lg font-medium "
                    data-aos="slide-right"
                >
                    Are You Become a Volunteer ?
                </p>
                <div className="flex justify-center items-center mt-3">
                    <button
                        className="bg-blue-400 py-2 px-7 rounded-lg w-4/4 text-white hover:shadow-md hover:shadow-blue-400 transition-all hover:scale-105"
                        data-aos="slide-left"
                        onClick={() => navigate('/register')}
                    >
                        Become a Volunteer
                    </button>
                </div>
            </div>

            <footer className="bg-gray-800 text-white p-4 mt-5 ">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="text-lg font-medium">
                            &copy; {new Date().getFullYear()} RescueBridge
                        </div>
                        <div className="text-lg font-medium">About Us</div>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm">
                            RescueBridge is a platform dedicated to connecting
                            volunteers with relief areas and new requests. Our
                            mission is to facilitate quick and efficient relief
                            efforts during times of need.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
