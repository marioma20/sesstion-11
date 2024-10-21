import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { wait } from "@testing-library/user-event/dist/utils";
export const getbook = createAsyncThunk('bookslice/getbook', async (_,thunkAPI)=>{
    try{
        const res = await fetch(`http://localhost:3000/books`);
        const data = await res.json();
        return data;

    }catch (error){
      return error.message;
    }
});
export const insertbook = createAsyncThunk('bookslice/insertbook', async (bookdata, thunkAPI)=>{
    try{
        const res = await fetch(`http://localhost:3000/books`, {
            method:'POST',
            body: JSON.stringify(bookdata),
            headers:{
                "Content-Type": `application/json; charset=utf-8`,
            }
        
        });
        const data = res.json();
        return data;

    }catch (error){
        return error.message;
    }
})
export const deletedata = createAsyncThunk('bookslice/deletebook', async(item, thunkAPI)=>{
    try{

        const res = await fetch(`http://localhost:3000/books/${item.id}`,{
            method:'DELETE',
            headers: {
                "Content-Type": `application/json; charset=utf-8`,
              },
        });
        return item;

    }catch (error){
        return error.message;
    }
});
export const viewdata = createAsyncThunk('bookslice/viewdata', async(item, thunkAPI)=>{
    try{
        const res = await fetch(`http://localhost:3000/books/${item.id}`,{
            method: "GET",
            headers: {
                "Content-Type": `application/json; charset=utf-8`,
              },
        });
        return item;
    }catch (error){

    }
})
const bookslice = createSlice({
    name: 'bookslice',
    initialState: {book:[], error:null, isloading:false, bookinfo: []},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getbook.pending, (state, action)=>{
            state.isloading = true;
            state.error = null;
        });
        builder.addCase(getbook.fulfilled, (state, action)=>{
            state.isloading = false;
            state.book = action.payload;
        });
        builder.addCase(getbook.pending, (state, action)=>{
            state.isloading = false;
            state.error = action.payload;
        });
        builder.addCase(insertbook.pending, (state, action)=>{
            state.isloading = true;
            state.error = null;
        });
        builder.addCase(insertbook.fulfilled, (state, action)=>{
            state.isloading = false;
            state.book.push(action.payload);
        });
        builder.addCase(insertbook.pending, (state, action)=>{
            state.isloading = false;
            state.error = action.payload;
        });
        builder.addCase(deletedata.pending, (state, action)=>{
            state.isloading = true;
            state.error = null;
        });
        builder.addCase(deletedata.fulfilled, (state, action)=>{
            state.isloading = false;
            state.book = state.book.filter((el)=>el.id !== action.payload);
        });
        builder.addCase(deletedata.pending, (state, action)=>{
            state.isloading = false;
            state.error = action.payload;
        });
        builder.addCase(viewdata.fulfilled, (state, action)=>{
            state.isloading = false;
            state.bookinfo = action.payload ;
            console.log(action);
        })
    }
});
export default bookslice.reducer;