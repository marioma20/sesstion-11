import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

 export const fetchProduct = createAsyncThunk('product_slice/fetchProduct', async()=>{
    const res =  await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    console.log(data);
    return data;
})
export const Product_slice = createSlice({
    initialState:[{id:1, title:'product1'}],
    name: 'product_slice',
    reducers:{
        addproduct_n:(state, action)=>{
            state.push(action.payload);
        },

    },
    extraReducers:(builder) =>{
        builder.addCase(fetchProduct.pending, (state, action)=>{
            // show lodear here

        })
        builder.addCase(fetchProduct.fulfilled, (state,action)=>{
            // logic here
            state = action.payload;
            return state;
            // console.log(action);
            // console.log(state)

        })
    }
});



export const {addproduct_n} = Product_slice.actions;
export default Product_slice.reducer;