import axios from 'axios';
import {base_url} from '../../utils/base_url';
import { config } from '../../utils/axiosConfig';


const postQuery = async (contactData) => {
    try {
        const response = await axios.post(`${base_url}enquiry`, contactData, config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}




export const contactService = {
    postQuery
    
}; 