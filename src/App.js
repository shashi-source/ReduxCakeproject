import './App.css';
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
// import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route>404 Not Found!</Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
