import React, { Component } from 'react';
import './App.css';
import Header from './components/HeaderComponent'
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/HomeComponent';
import SetUp from './pages/SetUpComponent';
import Options from './pages/OptionsComponent';
import InputDecision from './pages/InputDecisionPageComponent';
import Results from './pages/HomeComponent'


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
        </div>
    );
  }
  
}

export default App;
