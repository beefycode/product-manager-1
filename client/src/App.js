// dont' forget to npm i axios react-router-dom
import "./App.css";
import axios from 'axios'
import {useState,useEffect} from 'react'
import CreateProduct from "./components/CreateProduct";


function App() {

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allProducts')
            .then((allProducts)=>{
                console.log(allProducts.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    })

    return (
        <div className="App">
            
            <CreateProduct path="/" />
        </div>
    );
}

export default App;