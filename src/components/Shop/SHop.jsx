import './Shop.css';

import React, { useEffect, useState } from 'react';
import Product from '../product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('products.json').then(resp => resp.json()).then(data => setProducts(data));
        
    },[ ])

    const addToCart = (id) =>{
        console.log('product added', id)
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
                    <h2>Cart Container</h2>
            </div>
            
        </div>
    );
};

export default Shop;