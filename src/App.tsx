
import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
    <div className='app'>

    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/placeorder' element={<Placeorder/>}/>

     </Routes>

    </div>
    <Footer/>
    </>
  )
}

export default App
