import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

interface category_prop{
    category:string,
    setcategory:React.Dispatch<React.SetStateAction<string>>
}
const ExploreMenu = ({category, setcategory}:category_prop) => {
  return (
    <div className='explore-menu' id="expore-menu">
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>
            Choose from a diverse menu feacturing a delectable array
             of Dishes. Our mission is to satisy your craving and elevate your dining expirience, one delicious meal at a time.
        </p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div key={index} className='explore-menu-list-item' onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>

  )
}

export default ExploreMenu