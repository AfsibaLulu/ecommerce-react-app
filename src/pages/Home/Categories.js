import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CategoryContext from '../../context/CategoryContext'
import '../../styles/Categories.css'
import category1 from '../../assets/categories/category1.avif'
import category2 from '../../assets/categories/category2.avif'
import category3 from '../../assets/categories/category3.avif'
import category4 from '../../assets/categories/category4.avif'
import category5 from '../../assets/categories/category5.avif'
function Categories() {
    const { selectedCategory, setSelectedCategory, setFilteredCategory } = useContext(CategoryContext);
  const navigate = useNavigate();

  // Click handler to update selected category
  const onClickCategory = (value) => {
    setSelectedCategory(value);
  };

  // Fetch products when selectedCategory changes
  useEffect(() => {
    if (!selectedCategory) return; // Prevent running on first render

    console.log("Fetching products for category:", selectedCategory);

    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then((response) => response.json())
      .then((data) => {
        setFilteredCategory(data);
        console.log("Fetched category products:", data);
        navigate("/products");
      })
      .catch((error) => console.error("Fetch failed:", error));
  }, [selectedCategory,  setFilteredCategory, navigate]); //  Runs when selectedCategory updates

  return (
    <div className="container">
      <div className="row m-4">
        <h2>Categories</h2>

        {/* Fixed Category Labels */}
        <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{ cursor: "pointer" }}>
          <div className="card border-0" onClick={() => onClickCategory("men's clothing")}>
            <img src={category1} className="roundedCircle" alt="Men's Clothing" />
          </div>
          <p className="text-center">Men's Clothing</p>
        </div>

        <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{ cursor: "pointer" }}>
          <div className="card border-0" onClick={() => onClickCategory("women's clothing")}>
            <img src={category2} className="roundedCircle" alt="Women's Clothing" />
          </div>
          <p className="text-center">Women's Clothing</p>
        </div>

        <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{ cursor: "pointer" }}>
          <div className="card border-0" onClick={() => onClickCategory("jewelery")}>
            <img src={category3} className="roundedCircle" alt="Jewelry" />
          </div>
          <p className="text-center">Jewelry</p>
        </div>

        <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{ cursor: "pointer" }}>
          <div className="card border-0" onClick={() => onClickCategory("electronics")}>
            <img src={category4} className="roundedCircle" alt="Electronics" />
          </div>
          <p className="text-center">Electronics</p>
        </div>

        <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{ cursor: "pointer" }}>
          <div className="card border-0" onClick={() => onClickCategory("perfumes")}>
            <img src={category5} className="roundedCircle" alt="Perfumes" />
          </div>
          <p className="text-center">Perfumes</p>
        </div>
      </div>
    </div>
  );
}

export default Categories
