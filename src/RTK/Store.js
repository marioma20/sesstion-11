import { configureStore } from '@reduxjs/toolkit';
import BankReducer from '../Slices/Bank_slice';
import ProductReducer from '../Slices/Product_slice';

export const store = configureStore({
  reducer: {
    bank : BankReducer,
    product:ProductReducer
  },
})
