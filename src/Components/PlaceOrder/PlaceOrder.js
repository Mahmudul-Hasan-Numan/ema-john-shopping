import React from 'react';
import img from '../../images/giphy.gif';
import './PlaceOrder.css'

const PlaceOrder = () => {
    return (
        <div className='place-order'>
            <h1 className='place-order-confirmation'>Your Order Done</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;