import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../store/Slice/CounterSlice/CounterSlice'
import nameReducer from './Slice/NameSlice/NameSlice'

export const store = configureStore({
  reducer: {  
    counter: counterReducer,
    name: nameReducer
  }
})