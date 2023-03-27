import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    //console.log(cart)
    let totalPrice = 0;
    //console.log(total);
    let shippingCost = 0;
   

    for(const product of cart){
        totalPrice = totalPrice+product.price;
        shippingCost = shippingCost + product.shipping;
        
    }
    let tax = totalPrice*3/100;
    const grandTotal = totalPrice + shippingCost + tax;
    //console.log(total);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Sellected Items {cart.length}</p>
            <p>Total Price: $ <span className='total'>{totalPrice.toFixed(2)}</span> </p>
            <p>Total Shipping: $ {shippingCost.toFixed(1)}</p>
            <p>Tax: $ {tax.toFixed(1)}</p>
            <h6>Grand Total: $ {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;