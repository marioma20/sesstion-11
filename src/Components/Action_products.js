
export const ADD_PRODUCT = "ADD_PRODUCT";
export const GET_PRODUCT = "GET_PRODUCT";

export const addproduct = (product)=>{
    return{
        type: ADD_PRODUCT,
        payload: product
    }
}

export const getProducts = (product)=>{
    return{
        type: GET_PRODUCT,
        payload:product
    }
}

 export const fetchProducts = () =>{
    return async(dispatch) =>{
        const res =  await fetch(`https://fakestoreapi.com/products`);
        const data = await res.json();
        console.log(data);
        dispatch(getProducts(data));
    }

}