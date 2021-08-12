import React from 'react'
import './cart-dropdown.scss'
import CustomButton from '../custom-button/custom-button'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart-actions'


const CartDropdown= ({cartItems, history, dispatch}) =>(

    <div className= 'cart-dropdown'>
        <div className= 'cart-items'>
            { cartItems.length ? 
            cartItems.map(cartItem=> (<CartItem cartItem={cartItem}></CartItem>))
            : <span className='empty-message'> Your cart is empty</span>}

        </div>
        <CustomButton onClick={()=>{history.push('/checkout'); dispatch(toggleCartHidden())}}>Go to checkout</CustomButton>
    </div>

)


const mapStateToProps = (state) => ({

    cartItems: state.cart.cartItems

})

export default withRouter(connect(mapStateToProps)( CartDropdown))



