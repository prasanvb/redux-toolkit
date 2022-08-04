import rtk from "@reduxjs/toolkit";

// Note: Check here to see list of all functions returned by redux-toolkit

// console.log(rtk);

// Value of initial cake state
const initialState = {
  numOfCakes: 100
}

const cakeSlice = rtk.createSlice({
  name: 'cake', // Name of the feature in the global state
  initialState, // Value of initial cake state
  reducers: { // Simplified version of the reducer
    // Note: By default action creator are created with same name
    ordered: (state, action) => {
      // Note: you can directly mutate the state thanks to inbuilt immer library 
      if(!!action.payload) state.numOfCakes -= action.payload
      state.numOfCakes--
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload
    },
  }
})

const cakeReducer = cakeSlice.reducer;
const cakeActions = cakeSlice.actions;

export { cakeReducer, cakeActions };