import React from 'react'
import './checkout-item.scss'

import { connect } from 'react-redux'
import { RemoveItem } from '../../redux/cart/cart-actions'

const CheckoutItem = ({ cartItem, RemoveItem }) => {

    const  { name, price, quantity,url} = cartItem;


    return (
        <div className='checkout-item'>
            <div className='image-container'>
            <img src={url} alt='image'/>
            </div>
            <span className='title'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={()=>RemoveItem(cartItem)}>&#10005;</div>




        </div>
    )

}

const  mapDispatchToProps = dispatch => ({

    RemoveItem: item => dispatch(RemoveItem(item))

})

export default connect(null,mapDispatchToProps)(CheckoutItem);