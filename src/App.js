import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';


function App() {
  return (
    <div>
    <Header></Header>
      <Router>
        <Routes>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/review" element={<Review/>}></Route>
          <Route path="/inventory" element={<Review/>}></Route>
          <Route exact path="/" element={<Shop/>}></Route>
          <Route exact path="/product/:productKey" element={<ProductDetail/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
