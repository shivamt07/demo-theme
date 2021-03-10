import logo from './logo.svg';
import { React, Component } from 'react';
// import './App.css';
import MiniDrawer from './Component/Nav'
import TopGraph from './Component/TopGraph'
import AreaGraph from './Component/AreaGraph'
import { Redirect, Switch } from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from '@testing-library/react';

class App extends Component {
  render() {
    // function App() {
    return (
      <div className="App">
        <Router >
          <Switch>
            <Route exact path='/' component={MiniDrawer}>
              <MiniDrawer />
            </Route>
            <Route path='/graph' component={TopGraph} />
            <Route path='/AreaGraph' component={AreaGraph} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
