import React from 'react'
import './custom-button.scss'

const CustomButton = ({type , children}) => {
return(
<button className="custom-button" type={type}>
    {children}
</button> 
)
}

export default CustomButton;