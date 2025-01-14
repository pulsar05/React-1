import React from 'react';
import { Route, Routes} from "react-router-dom";
import Header from '../components/Header';
import Cart from "./Cart";
import Dashboard from './Dashboard';
import Product from './Product';
import Checkout from './Checkout';
import Success from './Success';

export default function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <Dashboard />} />
        <Route path="/Product/:id" element ={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Checkout/">
        <Route path=" " element = {<Checkout />} />
        <Route path=":id" element = {<Checkout />} />
        </Route>
        <Route path="/success" element = {<Success />} />
      </Routes>
    </div>
  )
}