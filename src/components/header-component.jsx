import React from 'react';
import {Link} from 'react-router-dom';
import './header-component.scss'
import {auth} from '../firebase/firebase.utils'





const Header = ({ currentUser }) => (

    <div className="header">
        <div className="options">
            <Link className="option" to="/" style={{ textDecoration: 'none' }}> 
                Shop
            </Link>
            <Link className="option" to="/collection/hats" style={{ textDecoration: 'none' }}>
                Contact

            </Link>
            {currentUser? (<div className="option" onClick={() => auth.signOut()}>Sign out</div> ): (<Link className="option" to="/signin" style={{ textDecoration: 'none' }} > Sign in</Link>)}

        </div>


    </div>


)


export default Header;