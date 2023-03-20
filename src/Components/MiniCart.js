import { Button } from 'react-bootstrap';
import { XLg } from 'react-bootstrap-icons';

const MiniCart = (props) => {
    return(
        <>
            <div className={props.active ? 'mini-cart-overlay active' : 'mini-cart-overlay'} onClick={() => props.click()}></div>
            <div className={props.active ? 'mini-cart active' : 'mini-cart' }>
                <div className="mini-cart-x" onClick={() => props.click()}><XLg/></div>
                <h2 className="mini-cart-title">Cart</h2>
                <div className="view-cart-btn">
                    <hr />
                    <Button>View Cart</Button>
                    <Button variant='danger'>Checkout</Button>
                </div>
            </div>
        </>
    )
}

export default MiniCart;