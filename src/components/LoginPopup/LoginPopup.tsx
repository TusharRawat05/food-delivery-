import { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/frontend_assets/assets'

const LoginPopup = ({setshowLogin}:boolean) => {
    const [current, setcurrent] = useState<string>("Sign up")
  return (
    <div className="login-popup">
        <form className='login-popup-container' action="">
            <div className="login-popup-title">
                <h2>{current}</h2>
                <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {current==="Login"? <></>:<input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Your password' required />
            </div>
            <button>
                {current==="Sign up" ? "Create account": "Login"}
            </button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing ,i agreee to the terms of use & privacy policy</p>
            </div>
            {
                current==="Login"?
                    <p>Create a new account? <span onClick={()=>setcurrent("Sign up")}>Click here</span></p>
                    :
                    <p>Already have an account? <span onClick={()=>setcurrent("Login")}>Login here</span></p>

            } 
        </form>
    </div>
  )
}

export default LoginPopup
           