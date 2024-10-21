
import { useSelector, useDispatch } from "react-redux";
import { addproduct } from "./Action_products";
import { fetchProducts } from "./Action_products";
import { addproduct_n, fetchProduct } from "../Slices/Product_slice";
import { useEffect } from "react";

function Products(){

    const products_n = useSelector((state)=>state.product);

    const Dispatch = useDispatch();

    useEffect(()=>{

        // Dispatch(fetchProducts());

        Dispatch(fetchProduct())

    },[]);

    console.log(products_n)

    return(
        <>
        <h1>Products</h1>

        <button onClick={()=>{
            Dispatch(addproduct_n({id:21, title:'product21'}));
           
        //    Dispatch(addproduct({id:21, title:'product21'}))

        }}>Add Product</button>
        {products_n.map((prod)=>(
            <>
            
            <h2 key={prod.id}>{prod.title}</h2>
         <h5>{prod.price}</h5>
         </>
        ))}
        </>
    );
}
export default Products;