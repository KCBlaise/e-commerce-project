import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Accessories from './pages/Accessories';
import AllPronouns from './pages/AllPronouns';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Kids from './pages/Kids';
import LandingMain from "./pages/LandingMain";
import Mens from './pages/Mens';
import Products from './pages/Products';
import Search from './pages/Search';
import Teens from './pages/Teens';
import Womens from './pages/Womens';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingMain />} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/men' element={<Mens/>} />
        <Route path='/women' element={<Womens/>} />
        <Route path='/everyone' element={<AllPronouns/>} />
        <Route path='/teens' element={<Teens/>} />
        <Route path='/kids' element={<Kids/>} />
        <Route path='/accessories' element={<Accessories/>} />
      </Routes>
    </Layout>
  );
}

export default App;
