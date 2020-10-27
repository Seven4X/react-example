import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import List from './render/List';
import FlexDemo from './flex/index'

function App() {
  return (
    <Router>
      <div>
         
        <Link to="/">Home</Link>    <Link to="/render">重绘测试</Link>   <Link to="/flex">flex</Link>
            
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/render">
            <List />
          </Route>
          <Route path="/flex">
            <FlexDemo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}

export default App;
