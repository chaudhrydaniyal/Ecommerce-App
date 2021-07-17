import React from 'react';
import {Link} from 'react-router-dom';




const Header =()=>(

    <div className="header">
<div className="options">
    <Link className="option" to="/">
Shop
    </Link>
    <Link className="option" to="/collection/hats">
    Contact

        </Link>
</div>

    </div>


) 


export default Header;