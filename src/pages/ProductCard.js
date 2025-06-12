import { useContext,useState } from 'react'
import CartContext from '../context/CartContext';
import styles from '../styles/ProductCard.module.css'
import { useNavigate } from 'react-router-dom';
  

// Function to render star ratings dynamically based on the product rating
const renderStars = (rating) => {
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
  return <div>{stars} ({rating.count})</div>// Return the stars wrapped in a div 
}


function ProductCard(props) {
  const {addToCart} = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false); // State to track if added to cart
  const navigate = useNavigate();
  var prod = props.product;

  const onClickAddToCart=(product)=>{
    addToCart(product);  // Use addToCart from CartContext
    setAddedToCart(true); // Show "Added to Cart" message
    setTimeout(() => setAddedToCart(false), 3000);
  } 

  const onClickViewDetails=(id)=>{
    console.log("Handling click,product id is :",id);
    navigate('/products/'+id);
  }
  return (
    <div className={`col-6 col-sm-4 col-md-3  m-1 p-2 border ${styles.cardSize} `} >
      <div style={{ cursor: 'pointer' }} onClick={()=>onClickViewDetails(prod.id)} data-bs-toggle="tooltip" data-bs-placement="top" title={prod.description}>
        <div className='d-flex justify-content-center' >
            <img src={prod.image} className={styles.cardImage} alt={prod.title} />
        </div>
        <span className={styles.cardTitle}>{prod.title}</span>
        <div >
          <span className="fs-6 m-1">₹</span>
          <span className="fs-4 fw-bold">{prod.price }</span>
          {renderStars(prod.rating)}
          </div>

        
      </div>
      <div >          
            <button class="rounded-pill  btn btn-warning m-1" onClick={()=>onClickAddToCart(prod)}>Add to cart</button>
            {addedToCart && <p className="text-success mt-2"><i className="fa fa-check" ></i>Added to Cart.</p>}            
      </div>
        
      </div>
  
  )
}

export default ProductCard
