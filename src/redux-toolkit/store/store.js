import { configureStore } from "@reduxjs/toolkit";
import  productReducer  from "../slice/productSlice";
import filterReducer from "../slice/filterSlice";
import searchReducer from "../slice/searchSlice";


export const store = configureStore({
    reducer:{
        product:productReducer,
        filter: filterReducer,
        search:searchReducer
    }
})