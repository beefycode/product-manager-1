import React, {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";


const OneProduct = (props)=>{

    const {id} = useParams(); /**destructure id parameter */
    const [oneProduct, setOneProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err)=>console.log(err))
    },[id])

    return(
        <div>
            <header>{oneProduct.title}</header>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
        </div>
    )
}

export default OneProduct;