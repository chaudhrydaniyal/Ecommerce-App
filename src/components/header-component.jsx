import React from 'react';
import {Link} from 'react-router-dom';
import './header-component.scss'
import {auth} from '../firebase/firebase.utils'





const Header = ({ currentUser }) => (

    <div className="header">
        <div className="options">
            <Link className="option" to="/">
                Shop
            </Link>
            <Link className="option" to="/collection/hats">
                Contact

            </Link>
            {currentUser? (<div className="option" onClick={() => auth.signOut()}>Sign Out</div> ): (<Link className="option" to="/signin" > Sign In</Link>)}

        </div>


    </div>


)


export default Header;