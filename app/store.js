import rtk from "@reduxjs/toolkit";
import { cakeReducer } from "../features/cake/cakeSlice.js";

// Configure store is used to defined a Store in Redux-Toolkit
console.log(rtk.configureStore);

const store = rtk.configureStore({
  // Note: This only works for one level of reducers. 
  // If you want to nest reducers, you'll need to call 
  // combineReducers yourself to handle the nesting.
  reducer:{
    cakes: cakeReducer,
  }
})

export { store };


