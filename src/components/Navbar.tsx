
import { useContext, useState } from 'react'
import {assets} from '../assets/frontend_assets/assets.ts'
import './Navbar.css'
import { Link } from 'react-router'
import { StoreContext } from '../Context/StoreContext.tsx'

type NavbarProps = {
  setshowLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({setshowLogin}:NavbarProps) => {

  const [menu, setmenu] = useState<string>("home")
   const store = useContext(StoreContext);
  const getTotalCartAmount = store?.getTotalCartAmount ?? (() => 0);
  return (
    <div className="navbar ">
       <Link to='/'><img src={assets.logo} alt="" className='logo ' /></Link> 
        <ul className='navbar-menu '>
          <Link to='/'onClick={()=>setmenu("home")} className={menu==='home'?"active":""}>home</Link>
          <a href='#explore-menu' onClick={()=>setmenu("menu")} className={menu==='menu'?"active":""}>menu</a>
          <a href='#app-download' onClick={()=>setmenu("mobile-app")} className={menu==='mobile-app'?"active":""}>mobile-app</a>
          <a href='#footer' onClick={()=>setmenu("contact us")} className={menu==='contact us'?"active":""}>contact us</a>

        </ul> 
        <div className="navbar-right ">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0? "":"dot"}></div>
          </div>
          <button onClick={()=>setshowLogin(true)}>sign in</button>
        </div>
        
    </div>
  )
}

export default Navbar