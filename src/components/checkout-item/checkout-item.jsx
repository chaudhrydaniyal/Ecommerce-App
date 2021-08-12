import React from 'react'
import './checkout-item.scss'

const CheckoutItem = ({ cartItem: { title, price, quantity,url} }) => {


    return (
        <div className='checkout-item'>
            <div className='image-container'>
            <img src={url} alt='image'/>
            </div>
            <span className='title'>{title}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button'>&#10005;</div>




        </div>
    )

}


export default CheckoutItem