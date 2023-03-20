import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";

const Searchbar = (props) => {
    return (
        <>
            <div className={props.active ? "search-overlay active" : "search-overlay"}></div>
            <div className={props.active ? "search-bar active" : "search-bar"}>
                <div className="search-bar-x" onClick={()=> props.click()}><XLg/></div>
                <Row className="g-2 search-bar-setting">
                    <Col md={10}>
                        <FloatingLabel controlId="floatingInputGrid" label="Food Search">
                            <Form.Control type="search" placeholder="Food Search" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <Button variant="primary" style={{width:"100%", height:"100%"}}>Search</Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Searchbar;