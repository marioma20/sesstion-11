
 export const WITHDRAW_MONEY = "WITHDRAW_MONEY";
 export const DEPOSITE_MONEY = "DEPOSITE_MONEY";

 export const withdraw = (amount)=>{
    return{
        type: WITHDRAW_MONEY,
        payload: amount
    }
  }
  
 export const deposite = (amount) =>{
    return{
        type: DEPOSITE_MONEY,
        payload: amount
    }
  }