import React from 'react';
import ProductCard from '../../components/productCard/ProductCard';

const ProductSection = () => {
    return (
        <div>
            <div style={{borderBottom:'1px solid black'}}>
                <div style={{textAlign:'center',margin:'30px'}}>
                    <h2>Our Products</h2>
                </div>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    );
};

export default ProductSection;