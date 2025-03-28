import axios from 'axios';

const BACKEND_URL = 'http://localhost:3000/api/v1';
const NEWSAPI = '3da1f14926d3473e83f328a4cba2676b';
export const volunteerRegister = async (formData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/volunteer`, formData);
        return response;
    } catch (error) {
        console.log(error);
    }
};
 
export const getRegisteredVolunteers = async () => {
    try {
        const response = await axios.get(
            `${BACKEND_URL}/volunteer?action=PENDING`
        );
        return response;
    } catch (error) {
        throw error;
    }
};

export const approveRegistration = async (id) => {
    try {
        const response = await axios.put(
            `${BACKEND_URL}/volunteer/${id}?action=APPROVE`
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const rejectRegistration = async (id) => {
    try {
        const response = await axios.put(
            `${BACKEND_URL}/volunteer/${id}?action=REJECT`
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};
