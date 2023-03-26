import React from 'react';
import './Product.css';

const Product = (props) => {

    console.log(props.product);


 const {img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock} = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
           <div>
           <div>
           <p className='product-name'>{name} </p>
            <p>Price: ${price}</p>
           </div>
            <div>
            <p>Seller: {seller}</p>
            <p>Ratings: {ratings} ratingsCount: {ratingsCount}</p>
            </div>
           </div>
           <button className='addToCartBtn'>Add To Cart (CartIcon)</button>
        </div>
    );
};

export default Product;
