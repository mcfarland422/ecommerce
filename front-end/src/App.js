// 3rd Party modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// custom Components
import NavBar from './NavBar';
import SlickSlider from './components/SlickSlider';
import Register from './containers/Register';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="app-body">
          <Route exact path="/" component={SlickSlider} />
          <Register />
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
