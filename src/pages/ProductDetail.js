import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import CartContext from '../context/CartContext';

const renderStars = (rating) => {
  if (!rating || typeof rating.rate === "undefined") return null; 
  const ratings=rating.rate;
  const totalStars = 5;
  let stars = [];

  // Loop to create star elements based on the rating
  for (let i = 1; i <= totalStars; i++) {
    if (i <= ratings) {
      // Filled star for each rating point
      stars.push(<span className="fa fa-star text-warning"></span>);
    } else {
      // Empty star for the remaining points
      stars.push(<span className="fa fa-star text-secondary"></span>);
    }
  }
  return <div>{ratings}{stars}({rating.count} ratings)</div>// Return the stars wrapped in a div 
} 

function ProductDetail() {
  const params = useParams(); 
  console.log("getting params:", params);
  const prodId = params.productId;

  const [product,setProduct] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);

  const {addToCart} = useContext(CartContext);
 
  const [error, setError] = useState(null);


useEffect(() => {
  console.log("ProdId changed, so calling loadProductById: prodId is:", prodId);
  async function loadProductById() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${prodId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
    } catch (error) {
        setError(error.message); // Store error in state
    }
}
  loadProductById();
}, [prodId]); 
 
const onClickAddToCart=()=>{
  addToCart(product);
  setAddedToCart(true); // Show "Added to Cart" message
  setTimeout(() => setAddedToCart(false), 3000);
} 

return (
  

    <div className="container my-4  border d-flex justify-content-around">
       {error && <div className="alert alert-danger">{error}</div>}
            <div className={`col-5 style={{ width: "300px", height: "400px", objectFit: "contain" }}>`}><img  src={product.image} alt='' style={{ objectFit: "contain", width: "100%", height: "100%" }} /></div>
            <div className="col-6   ">
                <h2>{product.title}</h2>
                <p className="fs-5">{product.description}</p>
                {renderStars(product.rating)}
                <hr></hr>
                <span className="fs-5 m-1">₹</span>
                <span className="fs-3 fw-bold">{product.price }</span>
                <p>Inclusive of all taxes. No Cost EMI available</p>
                <div>
                    <button class="rounded-pill  btn btn-warning m-1" onClick={onClickAddToCart}>Add to cart</button>  
                    {addedToCart && <p className="text-success mt-2"><i className="fa fa-check" ></i>Added to Cart.</p>}        
                </div>
            </div>
        </div>
  )
}

export default ProductDetail
