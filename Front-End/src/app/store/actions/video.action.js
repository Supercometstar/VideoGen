import { setData } from '@store/reducers/video.reducer'
import { cometAPI } from '@utils'

export const generateScript = info => async dispatch => {
  try {
    const response = await cometAPI('post', '/api/video/generate-script', { info })
    if (response) {
      return response
    }else {
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}

export const generateVideo = info => async dispatch => {
  try {
    const response = await cometAPI('post', '/api/video/generate-video', info)
    if (response) {
      return response
    }else {
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}

export const getVideos = () => async dispatch => {
  try {
    const response = await cometAPI('get', '/api/video/history')
    if (response) {
      dispatch(setData(response.urls))
      return response
    }else {
      return false
    }
  }catch (error) {
    console.log(error)
    return false
  }
}