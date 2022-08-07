import rtk from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice.js";
const initialState = {
  numOfIceCreams: 20,
}

// Creating Slice of State
const iceCreamSlice = rtk.createSlice({
  name: 'iceCreamStateSlice',
  initialState,
  reducers:{
    ordered: (currentState, action) =>{
      if(!!action.payload) currentState.numOfIceCreams -= action.payload
      currentState.numOfIceCreams--
    },
    restocked: (currentState, action) => {
      currentState.numOfIceCreams += action.payload
    }
  },
  // IMPORTANT NOTE: One of the key concepts of Redux is that each slice reducer "owns" its slice of state, 
  // and that many slice reducers can independently respond to the same action type. 
  // extraReducers allows createSlice to respond to other action types besides the types it has generated.
  
  // extraReducers: {
  //   ['cakeStateSlice/ordered']: (currentState)  => {
  //     currentState.numOfIceCreams--;
  //   }
  // }

  // Recommended approach to add extra reducer is through a builder function
  extraReducers: (builder) => {
     builder.addCase(cakeActions.ordered, (currentState) => {
      currentState.numOfIceCreams--;
    })
  }
  
})


// Note: check to see what is inside the slice of the state
// console.log({iceCreamSlice});

const iceCreamReducer = iceCreamSlice.reducer;
const iceCreamActions = iceCreamSlice.actions;

export { iceCreamReducer, iceCreamActions };