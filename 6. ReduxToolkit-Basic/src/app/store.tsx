import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// Setup Middlewares
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];


const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middleware),
 
})
export default store
export type RootState = ReturnType<typeof store.getState>
// export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch
