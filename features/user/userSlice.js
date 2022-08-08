/*
  Example: Async function using inbuilt Redux thunk and axios
 */

import rtk from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
  loading: false,
  users: [],
  error: ''
}

// createAsyncThunk(actionType, functionCallback)
// functionCallback performs async action and return a promise
// you can listen to the promise lifecycle action using extraReducers

const fetchUsers = rtk.createAsyncThunk('user/fetchUsers', ()=>{
 return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      console.log('Success:', response.data.map(user => user.id)); 
    })

})

const userSlice =rtk.createSlice({
  name: 'user',
  initialState,
  // listening to the promise lifecycle action using extraReducers
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message
    })
  }
})

const userReducer = userSlice.reducer;

export {userReducer, fetchUsers};


