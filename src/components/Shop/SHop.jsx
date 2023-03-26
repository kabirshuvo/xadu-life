import './Shop.css';

import React, { useEffect, useState } from 'react';
import Product from '../product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('products.json').then(resp => resp.json()).then(data => setProducts(data));
        
    },[ ])
    
    
    return (
        <div className='shop-container'>
            
            <div className='products-container'>
                    <h2>Product Container {products.length}</h2>
                    {
                        products.map(product => <Product product={product} key={product.id}/>)
                    }
                    
            </div>
            <div className='cart-container'>
                    <h2>Cart Container</h2>
            </div>
            
        </div>
    );
};

export default Shop;