import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from './components/container/Home';
import Signup from './components/container/Signup';
import Login from './components/container/Login';
import Cart from './components/cart/Cart';
import PageFof from './components/PageFof';
import UserProfile from './components/UserProfile';
import Addproduct from './components/Addproducts';
import Allproductpage from './components/Products/Allproducts/Allproductpage'
import Specificproductpage from './components/Products/Productslider/Specificproductpage';
import 'bootstrap/dist/css/bootstrap.css';
import ContactPage from './components/contactPage/ContactPage'

function App() {
 

  return (   
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/userprofile' element={<UserProfile/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path="/sellproduct" element={<Addproduct></Addproduct>} />
      <Route exact path="/product-type/mobile" element={<Allproductpage type={'Mobile'} />} />
        <Route exact path="/product-type/laptop" element={<Allproductpage type={'Laptop'} />} />
        <Route exact path="/product-type/camera" element={<Allproductpage type={'Camera'} />} />
        <Route exact path="/product-type/accessories" element={<Allproductpage type={'accessories'} />} />
        <Route exact path="/cartdata" element={<Cart />} />
        
        <Route exact path="/product/:type/:id" element={<Specificproductpage />} />

<Route exact path='*' element={<PageFof/>}/>
<Route exact path='/contactUs' element={<ContactPage/>}/>
    </Routes>
    </BrowserRouter>

        </>
  )
}

export default App
