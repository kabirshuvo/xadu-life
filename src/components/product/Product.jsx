import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {

    console.log(props.product);


 const {id, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock} = props.product;

 const addToCart = props.addToCart;

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
           <button className='addToCartBtn' onClick={()=>addToCart(props.product)}>Add To Cart <span className='cart-icon'><FontAwesomeIcon icon={faShoppingCart} /></span></button>
        </div>
    );
};

export default Product;
