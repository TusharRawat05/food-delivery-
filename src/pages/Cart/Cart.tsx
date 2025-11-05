
import { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router'
const Cart = () => {

  const store=useContext(StoreContext)
  if(!store) return null
  const{cartItems,food_list,removeFromCart,getTotalCartAmount}=store
  const navigate=useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item)=>{
          if(cartItems[Number(item._id)]>0)
          {
            return(
              <div>
                <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[Number(item._id)]}</p>
                <p>${item.price*cartItems[Number(item._id)]}</p>
                <p className='cross' onClick={()=>removeFromCart(Number(item._id))}>x</p>
                </div>
                <hr />

              </div>
              
            )
          }
        })}
      </div>
      <div className="cart-bottom">
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
          <button onClick={()=>navigate('/order')}>Proceed to checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart