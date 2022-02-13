import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;





// //Practise --0001

// import React from 'react';
// import './Header.css';
// import logo from '../../images/logo.png'
// const Header = () => {
//     return (
//         <div className='header'>
//             <img className='logo' src={logo} alt="" />
//             <nav>
//                 <a href="/shop">Shop</a>
//                 <a href="/review">Order Review</a>
//                 <a href="/inventory">Manage Inventry</a>
//             </nav>
//         </div>
//     );
// };

// export default Header;