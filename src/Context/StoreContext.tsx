import { createContext, useState } from "react"
import { food_list } from "../assets/frontend_assets/assets"

interface StoreContextType {
  food_list: typeof food_list;
  cartItems: { [key: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  setcartItems: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
}

interface FoodItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}
export const StoreContext=createContext<StoreContextType|null>(null)

const StoreContextProvider=({children}:{children:React.ReactNode})=>{

    const [cartItems, setcartItems] = useState<{[key:number]:number}>({})

    const addToCart=(itemId:number)=>{
        if(!cartItems[itemId]){
            setcartItems((prev)=>({...prev,[itemId]:1}))
        }else{
            setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart=(itemId:number)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount=():number=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                 const itemInfo:FoodItem|undefined=food_list.find((product)=>product._id===item)
                 totalAmount+=(itemInfo?.price??0)*cartItems[item];
            }
           
        }
        return totalAmount;
    }

   
    const contextValue:StoreContextType={
        food_list,
        cartItems, 
        setcartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount


    }
    return(
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}
export  default StoreContextProvider