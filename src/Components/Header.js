import { useCallback, useState } from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Cart, Search } from 'react-bootstrap-icons';
import MiniCart from './MiniCart';
import Searchbar from './Searchbar';

function Header() {
    const theme = 'dark';
    const [miniCart, setMiniCart] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    
    const closeMiniCart = useCallback(()=>{
        setTimeout(()=>{
            document.getElementsByClassName('mini-cart')[0].style.display = ''
        }, 500)
        setMiniCart(false)
    }, [])

    const closeSearchBar = useCallback(() => {
        setSearchBar(false)
    }, [])

    return (
        <Navbar bg={theme} variant={theme} expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <img src="/images/love-logo.png" alt='Love Food Court' className='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                <Navbar.Offcanvas 
                    id="offcanvasNavbar-expand-lg"
                    aria-labelledby="offcanvasNavbarLabel-expand-lg"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                            <img src='/images/love-logo-colored.png' alt='Love Food Court' className='canvas-logo'/>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav
                            className="justify-content-start flex-grow-1 pe-3"
                            style={{ maxHeight: '100px' }}
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#menu">Menu</Nav.Link>
                            <NavDropdown title="Brands" id="offcanvasNavbarDropdown-expand-lg" variant={theme} >
                                <NavDropdown.Item href="#kfc">
                                    KFC
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#mcdonalds">
                                    McDonald's
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#about-us">About Us</Nav.Link>
                            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                <div className='navbar-left'>
                    <div className='custom-btn' onClick={() => { 
                        setTimeout(() => {
                            setMiniCart(true)
                        }, 200)
                        document.getElementsByClassName('mini-cart')[0].style.display = 'block'
                        }}><Cart /> <Badge>0</Badge> </div>
                    <div className='custom-btn' onClick={() => { setSearchBar(true) }}><Search /></div>
                </div>
            </Container>
            <MiniCart active={miniCart} click={closeMiniCart}/>
            <Searchbar active={searchBar} click={closeSearchBar}/>
        </Navbar>
    );
}

export default Header;