import { Products } from '../JSON/products';
import { Col, Row } from "react-bootstrap";
import ProCard from './ProCard';

const ProCategory = (props) => {
    const {id, name} = props.cate
    return (
        <div className="pro-cate">
            <div className="cate-title">
                <a href="/" className="btn btn-primary float-end">See More</a>
                <h1>{name}</h1>
                <hr/>
            </div>
            <Row>
                {
                    Products.filter(p => p.category === id).map(p => (
                        <Col lg={3} md={4} key={p.id}>
                            <ProCard products={p}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default ProCategory;