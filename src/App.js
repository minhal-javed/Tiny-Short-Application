import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Home} from './Components/Home'
import { Service } from "./Components/Service";
import { About } from "./Components/About";
import {Navbar} from './Components/Navbar';
import {Switch,Route, Redirect} from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route  exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Redirect to=''/>
      </Switch>
    </div>
  );
}

export default App;
