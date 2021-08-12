import React from 'react';
import Homepage from './pages/homepage/homepage';
import { Route } from 'react-router-dom';
import Collection from './pages/collection/collection';
import CheckoutPage from './pages/checkout-page/checkout';
import Header from './components/header-component/header-component';
import SignInAndSignUp from './pages/sign-in_sign-up/sign-in_sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user-actions'
import reactDom from 'react-dom';

class App extends React.Component {
  


    
    unsubscribeFromAuth = null;


    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
        
        this.props.setCurrentUser(user);

        const userRef= await createUserProfileDocument(user);
      })
    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

  render(){
  return (
    <div className="App">
      <Header ></Header>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/collection/:title' component={Collection} />
      <Route exact path='/signin' component={SignInAndSignUp} />
      <Route exact path='/checkout' component={CheckoutPage} />

      
    </div>
  )}
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect (null, mapDispatchToProps) (App);
 