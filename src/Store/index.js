

 import { createStore, combineReducers, applyMiddleware} from "redux";
 import { bankReducer } from "./Bankreducer";
import { productsReducer } from "../Components/Products_reducer";
import { thunk } from 'redux-thunk';
 const appreducer = combineReducers(
    {
    bank:bankReducer,
    product: productsReducer
}
);

 export const store = createStore(appreducer,applyMiddleware(thunk) ); // mult reducer
