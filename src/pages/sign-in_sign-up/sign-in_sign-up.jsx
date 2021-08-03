import React from 'react';
import './sign-in_sign-up.scss';
import SignIn from '../../components/sign-in_component/sign-in_component';
import SignUp from '../../components/sign-up_component/sign-up_component';


const SignInAndSignUp = () => {

return (
<div className="sign-in_sign-up">
<SignIn></SignIn>
<SignUp></SignUp>

</div>
)
}


export default SignInAndSignUp;