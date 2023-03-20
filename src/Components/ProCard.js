import { useState } from "react";
import { Button } from "react-bootstrap";
import { Dash, Plus } from "react-bootstrap-icons";

const ProCard = (props) => {
    const [qty, setQty] = useState(1)

    const qtyHandle = (param) => {
        setQty(qty + param)
    }
    return (
        <div className="pro-card">
            <div className="image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="content">
                <h2>{props.title}</h2>
                <p>{props.description.slice(0, 65)} ...</p>
            </div>
            <div className="price">
                <h5>Rs. {props.price}</h5>
                <div className="qty">
                    <Dash onClick={() => qty > 1 ? qtyHandle(-1) : ''} />
                    <h6>{qty}</h6>
                    <Plus onClick={() => qtyHandle(1)} />
                </div>
            </div>
            <Button style={{ width: '100%' }}>Add to Cart</Button>
        </div>
    )
}

export default ProCard