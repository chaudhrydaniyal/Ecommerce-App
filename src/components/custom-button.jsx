import React from 'react'
import './custom-button.scss'

const CustomButton = ({type , children, isGoogleSignIn}) => {

return(
<button className={`${isGoogleSignIn? "google-sign-in": ''} custom-button`} type={type}>
    {children}
</button> 
)
}

export default CustomButton;