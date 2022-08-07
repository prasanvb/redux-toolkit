import rtk from "@reduxjs/toolkit";

// Note: Check here to see list of all functions returned by redux-toolkit
// console.log(rtk);

// Value of initial cake state
const initialState = {
  numOfCakes: 100
}

// Creating Slice of State
const cakeSlice = rtk.createSlice({
  name: 'cakeStateSlice', // Name of the slice
  initialState, // Value of initial cake state
  reducers: { // Simplified version of the reducer
    // Note: By default action creator are created with same name
    ordered: (currentState, action) => {
      // Note: you can directly mutate the state thanks to inbuilt immer library 
      if(!!action.payload) currentState.numOfCakes -= action.payload
      currentState.numOfCakes--
    },
    restocked: (currentState, action) => {
      currentState.numOfCakes += action.payload
    },
  }
})

// Note: check to see what is inside the slice of the state
// console.log({cakeSlice});

const cakeReducer = cakeSlice.reducer;
const cakeActions = cakeSlice.actions;

export { cakeReducer, cakeActions };