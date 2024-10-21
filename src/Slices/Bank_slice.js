
import { createSlice } from '@reduxjs/toolkit';

export const bankslice = createSlice({
    initialState:1000,
    name: 'bankslice',
    reducers:{
        withdraw_n:(state, action)=>{
           return state = state - action.payload
        },
        deposite_n:(state, action)=>{
           return state = state + action.payload

        },
    },
    devTools:true
})

export const {withdraw_n, deposite_n} = bankslice.actions;
export default bankslice.reducer


