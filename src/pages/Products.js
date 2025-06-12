import { useNavigate } from "react-router-dom";
import { useContext} from "react";

import ProductCard from "./ProductCard";



import CategoryContext from "../context/CategoryContext";
import ProductContext from "../context/ProductContext";

const Products=()=> {

    const {products,filterText,setFilterText} = useContext(ProductContext);
    const {selectedCategory,filteredProducts,setSelectedCategory}=useContext(CategoryContext);
    
    const navigate= useNavigate();
    var toDisplayProducts =[]; 
  

    toDisplayProducts = filterText ?
                        products.filter(product => product.title.toLowerCase().includes(filterText.toLowerCase())):
                        products;
    if((selectedCategory.length>0 )&& (filteredProducts.length > 0)){
        toDisplayProducts = filteredProducts;
    }
function onClickBack(){
    setSelectedCategory('');
    setFilterText('');
    navigate(-1);

}
    return (    
        
        <div className="container">
            <div className="card-group ">  
                {
                    toDisplayProducts.map((p)=>{
                        return(
                            <ProductCard product={p} ></ProductCard>
                        );
                    })
                }
                
            </div>
            <div ><button className="btn btn-secondary m-2" onClick={onClickBack}>Back</button></div>
        </div>
     );
}

export default Products;