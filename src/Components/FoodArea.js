import ProCategory from "./ProCategory";
import { Category } from '../JSON/products'

const FoodArea = () => {
    return (
        <div className="food-area">
            {
            Category.map(c => (
                <ProCategory key={c.id} cate={c}/>
                ))
            }
            
        </div>
    )
}

export default FoodArea;