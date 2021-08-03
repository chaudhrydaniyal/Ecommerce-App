import React from 'react'
import './custom-button.scss'

const CustomButton = ({ children , addItem,  ...otherProps}) => {

return(
<button className= {`${(addItem)? 'addItem' : ''} custom-button`} {...otherProps} >
    {children}
</button> 
)
}

export default CustomButton;