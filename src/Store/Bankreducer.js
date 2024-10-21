

import { WITHDRAW_MONEY, DEPOSITE_MONEY } from "./Actions";

 export const bankReducer = (state=1000, action)=>{
    switch(action.type){
       case WITHDRAW_MONEY:
           return state - action.payload;
       case DEPOSITE_MONEY:
           return state + action.payload;
       default: 
       return state;
    }
  }