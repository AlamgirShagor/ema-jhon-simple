import React, { useState } from 'react';
import productCSS from './product.css';
import fackData from '../../fakeData';
import Data from '../data/Data';
import Cart from '../cart/Cart';


const Product = () => {
    const first10 = fackData.slice(0, 10);
   const [products, setProducts] = useState(first10);
   const [card, setCard] = useState([]);
   const handleAddProduct = (product) =>{
       console.log("add products", product);
       const newCard = [...card, product];
       setCard (newCard);
   };
    
    return (
        <div className="shop-wrap">
            <div className="product-wrap">
                
                {
                    products.map(products => <Data 
                        handleAddProduct={handleAddProduct}
                        product={products}
                        ></Data>)
                }
                
            </div>
            <div className="prpduct-card">
            <Cart card= {card}></Cart>
            </div>
            
        </div>
    );
};

export default Product;