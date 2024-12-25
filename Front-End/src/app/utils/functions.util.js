import axios from 'axios'

import { baseUrl } from '.'

export const authHeader = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return { Authorization: 'Bearer ' + token };
  } else {
    return {};
  }
}

export const cometAPI = async (method, url, data={}) => {

  const api = axios.create({
      baseUrl
  });

  try {
    let response
    if ([ 'get', 'delete' ].includes(method)) {
      response = await api[method](url, { headers: authHeader() });
    }else {
      response = await api[method](url, data, { headers: authHeader() })
    }
    return response.data;
  } catch (error) {
    
  }
};