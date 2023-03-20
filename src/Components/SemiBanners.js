import { Row, Col, Image } from "react-bootstrap";

const SemiBanners = () => {
    return (
        <div className="semi-banner">
            <Row>
                <Col md={6}>
                    <a href="/">
                        <div className="banner">
                            <Image 
                                src="/images/promo-1.png"
                                alt="Promo 1"
                                />
                        </div>
                    </a>
                </Col>
                <Col md={6}>
                    <a href="/">
                        <div className="banner">
                            <Image
                                src="/images/promo-2.jpg"
                                alt="Promo 2"
                            />
                        </div>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default SemiBanners;