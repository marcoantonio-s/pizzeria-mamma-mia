import { useState } from 'react'
import { useContext } from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import Profile from './components/Profile'
import { GlobalContext } from './contexts/GlobalContext'

function App() {
  const { user } = useContext(GlobalContext)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={user? <Navigate to="/"/> : <Register/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pizza/:id' element={<Pizza/>}/>
        <Route path='/profile' element={user? <Profile/> : <Navigate to={"/login"}/> }/>
        <Route path='/404' element={<NotFound/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App