import {useState, useEffect, useRef} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.scss';
import Sticky from 'react-sticky-el';
import {Link, Button} from 'react-scroll';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useLocation} from 'react-router-dom';

interface IHeader {
    setHeaderHeight: (arg0: number) => void;
}

const Header = ({setHeaderHeight}: IHeader) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Стан для відкритого меню
    const [isSticky, setIsSticky] = useState(true); // Стан для застійного підвищення заголовка]

    const location = useLocation();

    // Перевірка поточного шляху
    const isMainPage = location.pathname === '/';
    console.log(isMainPage ? "isMainPage" : "isMainPage!!!");

    useEffect(() => {
        const isMainPage = location.pathname === '/';
        if (isMainPage) {
            setIsSticky(true)
        } else {
            setIsSticky(false)

        }

    }, [location])

    useEffect(() => {
        if (headerRef.current && headerRef.current.offsetHeight) {
            console.log('Height of header:', headerRef.current.offsetHeight);
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, []);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Змінюємо стан на протилежний
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false); // Закриваємо меню
    };

    return (
        <div className={`stickyHeaderContainer ${!isSticky ? "header_static_state" : ""}`} ref={headerRef}>
            <Sticky disabled={!isSticky} stickyClassName={'header_sticky_state'} boundaryElement=".block" hideOnBoundaryHit={false}>
                <Navbar expand="lg" className={`header_navbar`}>
                    <Container fluid={"xl"} className={"d-flex flex-wrap"}>
                        <Navbar.Brand className={"navbar-logo text-white"} href="#home">TIC.TEREBOVLIA</Navbar.Brand>
                        <Navbar.Toggle
                            className={'border-0 p-0 rounded-0 shadow-none outline-0 text-white'}
                            aria-controls="offcanvasNavbar"
                            onClick={handleToggleMenu} // Викликаємо функцію відкривання/закривання меню
                        >
                            <i className="bi bi-list fs-1 text-white"></i>
                        </Navbar.Toggle>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar`}
                            aria-labelledby={`offcanvasNavbar`}
                            placement="end"
                            show={isMenuOpen} // Контролюємо відкриття меню через стан
                            onHide={handleCloseMenu} // Функція для закриття меню
                        >
                            <Offcanvas.Header closeButton closeVariant={'white'}>
                                <Offcanvas.Title id={`offcanvasNavbar`}>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className={"ps-4 pe-4 pe-lg-0 ps-lg-0"}>
                                <Nav
                                    className="justify-content-end flex-grow-1 me-auto header_nav_menu align-items-lg-center">
                                    <Nav.Link as={Link} to="about" smooth={true} duration={500}
                                              onClick={handleCloseMenu}>ПРО НАС
                                        <span className={"hover_bl"}></span>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="services" smooth={true} duration={500}
                                              onClick={handleCloseMenu}>ПОСЛУГИ
                                        <span className={"hover_bl"}></span>
                                    </Nav.Link>
                                    <Button to="contacts" smooth={true} duration={500}
                                            className={" btn btn-lg btn-outline-secondary text-white"}
                                            onClick={handleCloseMenu}>КОНТАКТИ</Button>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </Sticky>
        </div>
    );
};

export default Header;
