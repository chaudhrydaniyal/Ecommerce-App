import React from 'react'
import {ReactComponent as CartIcon} from '../../assets/cart-icon.svg'
import './cart-icon.scss'
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import { connect } from 'react-redux'



const Cart= ({itemCount, toggleCartHidden}) =>(

    <div className= 'cart-icon-container' onClick={toggleCartHidden}>
        <CartIcon className= 'cart-icon'></CartIcon>
        <span className= 'item-count'>{itemCount}</span>
    </div>

)



const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
  });

export default connect (null, mapDispatchToProps)(Cart)



