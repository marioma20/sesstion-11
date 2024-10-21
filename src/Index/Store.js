import { configureStore } from "@reduxjs/toolkit";
import book from '../Slises/Bookslice';
import auther from '../Slises/Autherslice';
const store = configureStore({
    reducer:{
        book,
        auther,
    }
});
export default store;