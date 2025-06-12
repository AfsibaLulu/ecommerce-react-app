import React from "react";
import {useState, useEffect} from 'react'
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart"
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

import CartContext from "./context/CartContext";
import CategoryContext from "./context/CategoryContext";
import ProductContext from "./context/ProductContext";





function App() {
  const [productList,setProductList] = useState([]);
  const [filterText, SetFilter] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [category,setCategory] = useState('');
  const [filteredProducts,setFilteredProducts] = useState([]); 

  
useEffect(() => {
  fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => setProductList(data))
  .catch((err) => console.log("Product fetch error", err));
  
}, []);

function setFilterText(txt) {
  SetFilter(txt);
}   
 // Add item to the cart
 const addToCart = (item) => {
  setCartItems(prevCart => {
    const itemExists = prevCart.find((c) => c.id === item.id);
    if (itemExists) {
      // If item exists, update the quantity
      return prevCart.map((c) =>
        c.id === item.id
          ? { ...c, quantity: c.quantity + 1 }
          : c
      );
    } else {
      // If item does not exist, add it with quantity 1
      return [...prevCart, { ...item, quantity: 1 }];
    }
  });

};

const increaseQuantity = (id) => {
  setCartItems((prevCart) =>
    prevCart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCartItems((prevCart) =>
    prevCart.map((item) =>
      item.id === id && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity > 0) // Remove items with quantity 0
  );
};

  // Remove item from the cart
  const removeFromCart = (id) => {
    setCartItems(prevCart => prevCart.filter(item => item.id !== id));
  };

  const setSelectedCategory = (value)=>{
    setCategory(value);
  }

 return(
  <div>
  <CartContext.Provider value={
    { cart:cartItems,
      addToCart : addToCart,
      increaseQuantity : increaseQuantity,
      decreaseQuantity : decreaseQuantity,
      removeFromCart : removeFromCart
    }
  }>
    <CategoryContext.Provider value={
       {selectedCategory : category,
       setSelectedCategory : setSelectedCategory ,
       filteredProducts : filteredProducts,
       setFilteredCategory:setFilteredProducts
    }
    }>
<ProductContext.Provider value={
  {
    products : productList,
    filterText : filterText,
    setFilterText : setFilterText
    
  }
}>



  
<Navbar/>
<Routes>
 <Route path="/" element={<Home/>}></Route>
 <Route path="Products" element={<Products/>}></Route>
 <Route path='/products/:productId' element={<ProductDetail/>}/>       
 <Route path="About" element={<About/>}></Route>
 <Route path="Contact" element={<Contact/>}></Route>
<Route path="Cart" element={<Cart/>}></Route>

</Routes>
<Footer/>
</ProductContext.Provider>
</CategoryContext.Provider>
</CartContext.Provider>
</div>
)
}

export default App; 
