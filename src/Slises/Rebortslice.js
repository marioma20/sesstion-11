import { createSlice } from "@reduxjs/toolkit";
const reportslice = createSlice({
    name:'reportslice',
    initialState: {loged: []},
    reducers:{
        loginsert: (state, action)=>{
            state.loged.push(action.payload);
        }
    }
});

export const {loginsert} = reportslice.actions;
export default reportslice.reducer;