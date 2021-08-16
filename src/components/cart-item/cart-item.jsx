import React from 'react';
import './cart-item.scss';



const CartItem = ({cartItem:{name, price, url ,quantity}}) => {
return (
<div className='cart-item'>
    <img src={url} alt='image' />
    <div className='item-detail'>
        <span className='title'>{name}</span>
        <span className='price'>{quantity} &#10005; ${price}</span>
    </div>
</div>
)


}

export default CartItem