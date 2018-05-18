import { API_URL } from '../config/default';

const params = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const api = async function api(endpoint: string): {} {
  try {
    const url = (endpoint.indexOf(API_URL) === -1) ? API_URL + endpoint : endpoint;
    const response = await fetch(url, params);
    return response.json();
  } catch(error) {
     return { eror: error.message || 'Something went wrong' }
  }
}
