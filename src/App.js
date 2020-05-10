import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/HomeComponent';
import SetUp from './pages/SetUpComponent';
import Options from './pages/OptionsComponent';
import InputDecision from './pages/InputDecisionPageComponent';
import Results from './pages/HomeComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

class App extends Component {
  render() {
    return (
      
        <div>
        <Header />
        <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/setup">
                <SetUp />
              </Route>
              <Route path="/options">
                <Options/>
              </Route>
              <Route path="/input">
                <InputDecision />
              </Route>
              <Route path="/results">
                <Results />
              </Route>
            </Switch>
          </BrowserRouter>
          <Footer />
        </div>
    );
  }
  
}

export default App;
