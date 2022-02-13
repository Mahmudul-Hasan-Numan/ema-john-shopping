import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    console.log(props)

    let total = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * .1;
    const grandTotal = (total + shipping + tax)
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Ordered: {totalQuantity}</h4>
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping:{shipping}</p>
            <p>Tax ={tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
            <p>{props.children}</p>
        </div>
    );
};

export default Cart;


// // Practise number ---00001
// import React from 'react';

// const Cart = (props) => {
//     const { cart } = props;
//     let total = 0;
//     for (const product of cart) {
//         total = total + product.price
//     }
//     const shipping = 10;
//     const tax = (total + shipping) * 0.1;
//     const grandTotal = (total + shipping + tax)
//     return (
//         <div>
//             <h2>Ordered Summary</h2>
//             <h4>Items Ordered: {props.cart.length} </h4>
//             <p>Total: {total}</p>
//             <p>Shipping:{shipping}</p>
//             <small>Tax: {tax}</small>
//             <h4>Grand Total: ${grandTotal}</h4>
//         </div>
//     );
// };

// export default Cart;