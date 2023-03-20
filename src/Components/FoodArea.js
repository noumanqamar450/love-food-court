import ProCategory from "./ProCategory";
import { Category } from '../JSON/products'

const FoodArea = () => {
    return (
        <div className="food-area">
            {
            Category.map(c => (
                <ProCategory key={c.id} name={c.name} id={c.id} />
                ))
            }
            
        </div>
    )
}

export default FoodArea;