import React from 'react'
import './cart-dropdown.scss'
import CustomButton from '../custom-button/custom-button'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item'


const CartDropdown= ({cartItems}) =>(

    <div className= 'cart-dropdown'>
        <div className= 'cart-items'>
            {cartItems.map(cartItem=> (<CartItem cartItem={cartItem}></CartItem>))}

        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>

)


const mapStateToProps = (state) => ({

    cartItems: state.cart.cartItems

})

export default connect(mapStateToProps)( CartDropdown)



