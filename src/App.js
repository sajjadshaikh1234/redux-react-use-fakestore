import logo from './logo.svg';
import './App.css';
import React  from 'react';
import Headers from './component/Headers';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import ProductListing from './component/ProductListing';
import ProductDetail from './component/ProductDetail';
import Addcart from './component/Addcart'
// import Header from './component/Header';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
      <Headers />
        <Routes>
          
          <Route exact path='/' element={<ProductListing />} />
          <Route exact path="/product/:productId" element={<ProductDetail />} />
          <Route exact path="/add" element={<Addcart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
