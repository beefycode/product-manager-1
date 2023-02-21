import React, {useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



const DisplayAllProducts = (props)=>{

    const navigate = useNavigate();
    const {removeFromDom, product, setProduct} = props;
    const {productList,setProductList} = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/`+ productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }


    useEffect(()=>{
        axios.get("http://localhost:8000/api/allProducts")
            .then((res)=>{
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err)=>{console.log(err)});
            
    },[]);

    // const deleteFilter = (idFromBelow) => {
    //     axios.delete(`http://localhost:8000/api/deleteProduct/${idFromBelow}`)
    //         .then((res) => {
    //             console.log(res.data);
    //             const newList = productList.filter((product,index) => product.id !== idFromBelow)
    //             setProductList(newList);
    //         })
    //         .catch((err)=> {
    //             console.log(err);
    //         });
    // }

    return(

        <div >
            <header>All Products!!</header>
            {
                productList.map((product,index)=>( /**this is a return parentheses */
                    <div key={product._id}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                        <br/>
                        <button onClick={()=>navigate(`/product/edit/${product._id}`)}>Edit</button>
                        <br/>
                        <button onClick={()=> {deleteProduct(product._id)}}>ADOPT</button>

                    </div>
                )

                )
            }

        </div>
    )
}

export default DisplayAllProducts;




































// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const DisplayAllProducts = (props) => {
//     const [allProducts, setAllProducts] = useState([]);
//     useEffect(()=>{
//         axios.get('http://localhost:8000/api/allProducts')
//             .then((allProducts)=>{
//                 // console.log(allProducts.data);
//                 setAllProducts(allProducts.data)
//             })
//             .catch((err)=>{
//                 console.log(err);
//             })
//     })

//     return (
//         <div>
//             <h2>Check out all our products!</h2>
//             {
//                 allProducts.map((product)=>(
//                     <div className="border border-success">
//                         <p>Product Title: {product.title}</p>
//                         <p>Price: {product.price}</p>
//                         <p>Description: {product.description}</p>
//                     </div>
//                 ))
//             }
            
//         </div>
//     )
// }

// export default DisplayAllProducts;