import {useState, useEffect, useRef} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../scss/App.scss';
import Sticky from 'react-sticky-el';
import {scroller} from 'react-scroll';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useLocation, Link as RouterLink, useNavigate} from 'react-router-dom';
import {Button} from "react-bootstrap";

interface IHeader {
    setHeaderHeight: (arg0: number) => void;
}

const Header = ({setHeaderHeight}: IHeader) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Стан для відкритого меню
    const [isSticky, setIsSticky] = useState(true); // Стан для застійного підвищення заголовка]
    const location = useLocation();
    const navigation = useNavigate()
    const [targetId, setTargetId] = useState<string|null>(null); // зберігаємо ID блоку для скролу


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

    const handleClick = (id:string) => {
        // Встановлюємо цільовий блок
        setTargetId(id);
        // Переходимо на головну сторінку
        if (!isMainPage) {
            navigation('/');
        }
        handleCloseMenu();
    };

    // Використовуємо useEffect для перевірки, коли перехід вже відбувся
    useEffect(() => {
        if (location.pathname === '/' && targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                scroller.scrollTo(targetId, {
                    behavior: "smooth",
                    block: "start"
                })
            }
            // Очищуємо targetId після скролу
            setTargetId(null);
        }
    }, [location, targetId]);

    return (
        <div className={`stickyHeaderContainer ${!isSticky ? "header_static_state" : ""}`} ref={headerRef}>
            <Sticky disabled={!isSticky} stickyClassName={'header_sticky_state'} boundaryElement=".block"
                    hideOnBoundaryHit={false}>
                <Navbar expand="lg" className={`header_navbar`}>
                    <Container fluid={"lg"} className={"d-flex flex-wrap"}>
                        <Navbar.Brand className={"navbar-logo text-white"}>
                            <RouterLink to={'/'}>TIC.TEREBOVLIA</RouterLink>
                        </Navbar.Brand>
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
                                    <Nav.Link
                                        onClick={() => handleClick('about')}>ПРО НАС
                                        <span className={"hover_bl"}></span>
                                    </Nav.Link>

                                    <Nav.Link
                                        onClick={() => handleClick('services')}>ПОСЛУГИ
                                        <span className={"hover_bl"}></span>
                                    </Nav.Link>

                                    <Button size={"lg"} variant={"outline-secondary"}
                                            className={" text-white"}
                                            onClick={() => handleClick('contacts')}>КОНТАКТИ</Button>

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
