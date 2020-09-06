import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Route Components/Home';
import About from './Components/Route Components/About';
import Contact from './Components/Route Components/Contact';
import Blog from './Components/Route Components/Blog';
import NotFound from './Components/Route Components/NotFound';
import User from './Components/User/User';
import CardCom from './Components/Route Components/CardiCom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/card-com' component={CardCom} />
          <Route path='/contact' component={Contact} />
          <Route path='/blog' component={Blog} />
          <Route path='/user/:UserID' component={User} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
