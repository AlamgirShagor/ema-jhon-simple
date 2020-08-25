import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import style from './Data.css';

const Data = (props) => {
    console.log(props);
    const {img, name, seller, category, price, stock} = props.product;
    return (
        <div className="product-card">
            <div className="product-img">
                <img src={img} alt="" srcset=""/>
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p className="seller"> By: {seller}</p>
                <p className="seller"> Category: {category}</p>
                <p className="seller">Price: ${price}</p>
                <br/>
                <p className="seller"> Only {stock} left is stock -order soon</p>
                <button onClick={()=> props.handleAddProduct(props.product)} className="addCard"><FontAwesomeIcon className="shoppingIco" icon={faShoppingCart} />Add to Card</button>
            </div>
        </div>
    );
};

export default Data;