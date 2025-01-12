import React from 'react';
import { FaBowlFood } from "react-icons/fa6";
const Fund = () => {
    return (
        <div>
            <div className='my-5 flex justify-start items-center gap-4'>
            <h1 >Food</h1>
            <FaBowlFood size={25} />
            </div>
            <div className="w-full bg-slate-300 h-3 rounded-md">
                <div style={{ width:"50%"}} className="bg-blue-500 h-full transition-all rounded-md"></div>
            </div>
        </div>
    );
};

export default Fund;
