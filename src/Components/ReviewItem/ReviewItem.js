// import React from 'react';

// const ReviewItem = (props) => {
//     const { name, price, quantity, key } = props.product;
//     const { handleRemove } = props
//     return (
//         <div className='product'>
//             <div>
//                 <h3>{name}</h3>
//                 <p>Price:{price}</p>
//                 <p><small>Quantity: {quantity}</small></p>
//                 <button onClick={() => handleRemove(key)} className='btn-regular'>Remove</button>
//             </div>
//         </div>
//     );
// };

// export default ReviewItem;

import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className='product'>
            <div>
                <h3>{name}</h3>
                <p>Price:{price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemove(key)} className='btn-regular'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;