import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import EvaluationForm from './pages/EvaluationForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route path="/product-details" component={ ProductDetails } />
        <Route path="/evaluation-form" component={ EvaluationForm } />
        <Route path="/checkout" component={ Checkout } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
