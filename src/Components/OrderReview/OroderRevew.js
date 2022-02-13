// import React from 'react';
// import useCart from '../../hooks/useCart/useCart';
// import useProducts from '../../hooks/useProducts/usePeroducts';
// import Cart from '../Cart/Cart';
// import ReviewItem from '../ReviewItem/ReviewItem';

// const OroderRevew = () => {
//     const [products, setProducts] = useProducts();
//     const [cart, setCart] = useCart(products);
//     const handleRemove = key => {
//         const newCart = cart.filter(products => products.key !== key)
//         setCart(newCart);
//     }
//     return (
//         <div className='shop-container'>
//             <div className='products-container'>
//                 {
//                     cart.map(product => <ReviewItem
//                         product={product}
//                         handleRemove={handleRemove}
//                     ></ReviewItem>)
//                 }
//             </div>
//             <div className='cart-container'>
//                 <Cart cart={cart}></Cart>
//             </div>
//         </div>
//     );
// };

// export default OroderRevew;


import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/usePeroducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OroderRevew = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory()

    const handleRemove = key => {
        const newCart = cart.filter(products => products.key !== key);
        setCart(newCart);
        removeFromDb(key)
    }
    // const handlePlaceOrder = () => {
    //     history.push('/placeOrder');
    //     setCart([]);
    //     clearTheCart()
    // }

    const handlePlaceOrder = () => {
        history.push('/placeOrder');
        clearTheCart()
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    {/* <button onClick={handlePlaceOrder} className='btn-regular'>Place Order</button> */}
                    <button onClick={handlePlaceOrder} className='btn-regular'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OroderRevew;