import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux'
import './ProductDetails.css'
import { ConsoleWriter } from 'istanbul-lib-report';
function ProductDetails(props) {
    const params =useParams();
	const products = props.product;
    const[productList,setProductList]=useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${params.category}`)
            .then(res=>res.json())
            .then(json=> setProductList(json)
            )
    },[])
    var details;
    productList.map(data=>{
        if(data.id===Number(params.id)){
             details = data
        }
    })
	var available = true;
	if(details){
		products.map(data=>{
				if(data.title === details.title){
						available= false;
				}
	})
    }
	console.log(available)
	const addtoWishlist=()=>{
		products.push(details)
        //const products= [...props.product,details]
		console.log("ONCLICK",products)
        props.dispatch({type:"add",value: products})
	  // console.log("clicked")
    }
    return (
        <div className="container" style={{marginTop:"200px"}}>
        <div class="product-content product-wrap clearfix">
		<div class="row">
				<div class="col-md-5 col-sm-12 col-xs-12">
					<div class="product-image"> 
						<img height="500px" width="300px" src={details?.image} alt="194x228" class="img-responsive"/> 
						<span class="tag2 hot">
							NEW
						</span> 
					</div>
				</div>
				<div class="col-md-7 col-sm-12 col-xs-12">
				<div class="product-deatil" align="left">
						<h3 class="name">
								{details?.title}
								<br/>
								<span style={{color:"GrayText",textTransform:"capitalize"}}><h4>{params.category}</h4></span>
						</h3>
						<p class="price-container">
							<span>${details?.price}</span>
						</p>
						<span class="tag1"></span> 
				</div>
				<div class="description">
					<p>{details?.description}</p>
				</div>
				<br/>
				<br/>
				<br/>
				<div class="product-info smart-form">
				<div class="row" align="left">
							<div class="rating">
								<b>Rating :</b>{details?.rating.rate} / 5 
								<br/>
								<b>Products Available :  </b>  {details?.rating.count}
							</div>
					</div>
					<br/><br/>
					<div class="row" align="left">
						{available?(
							<div > 
								<button onClick={addtoWishlist} class="btn btn-info w-100">Add to cart</button>
							</div>
						):(
							<div>
								<a href="/wishlist"><button class="btn btn-success w-100">Available in cart</button></a>
							</div>
						)}
						
						
					</div>
					<br/>
					
				</div>
			</div>
		</div>
	</div>
         </div>
   
   )
}
const mapStateToProps = (state) => ({
	product: state.product
  })
  
export default connect(mapStateToProps)( ProductDetails)
