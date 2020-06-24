import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Wrap from './components/Wrap'
import CountryList from './components/CountryList';
import CountrySelected from './components/CountrySelected';
function App() {
  return (

      <div className="App">
        <Wrap>
          <Router>
            <Switch>
              <Route path="/country/:id" component={CountrySelected} />
              <Route path="/" component={CountryList}>
              </Route>
            </Switch>
          </Router>
        </Wrap>
      </div>
  );
}

export default App;
