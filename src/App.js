import React, { Component } from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap'; whatever reactstrap commponents
import './App.css';
import HeaderComponent from './components/HeaderComponent';
//import { BrowserRouter } from 'react-router-dom';
//import Home from './components/HomeComponent';
//import Contact from './components/ContactComponent';
//import AboutMeComponent from './components/AboutMeComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
      </div>
    );
  }
}

export default App;
