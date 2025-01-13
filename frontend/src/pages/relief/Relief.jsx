// Relief.js
import React from 'react';
import Map from '../../components/map/Map';
import { FaFemale, FaChild, FaMale } from 'react-icons/fa';
import { FaBowlFood } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import FundProgress from '../../components/fund/Fund';
import { FaBriefcaseMedical } from "react-icons/fa";
import PopulationCard from '../../components/population/Population';
import { MdCleanHands } from "react-icons/md";

const Relief = () => {
    return (
        <div className="sm:ml-72 mt-32 sm:mt-0">
            <div className="mt-10 mx-7 ">
                <p>
                    <span className='text-blue-500 font-medium text-xl'>Chennai</span><br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, dolore.
                </p>
            </div>
            <div className="m-5 ">
                <Map />
            </div>

            <div>
                <h1 className="text-xl font-medium m-6 text-center tracking-wide">
                    People Count
                </h1>
                <div className='grid sm:grid-cols-3'>
                    <PopulationCard Image={FaChild} gender={'Child'} count={'2,000'}/>
                    <PopulationCard Image={FaFemale} gender={'Female'} count={'3,000'}/>
                    <PopulationCard Image={FaMale} gender={'Male'} count={'4,000'}/>
                </div>
            </div>

            <div className="m-7">
                <h1 className="text-xl font-medium text-center tracking-wide">Fund Status</h1>
                <FundProgress total={1000} current={100} image={FaBowlFood} fundType={'Food'}/>
                <FundProgress total={2000} current={900} image={MdCleanHands} fundType={'Hygene'}/>
                <FundProgress total={5000} current={500} image={GiClothes} fundType={'Cloth'}/>
                <FundProgress total={6000} current={5999} image={FaBriefcaseMedical} fundType={'Medical Kit'}/>
            </div>
        </div>
    );
};

export default Relief;
