import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Header from './components/header';
import Contact from './components/contact';
import Services from './components/services';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Home />

        <About />
        <Services />

        <Contact />
      </div>
    );
  }
}

export default App;
