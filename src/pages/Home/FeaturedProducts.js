import React, { useContext } from 'react'
import ProductContext from '../../context/ProductContext';
import ProductCard from '../ProductCard';

function FeaturedProducts() {
  
    const {products} = useContext(ProductContext);

    const toDisplayProducts = products.filter(product => 
        product.rating.count > 100)  // Filter products with rating count > 100
        .slice(0, 4);           
        console.log('featured products',toDisplayProducts)  ;
    return ( 

        <div className="container">
            <div className="row m-4 ">
                <h2>Featured Products</h2>
                    <div className="card-group">  
                    {
                        toDisplayProducts.map((p)=>{
                            return(
                                <ProductCard product={p} ></ProductCard>
                            );
                        })
                    }
                     </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
