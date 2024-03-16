import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from './movieSlice'

export default configureStore({
    reducer:{
        media : mediaReducer,
    },
});