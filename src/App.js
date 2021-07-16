
import Homepage from './pages/homepage';
import { Route } from 'react-router-dom';
import Collection from './pages/collection';

function App() {
  return (
    <div class="App">
      <Route exact path='/' component={Homepage} />
      <Route exact path='/collection/:title' component={Collection} />
      
    </div>
  );
}

export default App;
