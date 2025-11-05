
import { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../Context/StoreContext'

const Placeorder = () => {
  const store=useContext(StoreContext)
  if(!store) return null;
  const {getTotalCartAmount}=store
  return (
    <form className='place-order' action="submit">
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='street' />
        <div className="multi-fields">
          <input type="text" placeholder='zipcode' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
          <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-Total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-Total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?"0":"2"}</p>
            </div>
            <hr />
            <div className="cart-Total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?"0": getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button>Proceed to Payment</button>
        </div>
      </div>

    </form>
  )
}

export default Placeorder