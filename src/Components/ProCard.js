import { useState } from "react";
import { Button } from "react-bootstrap";
import { Dash, Plus } from "react-bootstrap-icons";

const ProCard = (props) => {
    const [qty, setQty] = useState(1)
    const { image, title, description, price } = props.products
    const qtyHandle = (param) => {
        setQty(qty + param)
    }
    return (
        <div className="pro-card">
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className="body">
                <div className="content">
                    <h2>{title}</h2>
                    <p className="for-all">{description.slice(0, 65)} ...</p>
                    <p className="for-mobile">{description.slice(0, 20)} ...</p>
                </div>
                <div className="price">
                    <h5>Rs. {price}</h5>
                    <div className="qty">
                        <Dash onClick={() => qty > 1 ? qtyHandle(-1) : ''} />
                        <h6>{qty}</h6>
                        <Plus onClick={() => qtyHandle(1)} />
                    </div>
                </div>
                <Button style={{ width: '100%' }}>Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProCard