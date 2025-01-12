import React from 'react';
import { FaMale } from 'react-icons/fa';

const Population = () => {
    return (
        <div>
            <div className="mx-7 flex justify-center items-center flex-col gap-5 shadow-md p-5 rounded-md ">
                <div className="flex justify-center items-center">
                    <h3 className="text-2xl">Men</h3>
                    <FaMale size={30} />
                </div>
                <h1 className="text-xl">1,000</h1>
            </div>
        </div>
    );
};

export default Population;
