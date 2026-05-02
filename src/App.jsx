import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    {/* <Home/> */}
    {/* <Register/> */}
    {/* <Login/> */}
    <Cart/> 
    <Footer/>
    </>
  )
}

export default App