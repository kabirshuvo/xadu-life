import './Shop.css';

import React, { useEffect, useState } from 'react';
import Product from '../product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( ()=>{
        fetch('products.json').then(resp => resp.json()).then(data => setProducts(data));
        
    },[ ])

    const addToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart)
     }
    
    
    return (
        <div className='shop-container'>
            
            <div className='products-container'>
                    
                    {
                        products.map(product => <Product product={product} key={product.id}
                            addToCart={addToCart}/>)
                    }
                    
            </div>
            <div className='cart-container'>
                <h4>Order Summary</h4>
                <p>Sellected Items {cart.length}</p>
                    <addToCart/>
            </div>
            
        </div>
    );
};

export default Shop;