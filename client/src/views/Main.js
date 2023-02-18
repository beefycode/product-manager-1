import React, {useState,useEffect} from "react";
import CreateProduct from "../components/CreateProduct";
import DisplayAllProducts from "../components/DisplayAllProducts";


const Main = (props)=>{

    // Lift state
    const [productList,setProductList] = useState([]);




    return(
        <div>
            <CreateProduct productList={productList} setProductList={setProductList}/>
            <DisplayAllProducts productList={productList} setProductList={setProductList}/>
        </div>
    )
}

export default Main;