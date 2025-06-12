import React, { useContext } from 'react'
import ProductContext from '../../context/ProductContext';
import ProductCard from '../ProductCard';

function TopElectronics() {
    const { products } = useContext(ProductContext);

    console.log("All Products:", products); // Debugging

    if (!products || products.length === 0) {
        return <p>Loading products...</p>; // Show loading message while fetching
    }

    const toDisplayProducts = products
        .filter(product => product.category.toLowerCase() === "electronics") // Ensure case match
        .slice(0, 4);

    console.log("Top Electronics:", toDisplayProducts); // Debugging

    return (
        <div className="container">
            <div className="row m-4 ">
                <h2>Top Deals in Electronics</h2>
                <div className="card-group">  
                    {toDisplayProducts.length > 0 ? (
                        toDisplayProducts.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))
                    ) : (
                        <p>No electronics products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TopElectronics
