import PageSectionWrapper from "../PageSectionWrapper/PageSectionWrapper";
import {Col, Nav, Navbar, Row, Stack} from "react-bootstrap";
import { Link as RouterLink} from 'react-router-dom';

const Footer = () => {
    return (

        <footer>
            <PageSectionWrapper variant={"dark"} id={"footer"}>
                <Row className={"align-items-center"}>
                    <Col xs={12} md={10}>
                        <Navbar className={"pb-0 pt-0"}>
                            <Navbar.Brand href="#home"><RouterLink to={'/'}>tic.terebovlia</RouterLink></Navbar.Brand>
                        </Navbar>

                        <Navbar className={"footer_navbar pb-0 pt-0 "}>
                            <Nav className="me-auto mb-2 mb-lg-0 flex-wrap flex-lg-nowrap">
                                <Nav.Link href="#home">НАШІ ПОСЛУГИ</Nav.Link>
                                <Nav.Link href="#features">Schedule appointment</Nav.Link>
                                <Nav.Link href="#pricing">Complete intake</Nav.Link>
                                <Nav.Link href="#pricing">Contact</Nav.Link>
                            </Nav>
                        </Navbar>


                    </Col>
                    <Col xs={12} md={2} className={"sb-footer__social justify-content-lg-end d-flex"}>

                        <Stack direction="horizontal" gap={3} className={"social-icons"}>
                            <a
                                href="https://www.facebook.com/terebovlia.tic" rel="noreferrer"
                                target="_blank">
                                <i className={"bi bi-facebook"}></i>
                            </a>
                            <a
                                aria-label="Instagram" href="https://www.instagram.com/tourcenter.terebovlia"
                                rel="noreferrer" target="_blank">
                                <i className={"bi bi-instagram"}></i>
                            </a>
                        </Stack>

                    </Col>
                </Row>
            </PageSectionWrapper>
        </footer>
    )
        ;
};

export default Footer;
