import React from 'react';
import macbook from '..//..//assets/image/laptop.png'
import mouse from '..//..//assets/image/mouse.png'
import keyboard from '..//..//assets/image/mecKey.png'
import '..//..//assets/css/task5css/productcard.css'


const ProductCard = () => {
    return (
        <div>
            <div className='prdc-container'>
                    <div className='prdc-items'>
                        <div className='product-img'>
                            <img src={macbook} alt="" />
                        </div>
                        <div>
                            <h2>MacBook Pro</h2>
                            <p>৳123000</p>
                            <p>Available</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default ProductCard;