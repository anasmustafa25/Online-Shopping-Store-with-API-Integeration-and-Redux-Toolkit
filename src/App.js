import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import { BrowserRouter, Routes, Route,Router } from 'react-router-dom';
import './App.css'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar'
function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/Navbar' element={<Navbar/>}/>
    </Routes>
   </Router>
  )
}

export default App
