import React from 'react';
import './sign-in_component.scss'
import CustomButton from './custom-button'
import { signInWithGoogle } from '../firebase/firebase.utils';

class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });

    }


    render() {
        console.log(`${(this.state.email)?'shrink':''}Label-email`);


        return (
            <div className='Sign-in'>
                <h1>Already has an account</h1>
                <span>Sign In with your Email and Password</span>
                <br></br>
                <br></br>
                <br></br>

                <form onSubmit={this.handleSubmit}>
                    <input className="form-input-email" name='email' type='email' value={this.state.email} onChange={this.handleChange} required />
                    <label className={`${(this.state.email)?'shrink':''}Label-email`}>Email</label>
                    <input className="form-input-password" name='password' type='password' onChange={this.handleChange} value={this.state.password} required />
                    <label className={`${(this.state.password)?'shrink':''}Label-password`}>Password</label>
                    <br></br>
                    <CustomButton type='submit'>Submit Form</CustomButton>
                    <button type='button' className='custom-button_google-sign-in' onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</button>

                </form>
                


            </div>
        )
    }
}
export default SignIn;