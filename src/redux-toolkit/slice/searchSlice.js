import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:'search',
    initialState:{
        searchInput:''
    },
    reducers:{
        searchList(state,action){
            state.searchInput = action.payload
        }
    }
})

export const {searchList} = searchSlice.actions
export default searchSlice.reducer