import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item';

const CheckoutPage = ({cartItems}) => {
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
</div>
)
}

const mapStateToProps = (state) =>({

    cartItems: state.cart.cartItems

})

export default connect(mapStateToProps)(CheckoutPage);