import { Products } from '../JSON/products';
import { Col, Row } from "react-bootstrap";
import ProCard from './ProCard';

const ProCategory = (props) => {
    return (
        <div className="pro-cate">
            <div className="cate-title">
                <a href="/" className="btn btn-primary float-end">See More</a>
                <h1>{props.name}</h1>
                <hr/>
            </div>
            <Row>
                {
                    Products.filter(p => p.category === props.id).map(p => (
                        <Col lg={3} md={4} key={p.id}>
                            <ProCard description={p.description} title={p.title} price={p.price} image={p.image}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default ProCategory;