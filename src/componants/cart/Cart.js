import React from 'react';

const Cart = (props) => {
    const cart = props.card;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;

        
        
    }
    const tex = total / 5;
    const totalPice = total + tex;
    const formatNum = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Items Orders: {cart.length}</h5>
            <h5>Product Price: {formatNum(total)}</h5>
            <h5>Tex {formatNum (tex)}</h5>
            <h5>Total Price: {formatNum(totalPice)}</h5>
            
        </div>
    );
};

export default Cart;