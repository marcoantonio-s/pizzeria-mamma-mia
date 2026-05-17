import { useState } from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pizza/p001' element={<Pizza/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/404' element={<NotFound/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App


    // <NavBar/>
    // {/* <Home/> */}
    // {/* <Register/> */}
    // {/* <Login/> */}
    // <Pizza/>
    // {/* <Cart/> */}
    // <Footer/>