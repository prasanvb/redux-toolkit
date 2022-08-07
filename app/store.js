import rtk from "@reduxjs/toolkit";
import { cakeReducer } from "../features/cake/cakeSlice.js";
import { iceCreamReducer } from "../features/iceCream/iceCreamSlice.js";

// Logger Middleware
import logger from 'redux-logger'

// Configure store is used to defined a Store in Redux-Toolkit
console.log(rtk.configureStore);

const store = rtk.configureStore({
  // IMPORTANT NOTE: This only works for one level of reducers. 
  // If you want to nest reducers, you'll need to call 
  // `combineReducers` yourself to handle the nesting.
  reducer:{
    cakes: cakeReducer,
    iceCreams: iceCreamReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

// Note: Check to see what all methods returned by the store
console.log(store);

export { store };


