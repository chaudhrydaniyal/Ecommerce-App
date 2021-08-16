import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item';

const CheckoutPage = ({cartItems, total}) => {
return (
<div className='checkout-page'>
    <div className='checkout-header'>
        <div className='header-block'>
            <span>Product</span>
        </div>
        <div className='header-block'>
            <span>Description</span>
        </div>
        <div className='header-block'>
            <span>Quantity</span>
        </div>
        <div className='header-block'>
            <span>Price</span>
        </div>
        <div className='header-block'>
            <span>Remove</span>
        </div>
    </div>
    {cartItems.map(cartItem=> (<CheckoutItem cartItem={cartItem}></CheckoutItem>))}
    <div className='total'>Total: ${total}</div>
</div>
)
}

const mapStateToProps = (state) =>({

    cartItems: state.cart.cartItems,
    total: state.cart.cartItems.reduce((accumalatedQuantity, cartItem)=>accumalatedQuantity + (cartItem.price*cartItem.quantity), 0)

})

export default connect(mapStateToProps)(CheckoutPage);