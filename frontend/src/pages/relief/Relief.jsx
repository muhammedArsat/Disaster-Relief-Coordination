import React from 'react';
import Map from '../../components/map/Map';
import { FaFemale } from 'react-icons/fa';
import { FaChild } from 'react-icons/fa';
import FundProgress from '../../components/fund/Fund';
import PopulationCard from '../../components/population/Population';

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
                <h1 className="text-xl font-medium m-6 text-center">
                    People Count
                </h1>
                <div className='grid sm:grid-cols-3'>
                    <PopulationCard />
                    <PopulationCard />
                    <PopulationCard />
                </div>
            </div>

            <div className="m-7">
                <h1 className="text-xl font-medium text-center">Fund Status</h1>
                <FundProgress />
                <FundProgress />
                <FundProgress />
                <FundProgress />
            </div>
        </div>
    );
};

export default Relief;
