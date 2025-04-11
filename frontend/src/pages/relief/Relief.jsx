// Relief.js
import React, { useEffect, useState } from 'react';
import Map from '../../components/map/Map';
import { FaFemale, FaChild, FaMale } from 'react-icons/fa';
import { FaBowlFood } from 'react-icons/fa6';
import { GiClothes } from 'react-icons/gi';
import FundProgress from '../../components/fund/Fund';
import { FaBriefcaseMedical } from 'react-icons/fa';
import PopulationCard from '../../components/population/Population';
import { MdCleanHands } from 'react-icons/md';
import { getReliefByid } from '../../apis/Api';
import { useParams } from 'react-router-dom';
const Relief = () => {
    const {id} =useParams();
    const [reliefData, setReliefData] = useState(null);

    useEffect(() => {
        const fetchData = async (_id) => {
            try {
                const response = await getReliefByid(id); // ✅ wait for the API response
                console.log("Fetched Relief Data:", response);
                setReliefData(response.data.post); // ✅ store actual data in state
            } catch (error) {
                console.error("Error fetching relief data:", error);
            }
        };
    
        fetchData();
    }, []);
    return (
        <>
            {reliefData && (
                <>
                    <div className="sm:ml-72 mt-32 sm:mt-0">
                        <div className="mt-10 mx-7 ">
                            <p>
                                <span className="text-blue-500 font-medium text-xl">
                                   {reliefData.location.district}
                                </span>
                                <br />
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quos, dolore.
                            </p>
                        </div>
                        <div className="m-5 ">
                        <Map lat={reliefData?.location?.latitude} long={reliefData?.location?.longitude} />
                        </div>

                        <div>
                            <h1 className="text-xl font-medium m-6 text-center tracking-wide">
                                People Count
                            </h1>
                            <div className="grid sm:grid-cols-3">
                                <PopulationCard
                                    Image={FaChild}
                                    gender={'Child'}
                                    count={reliefData.childCount}
                                />
                                <PopulationCard
                                    Image={FaFemale}
                                    gender={'Female'}
                                    count={reliefData.femaleCount}
                                />
                                <PopulationCard
                                    Image={FaMale}
                                    gender={'Male'}
                                    count={reliefData.maleCount}
                                />
                            </div>
                        </div>

                        <div className="m-7">
                            <h1 className="text-xl font-medium text-center tracking-wide">
                                Fund Status
                            </h1>
                            <FundProgress
                                total={reliefData.food}
                                current={50}
                                image={FaBowlFood}
                                fundType={'Food'}
                            />
                            <FundProgress
                                total={reliefData.sanitization}
                                current={10}
                                image={MdCleanHands}
                                fundType={'Hygene'}
                            />
                            <FundProgress
                                total={reliefData.cloth}
                                current={5}
                                image={GiClothes}
                                fundType={'Cloth'}
                            />
                            <FundProgress
                                total={reliefData.medical}
                                current={15}
                                image={FaBriefcaseMedical}
                                fundType={'Medical Kit'}
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Relief;
