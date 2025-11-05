import { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import Fooditem from '../FoodItem/Fooditem'
interface itemtype{
    _id:string,
    name:string,
    price:number,
    description:string
    image:string,
    category:string

}
type FoodDisplayProps = {
  category: string;
};
const FoodDisplay = ({category}:FoodDisplayProps) => {
  const store = useContext(StoreContext);
  if (!store) return null;
   const { food_list } = store;

   
  return (
    <div className='food-display' id='Food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item:itemtype ,index:number)=>{
                if(category==="All" || category===item.category){
                      return(
                    
                        <Fooditem key={index} id={Number(item._id)} name={item.name} description={item.description} price={item.price} image={item.image}/>

                )
                }
              
            })}
        </div>
    </div>
  )
}

export default FoodDisplay