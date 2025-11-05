
import { useContext} from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './Fooditem.css'
import { StoreContext } from '../../Context/StoreContext'

interface foodProp{
    id:number,
    name:string,
    price:number,
    description:string
    image:string
}

const Fooditem = ({id,name,price, description,image}:foodProp) => {

    const store=useContext(StoreContext)
    if(!store) return null


    const{cartItems,removeFromCart,addToCart}=store;
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img  className='food-item-image' src={image} alt="" />
            {
                !cartItems[id] ?
                <img className='add' src={assets.add_icon_white} alt="" onClick={()=>addToCart(id)} />
                :
                <div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>

            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
            </div>   
        </div>
        <p className="food-item-desc">
            {description}
        </p>
        <p className="food-item-price">
            ${price}
        </p>
    </div>
  )
}

export default Fooditem
