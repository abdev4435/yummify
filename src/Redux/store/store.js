import { configureStore } from "@reduxjs/toolkit";
import restuarantReducer from "../Features/restuarantsSlice.js"
export default configureStore({
  reducer: {
    restaurants: restuarantReducer,
  }
})