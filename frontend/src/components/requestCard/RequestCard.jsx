import React from 'react';

const RequestCard = () => {
    return (
        <div className="shadow-lg p-4 flex gap-y-3 flex-col xl:flex-row xl:justify-evenly rounded-lg ">
            <p className="xl:flex xl:flex-col gap-y-3">
                Name :{' '}
                <span className="tracking-wide  font-medium text-sm ">
                    Muhammed Arsath CN
                </span>
            </p>
            <p className="xl:flex xl:flex-col gap-y-3">
                Age :{' '}
                <span className="tracking-wide  font-medium text-sm">20</span>
            </p>
            <p className="xl:flex xl:flex-col gap-y-3">
                DOB :{' '}
                <span className="tracking-wide  font-medium text-sm">
                    {' '}
                    21-03-2005
                </span>
            </p>
            <p className="xl:flex xl:flex-col gap-y-3">
                Own Vehicle :{' '}
                <span className="tracking-wide  font-medium text-sm"> Yes</span>
            </p>
            <p className="xl:flex xl:flex-col gap-y-3">
                Gender :{' '}
                <span className="tracking-wide  font-medium text-sm">Male</span>
            </p>
            <p className="xl:flex xl:flex-col gap-y-3">
                Skill :{' '}
                <span className="tracking-wide  font-medium text-sm">
                    Doctor
                </span>
            </p>
            <div className="flex items-center gap-5">
                <button className="bg-red-400 px-4 py-2 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-red-400 transition-all text-sm">
                    Reject
                </button>
                <button className="bg-green-400 px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all text-sm">
                    Accept
                </button>
            </div>
        </div>
    );
};

export default RequestCard;
