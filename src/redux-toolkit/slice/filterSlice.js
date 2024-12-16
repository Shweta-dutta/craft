import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name:'filter',
    initialState:{
        filterInput:''
    },
    reducers:{
        filterlist(state,action){
            state.filterInput = action.payload
        }
    }
})

export const {filterlist} = filterSlice.actions
export default filterSlice.reducer