import React from 'react';
import './cart-item.scss';



const CartItem = ({cartItem:{title, price, url ,quantity}}) => {
return (
<div className='cart-item'>
    <img src={url} alt='image' />
    <div className='item-detail'>
        <span className='title'>{title}</span>
        <span className='price'>{quantity} * ${price}</span>
    </div>
</div>
)


}

export default CartItem