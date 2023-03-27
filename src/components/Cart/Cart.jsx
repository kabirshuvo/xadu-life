import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    //console.log(cart)
    let total = 0;
    //console.log(total);

    for(const product of cart){
        total = total+product.price;
    }
    //console.log(total);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Sellected Items {cart.length}</p>
            <p>Total Price: {total} </p>
            <p>Total Shipping: </p>
            <p>Tax: </p>
            <h6>Grand Total: </h6>
        </div>
    );
};

export default Cart;