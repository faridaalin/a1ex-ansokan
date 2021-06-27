import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Application from './routes/Application';
import About from './routes/About';
import Contact from './routes/Contact';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/Application'>
            <Application />
          </Route>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
