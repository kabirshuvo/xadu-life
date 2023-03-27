import './Shop.css';

import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( ()=>{
        fetch('products.json').then(resp => resp.json()).then(data => setProducts(data));
        
    },[ ])

    //* products dependency Side Effect
            //step 1: get id
            //step:2 get the product by using id by .find(method)
            //step3: get quantity of the product
            //step4: add the addedProduct to savedCart
            //step5: set the savedCart 
    
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);

            }
            console.log('added Product:', addedProduct);
        }
        setCart(savedCart);

    }, [products])
        


    const addToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
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
                <Cart cart={cart}/>
                    <addToCart/>
            </div>
            
        </div>
    );
};

export default Shop;