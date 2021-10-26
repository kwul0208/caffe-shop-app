import './App.css';
import Navbar from './component/Navbar';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Event from './pages/Event';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/menu' exact component={Menu} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/event' exact component={Event} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
