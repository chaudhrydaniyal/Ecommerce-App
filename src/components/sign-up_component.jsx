import React from 'react';
import CustomButton from './custom-button'
import './sign-up_component.scss'
import { signInWithGoogle } from '../firebase/firebase.utils'

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            displayName:'',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({   displayName:'',
        email: '',
        password: '',
        confirmPassword: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });

    }


    render() {


        return (
            <div className='Sign-up'>
                <h1>I do not have a account</h1>
                <span>Sign up with your Email and Password</span>
                <br></br>
                <br></br>
                <br></br>

                <form onSubmit={this.handleSubmit}>
                    <input className="form-input-displayName" name='displayName' type='text' value={this.state.displayName} onChange={this.handleChange} required />
                    <label className={`${(this.state.displayName)?'shrink':''}Label-displayName`}>Display Name</label>
                    <input className="form-input-email" name='email' type='email' value={this.state.email} onChange={this.handleChange} required />
                    <label className={`${(this.state.email)?'shrink':''}Label-email`}>Email</label>
                    
                    <input className="form-input-password" name='password' type='password' onChange={this.handleChange} value={this.state.password} required />
                    <label className={`${(this.state.password)?'shrink':''}Label-password`}>Password</label>
                    <input className="form-input-confirmPassword" name='password' type='password' value={this.state.confirmPassword} onChange={this.handleChange} required />
                    <label className={`${(this.state.confirmPassword)?'shrink':''}Label-confirmPassword`}>Confirm Password</label>
                    <br></br>
                    <CustomButton type='submit'>Sign Up</CustomButton>

                </form>
                


            </div>
        )
    }
}
export default SignUp;