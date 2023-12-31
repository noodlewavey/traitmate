// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};
//initial state is initialized up here

const authSlice = createSlice({
  name: 'auth', //this is the name of the slice
  initialState, //initialize initialState....didn't initialize? 
  reducers: { //we have reducers...everything that touches the state
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    //action called login...
    //acion is a parameter of reducer function....
    //action object is the userobject
    //we set state to be authenticated
    //action.payload is user data 
    //this is an example of user data....

    //dispatch(login(userObject)) <--- this code is in loginpage.js
    //payload is user object
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null; 
    },
    //here we set user to null to log out...
  },
});

export const { login, logout } = authSlice.actions;
//we need to export all actions to call them in the react app
//make sure you destructure

export default authSlice.reducer;
//this returns the reducer
