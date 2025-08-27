import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, price, img }) => {
    return (
        <div className="product-card">
            <img src={img}/>
            <h3 className="product-title">{title}</h3>
            <p className="product-price">${price}</p>
            
        </div>
    );
};

export default ProductCard;
