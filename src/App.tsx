
import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'

function App() {
  const [showLogin, setshowLogin] = useState<boolean>(false)


  return (
    <>
    {showLogin? <LoginPopup setshowLogin={setshowLogin}/>:<></>}
    <div className='app'>

    <Navbar setshowLogin={setshowLogin}/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<Placeorder/>}/>

     </Routes>

    </div>
    <Footer/>
    </>
  )
}

export default App
