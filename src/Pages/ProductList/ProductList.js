import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './ProductList.css'
export default function ProductList() {
    const params = useParams();
    const [ProductList,SetProductList]=useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${params.category}`)
            .then(res=>res.json())
            .then(json=>SetProductList(json))
    },[])
    console.log(ProductList)
    return (
        <div className="container" style={{marginTop:"60px"}}>
            <p style={{background: "aliceblue",padding: "5px",textTransform: "capitalize"}}>Home/{params.category}</p>
            <br/>
            <h1 style={{textTransform: "capitalize"}}>{params.category}</h1>
            <br/>
           <div className="row">
               {ProductList.map(product=>{
                   return(
                    <div className="col-lg-4">
                            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                                <img style={{height:"400px"}} src={product.image} alt="product" />
                                <p>{product.title}</p>
                                <span align="right"><p style={{color:"black"}}><b> Price: </b>{product.price}/-</p></span>
                                <a href={"/category/"+product.category+"/"+product.id}><button className="btn btn-info w-100">View more</button></a>
                            </div>
                    </div>
                   )
               })}
              
           </div>
        </div>
    )
}
