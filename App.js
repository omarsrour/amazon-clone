import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from './ProductDetail';
import Checkout from './Checkout';
import Shop from './Shop';
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "swiper/css";
import Header from './Navbar';









const App = () => {



  return (
    <div>


<BrowserRouter>
<Header/>
<Routes>
<Route path='/'  element={<Home/>}/>
<Route path="/Shop/:categoryy" element={<Shop/>}/>
<Route path='Checkout'  element={<Checkout/>}/>
<Route path='ProductDetail'  element={<ProductDetail/>}/>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App
