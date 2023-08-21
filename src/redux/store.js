// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Create this slice later

//authReducer is reducer function....manages authentication rleated state
//congifuresStore is function that simplifies creation of redux store
const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers if needed
    //we add reducer to configurestore...
    //every time we have new reducer, we import it from slice
    //then add it to the reducer array!!! 
  },
});

export default store;

//redux store is centralized container for state of app
//holds state tree for web app....
//all components can access state stored in redux store without needing to pass data through props
//its basically like a usecontext??


//a reducer is a function that tells us how app's state changes 
//in response to dispatched actions.
//takes in: current state, action as arguments, returns  new states 