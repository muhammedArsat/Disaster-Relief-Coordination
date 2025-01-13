// Fund.js
import React, { useEffect, useState } from 'react';

const Fund = ({ image: Icon, total, current, fundType }) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const calculatePercentage = () => {
            setPercentage(() => (current / total) * 100);
        };
        calculatePercentage();
    }, [total, current]);
    return (
        <div>
            <div className="my-5 flex  justify-between items-center gap-4">
                <div className='flex items-center gap-2'>
                    <h1>{fundType}</h1>
                    <Icon />
                </div>
                <div>
                    <p>
                        {current} / {total}
                    </p>
                </div>
            </div>
            <div className="w-full bg-slate-300 h-3 rounded-md">
                <div
                    style={{ width: `${percentage}%` }}
                    className="bg-blue-500 h-full transition-all rounded-md"
                ></div>
            </div>
        </div>
    );
};

export default Fund;
