import { Col, Container, Row, FloatingLabel, Form, Button } from "react-bootstrap";
import { Facebook, Instagram, Linkedin, Youtube } from "react-bootstrap-icons";
import FooterTop from "./FooterTop";

const Footer = () => {
    return (
        <div className="footer">
            <FooterTop/>
            <div className="main-footer">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="about-col">
                                <a href="/">
                                    <img src="/images/love-logo.png" alt="Love Food Court" className="footer-logo"/>
                                </a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa accusamus atque inventore accusantium molestias nostrum? Architecto sunt quam reiciendis unde beatae eligendi, libero dignissimos sed, est aliquam cupiditate quis.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="footer-menu">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/">Payment Method</a></li>
                                    <li><a href="/">Delivery Policy</a></li>
                                    <li><a href="/">Contact Us</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="footer-news-letter">
                                <h2>Newsletter</h2>
                                <Row className="g-2">
                                    <Col xs={9}>
                                        <FloatingLabel controlId="floatingInputGrid" label="Enter Email">
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col>
                                        <Button style={{'height':'100%', 'width':'100%'}}>Sign Up</Button>
                                    </Col>
                                </Row>
                                <Row className="app-downloader">
                                    <Col xs={6}>
                                        <a href="/">
                                            <img src="/images/Android-Store-logos.png" alt="Android App" />
                                        </a>
                                    </Col>
                                    <Col xs={6}>
                                        <a href="/">
                                            <img src="/images/App-Store-logos.png" alt="Apple App" />
                                        </a>
                                    </Col>
                                </Row>
                                <div className="footer-social-icon">
                                    <ul>
                                        <li><a href="/"><Facebook /></a></li>
                                        <li><a href="/"><Instagram /></a></li>
                                        <li><a href="/"><Youtube /></a></li>
                                        <li><a href="/"><Linkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr />
                <Container>
                    <div className="copy-right">Copyright  © 2023</div>
                </Container>
            </div>
        </div>
    )
}

export default Footer;