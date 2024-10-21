import { createSlice } from "@reduxjs/toolkit";
 const autherslice = createSlice({
    name: 'autherslice',
    initialState: {isloggedin: false},
    reducers:{
        loginout:(state) =>{
            state.isloggedin = ! state.isloggedin
        }
    }
});
export const {loginout} = autherslice.actions;
export default autherslice.reducer;
