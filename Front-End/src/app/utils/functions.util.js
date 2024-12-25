import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import axios from 'axios'

import { baseURL } from '.'

export const privateRoute = (Component, isSign) => {

  const _ = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    
    if (isAuthenticated || (isAuthenticated === isSign)) {
      return Component
    }else {
      return <Navigate to='/auth/sign-in' />
    }
  }

  return <_ />

};

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
      baseURL
  });

  try {
    let response
    if ([ 'get', 'delete' ].includes(method)) {
      response = await api[method](url, { headers: authHeader() });
    }else {
      response = await api[method](url, data, { headers: authHeader() })
    }
    console.log(response.status.toString()[0])
    if (response.status.toString()[0] === '2') return response.data
    else return false
  } catch (error) {
    alert(error.response.data.message)
    console.log(error)
    return false
  }
};