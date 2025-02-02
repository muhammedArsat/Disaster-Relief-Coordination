import axios from "axios";

const BACKEND_URL = "http://localhost:3000/api/v1"
export const volunteerRegister =async (formData) =>{
    try{
        const response = await axios.post(`${BACKEND_URL}/volunteer`, formData);
        return response;
    }catch(error){
        console.log(error);
    }
}
