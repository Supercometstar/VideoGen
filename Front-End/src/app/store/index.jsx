import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth.reducer'
import notificationReducer from './reducers/notification.reducer'
import videoReducer from './reducers/video.reducer'

const store = configureStore({
  reducer: {
    auth: authReducer,
    video: videoReducer,
    notification: notificationReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
export default store