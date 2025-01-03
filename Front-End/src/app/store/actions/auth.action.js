import { loginSuccess, logout } from '@store/reducers/auth.reducer'
import { cometAPI } from '@utils'

export const verify = verifyCode => async dispatch => {
  try {
    const response = await cometAPI('patch', '/api/auth', { verifyCode })
    if (response.message === 'success') {
      dispatch(loginSuccess(response))
      localStorage.setItem('token', response.token)
      return true
    }else {
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}

export const loginUser = credentials => async dispatch => {
  try {
    const response = await cometAPI('post', '/api/user/sign-in', credentials);  
    if (response) {
      localStorage.setItem('token', response.access_token);
      dispatch(loginSuccess({ email: credentials.email, token: response.access_token }));
      return true
    }else return false
  } catch (error) {
    console.log(error)
    return false
  }
};

export const registerUser = credentials => async dispatch => {
  try {
    const response = await cometAPI('post', '/api/user/sign-up', credentials);
    if (response) {
      return true
    }else {
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
};

export const logoutUser = () => async dispatch => {
  try {
    const response = await cometAPI('delete', '/api/auth')
    if (response.message === 'success') {
      dispatch(logout())
      localStorage.removeItem('token')
      return true
    }else {
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}

export const autoLogin = () => async dispatch => {
  try {
    const response = await cometAPI('get', '/api/auth')
    if (response.message === 'success') {
      dispatch(loginSuccess(response))
      localStorage.setItem('token', response.token)
      return true
    }else {
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}