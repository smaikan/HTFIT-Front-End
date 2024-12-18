import { combineReducers, configureStore } from '@reduxjs/toolkit'
import Auth from './Auth'
import Cart from './Cart';

const rootReducer = combineReducers({
    Auth,Cart
  });

export const store = configureStore({
  reducer: rootReducer
})