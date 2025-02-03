import React, { useEffect, useState } from 'react';
import RequestCard from '../../components/requestCard/RequestCard';
import { getRegisteredVolunteers } from '../../apis/Api';
const VolunteerApproval = () => {
    const [registeredVolunteers, setRegisteredVolunteers] = useState([]);
    useEffect(() => {
        const listOfRegisteredVolunteer = async () => {
            try {
                const response = await getRegisteredVolunteers();
                setRegisteredVolunteers(response.data.pendingVolunteers);
            } catch (error) {}
        };
        listOfRegisteredVolunteer();

    }, [registeredVolunteers]);

    return (
        <div className="mt-28 px-5 sm:ml-64 sm:mt-10">
            <h1 className="text-center font-medium tracking-wider text-2xl mb-4">
                New Registrations
            </h1>
            { registeredVolunteers.length === 0 &&
            <h1 className='flex justify-center items-center mt-10 font-medium'> No Registration</h1>

            }
            {
                registeredVolunteers.map((data, index)=>(
                    <div className="grid gap-y-4" key={index}>
                    <RequestCard name={data.name}  age={data.age} dob={data.dob} email={data.email} vehicle={data.vehicle} skill={data.role} phone={data.phone} gender={data.gender} objectId={data._id}/>
                </div>
                ))
            }

        </div>
    );
};

export default VolunteerApproval;
