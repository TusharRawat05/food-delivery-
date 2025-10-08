
import { assets } from '../../assets/frontend_assets/assets'
import './Footer.css'
const Footer = () => {
  return (
  <div className="footer" id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi hic ipsa possimus quam perspiciatis dolorem consectetur sapiente dolorum nesciunt commodi. Iste voluptate quidem laudantium odit consequuntur dolorem deserunt placeat nihil.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
                <li>+1-211-212-2121</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
    </div>
    <hr />
    <p className='footer-copyright'>Copyright 2025 Tomato.com @All Right Reserved</p>
  </div>
  )
}

export default Footer