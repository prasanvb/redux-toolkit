import rtk from "@reduxjs/toolkit";

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
  }
})


// Note: check to see what is inside the slice of the state
// console.log({iceCreamSlice});

const iceCreamReducer = iceCreamSlice.reducer;
const iceCreamActions = iceCreamSlice.actions;

export { iceCreamReducer, iceCreamActions };