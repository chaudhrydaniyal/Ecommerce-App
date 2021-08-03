import React from 'react';
import {Link} from 'react-router-dom';
import './header-component.scss'
import {auth} from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import Cart from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';


const Header = ({ currentUser , hidden}) => (
    <div className="header">
        <div className="options">
            <Link className="option" to="/" style={{ textDecoration: 'none' }}> 
                Shop
            </Link>
            <Link className="option" to="/collection/hats" style={{ textDecoration: 'none' }}>
                Contact
            </Link>
            {currentUser? (<div className="option" onClick={() => auth.signOut()}>Sign out</div> ): (<Link className="option" to="/signin" style={{ textDecoration: 'none' }} > Sign in  </Link>)}
            <Cart></Cart>
        </div>
        {(hidden)? '' : <CartDropdown></CartDropdown> }
        
    </div>
)


const mapStateToProps = (state) =>({
    currentUser : state.user.currentUser,
    hidden: state.cart.hidden
})



export default connect(mapStateToProps)(Header);

