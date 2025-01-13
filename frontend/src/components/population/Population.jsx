import React from 'react';
import { FaMale } from 'react-icons/fa';

const Population = ({Image : Icon , gender, count}) => {
    return (
        <div>
            <div className="mx-7 flex justify-center items-center flex-col gap-5 shadow-md p-5 rounded-md ">
                <div className="flex justify-center items-center">
                    <h3 className="text-2xl">{gender}</h3>
                    <Icon  />
                </div>
                <h1 className="text-xl">{count}</h1>
            </div>
        </div>
    );
};

export default Population;
