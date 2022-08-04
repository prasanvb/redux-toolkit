import rtk from "@reduxjs/toolkit";
import { cakeReducer } from "../features/cake/cakeSlice.js";

// Configure store is used to defined a Store in Redux-Toolkit
console.log(rtk.configureStore);

const store = rtk.configureStore({
  reducer:{
    cake: cakeReducer,
  }
})

export { store };


