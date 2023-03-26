import React from 'react';
import './Product.css';

const Product = (props) => {

    console.log(props.product);


 const {id} = props.product;

    return (
        <div>
            <h2>Products: {id}</h2>
        </div>
    );
};

export default Product;
