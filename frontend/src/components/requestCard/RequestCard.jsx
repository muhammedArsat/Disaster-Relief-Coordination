import React from 'react';
import {approveRegistration,rejectRegistration} from "../../apis/Api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RequestCard = ({name, age, dob,vehicle,gender,phone,skill,email,objectId}) => {

    const registrationApproval =  async(id) =>{
        try{
            const response = await approveRegistration(id);
            if(response.data.message === "success"){
                successApprovedNotify();
            }
        }catch(error){
            failureNotify();
        }

    }

    const registrationRejection =async  (id) =>{
        try{
            const response = await rejectRegistration(id);
        }catch(error){
            console.log(error);
        }
    }

      const successApprovedNotify = () => toast(" Approved!");
        const failureNotify = ()=> toast("Error Occured!");
    return (
        <div className="shadow-lg p-4 flex gap-y-3 flex-col xl:flex-row xl:justify-evenly rounded-lg " >
            <p className="xl:flex xl:flex-col gap-y-3">
                Name :{' '}
                <span className="tracking-wide  font-medium text-sm ">
                    {name}
                </span>
            </p>
            <p className="xl:flex xl:flex-col gap-y-3">
                Age :{' '}
                <span className="tracking-wide  font-medium text-sm">{age}</span>
            </p>
            <p className="xl:flex xl:flex-col gap-y-3">
                DOB :{' '}
                <span className="tracking-wide  font-medium text-sm">
                    {dob}

                </span>
            </p>
            <p className="xl:flex xl:flex-col gap-y-3">
                Email :{' '}
                <span className="tracking-wide  font-medium text-sm">
                    {email}
                </span>
            </p>

            <p className="xl:flex xl:flex-col gap-y-3">
                Phone :{' '}
                <span className="tracking-wide  font-medium text-sm">
                    {phone}
                </span>
            </p>
            <p className="xl:flex xl:flex-col gap-y-3">
                Own Vehicle :{' '}
                <span className="tracking-wide  font-medium text-sm"> {vehicle}</span>
            </p>
            <p className="xl:flex xl:flex-col gap-y-3">
                Gender :{' '}
                <span className="tracking-wide  font-medium text-sm">{gender}</span>
            </p>
            <p className="xl:flex xl:flex-col gap-y-3">
                Skill :{' '}
                <span className="tracking-wide  font-medium text-sm">
                    {skill}
                </span>
            </p>
            <div className="flex items-center gap-5">
                <button className="bg-red-400 px-4 py-2 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-red-400 transition-all text-sm" onClick={()=>registrationRejection(objectId)}>
                    Reject
                </button>
                <button className="bg-green-400 px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all text-sm" onClick={()=> registrationApproval(objectId)}>
                    Accept
                </button>
            </div>
        </div>
    );
};

export default RequestCard;
