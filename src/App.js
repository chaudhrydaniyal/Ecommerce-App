
import Homepage from './pages/homepage';
import { Route } from 'react-router-dom';
import Collection from './pages/collection';
import Header from './components/header-component';
import SignInAndSignUp from './pages/sign-in_sign-up';

function App() {
  return (
    <div class="App">
      <Header></Header>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/collection/:title' component={Collection} />
      <Route exact path='/signin' component={SignInAndSignUp} />
      
    </div>
  );
}

export default App;
