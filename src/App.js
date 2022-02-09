import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Basket from './pages/Basket';
import OneProduct from './pages/OneProduct';
import Footer from './components/Footer';
import Returns from './pages/Returns';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/basket/:id?' component={Basket}/>
          <Route path='/products' component={Products} />
          <Route path='/oneproduct' component={OneProduct}/>
          <Route path='/sign-up' component={SignUp} />
          <Route path='/returns' component={Returns} />
        </Switch>
        < Footer />
      </Router>
    </>
  );
}

export default App;
