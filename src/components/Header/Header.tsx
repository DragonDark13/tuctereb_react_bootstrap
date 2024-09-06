import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.scss';
import {useEffect, useRef} from "react";
import Sticky from 'react-sticky-el';
import {Link} from 'react-scroll';  // Import Link from react-scroll
import Offcanvas from 'react-bootstrap/Offcanvas';


interface IHeader {
    setHeaderHeight: (arg0: number) => void;
}

const Header = ({setHeaderHeight}: IHeader) => {

    const headerRef = useRef<HTMLDivElement>(null); // Задаємо тип рефу

    useEffect(() => {
        if (headerRef.current && headerRef.current.offsetHeight) {
            console.log('Height of header:', headerRef.current.offsetHeight);
            setHeaderHeight(headerRef.current.offsetHeight)
        }
    }, []);

    return (
        <div className="stickyHeaderContainer" ref={headerRef}>
            <Sticky
                stickyClassName={'header_sticky_state'}
                    boundaryElement=".block"
                    hideOnBoundaryHit={false}>
                <Navbar expand="lg"
                        className={`pt-3 pb-3 header_navbar `}>
                    <Container className={"d-flex flex-wrap"}>
                        <Navbar.Brand className={"navbar-logo text-white"} href="#home">TIC.TEREBOVLIA</Navbar.Brand>
                        <div>
                            <Navbar.Toggle className={'border-0 p-0 rounded-0'} aria-controls="offcanvasNavbar">
                                <i className="bi bi-list fs-1"></i>
                            </Navbar.Toggle>
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar`}
                                aria-labelledby={`offcanvasNavbar`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbar`}>
                                        Offcanvas
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3 me-auto header_nav_menu">
                                        <Nav.Link as={Link} to="about" smooth={true} duration={500}>ПРО НАС
                                            <span className={"hover_bl"}></span>
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="services" smooth={true} duration={500}>ПОСЛУГИ
                                            <span className={"hover_bl"}></span>
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="contacts" smooth={true} duration={500}
                                                className={" btn btn-outline-secondary border-2 rounded-0"}
                                                >КОНТАКТИ</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                            {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                            {/*   basic-navbar-nav <Nav className="me-auto header_nav_menu">*/}
                            {/*        <Nav.Link as={Link} to="about" smooth={true} duration={500}>ПРО НАС*/}
                            {/*            <span className={"hover_bl"}></span>*/}
                            {/*        </Nav.Link>*/}
                            {/*        <Nav.Link as={Link} to="services" smooth={true} duration={500}>ПОСЛУГИ*/}
                            {/*            <span className={"hover_bl"}></span>*/}
                            {/*        </Nav.Link>*/}
                            {/*        <Button as={Link} to="contacts" smooth={true} duration={500}*/}
                            {/*                className={"border-2 rounded-0"}*/}
                            {/*                variant={"outline-secondary"}>КОНТАКТИ</Button>*/}
                            {/*    </Nav>*/}
                            {/*</Navbar.Collapse>*/}
                        </div>
                    </Container>
                </Navbar>
            </Sticky>
        </div>
    );
};

export default Header;
