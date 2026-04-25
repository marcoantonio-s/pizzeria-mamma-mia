import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    {/* <Home/> */}
    {/* <Register/> */}
    <Login/>
    <Footer/>
    </>
  )
}

export default App