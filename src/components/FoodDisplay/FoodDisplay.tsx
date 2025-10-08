import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import Fooditem from '../FoodItem/fooditem'
interface itemtype{
    id:number,
    name:string,
    price:number,
    description:string
    image:string

}
const FoodDisplay = ({category}:string) => {

    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='Food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item:itemtype ,index:number)=>{
                if(category==="All" || category===item.category){
                      return(
                    
                        <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>

                )
                }
              
            })}
        </div>
    </div>
  )
}

export default FoodDisplay