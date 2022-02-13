import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([])

    useEffect(() => {
        // console.log('product API called')
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
                // console.log('products recieved')
            })
    }, [])
    useEffect(() => {
        // console.log('LocalStorage called')
        if (products.length) {
            const saveCart = getStoredCart();
            const storedCart = [];
            for (const key in saveCart) {
                console.log(key, saveCart[key])
                const addedProduct = products.find(product => product.key === key);
                // console.log(key, addedProduct);
                if (addedProduct) {
                    const quantity = saveCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart)
        }
    }, [products])
    const handleAddToCart = (product) => {
        const exist = cart.find(pd => pd.key === product.key);
        let newCart = []
        if (exist) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, product]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.key)
    }
    const handleSearch = event => {
        const searchText = (event.target.value);
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProduct)
        console.log(matchedProduct.length)
    }
    return (
        <div>
            <div className='search-container'>
                <input onChange={handleSearch} type="text" placeholder='Search Product' />
            </div>
            <div className='shop-container'>
                <div className="products-container">
                    <h2>Total Items: {products.length}</h2>
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        {/* <Link to='/review'>
                            <button className='btn-regular'>Review Your Order</button>
                        </Link> */}
                        <Link to='/review'><button className='btn-regular'>Review Your Order</button></Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;




// // Practise number ---------00001

// import React, { useEffect, useState } from 'react';
// import Cart from '../Cart/Cart';
// import Product from '../Product/Product';
// import './Shop.css';

// const Shop = () => {
//     const [products, setProducts] = useState([]);

//     const [cart, setCart] = useState([])
//     useEffect(() => {
//         fetch('./products.json')
//             .then(res => res.json())
//             .then(data => setProducts(data))
//     }, [])

//     const handleAddToCart = (product) => {
//         const newCart = [...cart, product];
//         setCart(newCart)
//     }
//     return (
//         <div className='shop-container'>
//             <div className='products-container'>
//                 <h1>Total Items: {products.length} </h1>
//                 {
//                     products.map(product => <Product
//                         key={product.key}
//                         product={product}
//                         handleAddToCart={handleAddToCart}
//                     ></Product >)
//                 }
//             </div>
//             <div className='cart-container'>
//                 <Cart cart={cart}></Cart>
//             </div>
//         </div>
//     );
// };

// export default Shop;