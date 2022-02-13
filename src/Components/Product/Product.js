import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';
import Rating from 'react-rating';
const Product = (props) => {
    const { img, name, price, seller, stock, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <h4>by: {seller}</h4>
                <h5>${price}</h5>
                <p>only {stock} left in stock - order soon</p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color "
                    readonly></Rating>
                <br />
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-regular'>{cartIcon}Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;

// //Practise number ----00001

// import React from 'react';
// import './Product.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

// const Product = (props) => {
//     const { img, name, seller, price, stock } = props.product;
//     const element = <FontAwesomeIcon icon={faShoppingCart} />

//     return (
//         <div className='product'>
//             <img src={img} alt="" />
//             <div>
//                 <h3>{name}</h3>
//                 <p><small>By: {seller}</small></p>
//                 <h4>Price: ${price}</h4>
//                 <p>only {stock} left in stock - order soon </p>
//                 <button onClick={() => props.handleAddToCart(props.product)} className='btn-regular'> {element}Add to Cart</button>
//             </div>
//         </div>
//     );
// };

// export default Product;