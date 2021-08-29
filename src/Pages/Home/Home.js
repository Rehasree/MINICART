import React,{useState,useEffect} from 'react';
import cart from './img/1.svg';
import './Home.css'
function Home() {
    const [categories,setCategories] = useState({});
    // API call to fetch all the categories available
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
                .then(res=>res.json())
                .then(json=>setCategories(json))
        },[]);
    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img className="img-fluid" src={cart} alt=""/>
                </div>
                <div className="col-md"></div>
                <div className="col-md-4 col-sm-12" style={{marginTop:"6rem"}} >
                    <h1>KNOW ABOUT US???</h1>
                    <br/>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>
            <div className="row" style={{marginBottom:"200px"}}>
                <h1>CATEGORIES</h1>
                <br/>
                    <div className="col">
                    <div className="card">
                        <h2>{categories[0]}</h2>
                       <a href={"/category/"+categories[0]}> <button className="btn btn-info w-100">View Products</button></a>

                    </div>
                    </div>
                    <div className="col">
                    <div className="card">
                        <h2>{categories[1]}</h2>
                        <a href={"/category/"+categories[1]}> <button className="btn btn-info w-100">View Products</button></a>

                    </div>
                    </div>
                    <div className="col">
                    <div className="card">
                        <h2>{categories[2]}</h2>
                       <a href={"/category/"+categories[2]}> <button className="btn btn-info w-100">View Products</button></a>
                        
                    </div>
                    </div>
                    <div className="col">
                    <div className="card">
                        <h2>{categories[3]}</h2>
                        <a href={"/category/"+categories[3]}><button className="btn btn-info w-100">View Products</button></a>
                       
                    </div>
                    </div>       
            </div>
        </div>
    )
}

export default Home
