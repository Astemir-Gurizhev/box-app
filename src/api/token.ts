import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const url = '/api/ngw/oauth'; 

const rq_uid = `${uuidv4()}`;

const data = new URLSearchParams({ 
    scope: 'GIGACHAT_API_PERS',
});

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        RqUID: rq_uid,
        Authorization: 'Basic MDM1OTBiZGItNmMyMy00NGEzLWJjZjUtYjhjNDQxOGU1ZDY5OjQyYWI3YTVmLTFjNGItNGJhZi1hNmY0LTA5MGQzYWU1OWZlMA==',
    },
};

export const fetchOAuthToken = async () => {
    try {
        const response = await axios.post(url, data, config);
        return response.data; 
    } catch (error) {
        console.error('Error fetching OAuth token:', error);
        throw error;
    }
};

