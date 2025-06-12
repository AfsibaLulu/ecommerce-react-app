import React, { useContext } from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import LogoImage from '../../assets/logo.jpg'
import CategoryContext from '../../context/CategoryContext';

function Navbar() {

  const { setSelectedCategory }= useContext(CategoryContext)

  const handleHomeClick = () => {
    setSelectedCategory(""); // Clear the category filter
  };

 const navigate= useNavigate();
 const handleSearch = () => {
  const query = document.getElementById('searchText').value.trim();
  if (query) {
    // You can integrate this with your filterText later via context
    navigate(`/products?search=${encodeURIComponent(query)}`);
  }
};

  return (
   
    <nav className="navbar navbar-expand-lg bg-light px-3 shadow-sm">
      <div className="container-fluid "> 
        {/* Logo */}
    <NavLink to="/" className="navbar-brand" onClick={handleHomeClick}>
      <img src={LogoImage} height="80" alt="logo" />
    </NavLink>

     {/* Toggler for mobile */}
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
    {/*search bar */}
    <form className="d-flex mx-auto my-2 my-lg-0 w-50" role="search">
              <div className="input-group">
                            <input type="search" id="searchText" className="form-control" placeholder="Search products..." aria-label="Search" />
                            <button type="button" className="btn btn-outline-primary" onClick={handleSearch} ><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
      </form>

      

      {/* Navigation links */}
      
  
      <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
                                    <NavLink to="/" className="nav-link" onClick={handleHomeClick} >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/products" className="nav-link">Products</NavLink>       
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className="nav-link">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                                </li>
                                <li className="nav-item">
                                 <NavLink to="/cart" className="nav-link">
                                  <i className="fa -solid fa-cart-shopping"></i>
                                 </NavLink>
                               </li>
                            </ul>
      
      </div>
    
    </div>
    </nav>
   
  )
}

export default Navbar
