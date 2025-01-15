import React from 'react';
import RequestCard from '../../components/requestCard/RequestCard';
const VolunteerApproval = () => {
    return (
        <div className="mt-28 px-5 sm:ml-64 sm:mt-10">
            <h1 className="text-center font-medium tracking-wider text-2xl mb-4">
                New Registrations
            </h1>

            <div className="grid gap-y-4">
                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />
            </div>
        </div>
    );
};

export default VolunteerApproval;
