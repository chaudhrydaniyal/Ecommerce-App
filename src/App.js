import React from 'react';
import Homepage from './pages/homepage';
import { Route } from 'react-router-dom';
import Collection from './pages/collection';
import Header from './components/header-component';
import SignInAndSignUp from './pages/sign-in_sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import reactDom from 'react-dom';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        currentUser: null
      }
    }

    
    unsubscribeFromAuth = null;


    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({
          currentUser: user
        })

        const userRef= createUserProfileDocument(user);
      })
    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

  render(){
  return (
    <div class="App">
      <Header ></Header>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/collection/:title' component={Collection} />
      <Route exact path='/signin' component={SignInAndSignUp} />
      
    </div>
  )}
}

export default App;
 