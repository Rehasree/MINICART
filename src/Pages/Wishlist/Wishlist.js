import React from 'react'
import {connect} from 'react-redux'
import './wishlist.css'
function Wishlist(props) {
    const wishlist = props.product;
    var totalCost=0;
    wishlist.map(product=>{
       return totalCost+=product.price;
    })
    const removeItem=(e)=>{
        const productName = e.target.name;
        var products = props.product;
        var removedProducts = products.filter((product)=>{
                if(product.title!==productName){
                    return product != null;
                }
        })
        //console.log(removedProducts)
        props.dispatch({type:"remove",value: removedProducts})
    }
    return (
        <div className="container" style={{marginTop:"40px"}}>
        <h2 align="left" > Total cost : ${totalCost} </h2>
        {wishlist.map(product=>{
            return(
                <div class="product-content product-wrap clearfix">
                <div class="row">
                        <div class="col-md-5 col-sm-12 col-xs-12">
                            <div class="product-image"> 
                                <img height="500px" width="300px" src={product.image} alt="194x228" class="img-responsive"/> 
                                <span class="tag2 hot">
                                    NEW
                                </span> 
                            </div>
                        </div>
                        <div class="col-md-7 col-sm-12 col-xs-12">
                        <div class="product-deatil" align="left">
                                <h3 class="name">
                                        {product.title}
                                        <br/>
                                        <span style={{color:"GrayText",textTransform:"capitalize"}}><h4>{product.category}</h4></span>
                                </h3>
                                <p class="price-container">
                                    <span>${product.price}</span>
                                </p>
                                <span class="tag1"></span> 
                        </div>
                        <div class="product-info smart-form">
                        <div class="row" align="left">
                                    <div class="rating">
                                        <b>Products Available :  </b>  {product.rating?.count}
                                    </div>
                            </div>
                            <br/><br/>
                            <div class="row" align="left">
                                <div > 
                                    <button onClick={removeItem} name={product.title} class="btn btn-danger w-100">Remove from cart</button>
                                </div>
                                
                            </div>
                            <br/>
                            
                        </div>
                    </div>
                </div>
            </div>
           
            )
        })}
      </div>
    )
}
const mapStateToProps = (state) => ({
	product: state.product
  })
  
export default connect(mapStateToProps)(Wishlist)
