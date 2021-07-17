
import Homepage from './pages/homepage';
import { Route } from 'react-router-dom';
import Collection from './pages/collection';
import Header from './components/header-component';

function App() {
  return (
    <div class="App">
      <Header></Header>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/collection/:title' component={Collection} />
      
    </div>
  );
}

export default App;
