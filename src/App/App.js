import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss';

import About from '../pages/About/About'
import Home from '../pages/Home/Home'
import Portfolio from '../pages/Portfolio/Portfolio'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />

          <Route path="/urban" render={() => <Portfolio category="urban" />} />
          <Route path="/culture" render={() => <Portfolio category="culture" />} />
          <Route path="/people" render={() => <Portfolio category="people" />} />
          <Route path="/nature" render={() => <Portfolio category="nature" />} />

          <Route path="/about" render={() => <About />} />

          <Route path="*" render={() => <Home />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
