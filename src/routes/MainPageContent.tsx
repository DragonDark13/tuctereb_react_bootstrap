import React from 'react';
import city from "../assets/img/city.jpeg";
import {Col, Container, Row} from "react-bootstrap";
import PageSectionWrapper from "../components/PageSectionWrapper/PageSectionWrapper";
import MyCardComponent from "../components/MyCardComponent/MyCardComponent";
import MapEmbed from "../components/MapEmbed";
import AboutBlock from "../components/AboutBlock/AboutBlock";
import {Button} from "react-scroll";


interface IMainPageContent {
    headerHeight: number
}

const MainPageContent = ({headerHeight}: IMainPageContent) => {

    const ourServicesArray = [
        {
            title: "Заклади тимчасового розміщення",
            text: "Engage in hands-on cultural experiences that showcase local traditions.",
            imageSrc: city,
        }, {
            title: "Ресторани, кафе та бари",
            text: "Discover the breathtaking landscapes surrounding Ternopil on our nature excursions.",
            imageSrc: city,
        }, {
            title: "Цікаві місця",
            text: "Відкрийте для себе багату історію та культуру Теребовлі та громади.",
            imageSrc: city,
        }
    ]

    const ourProductsArray = [
        {
            title: "Екскурсії містом",
            text: "This section is where you write a short description of your product.",
            imageSrc: city,
        }, {
            title: "Велоекскурсії та оренда велосипедів",
            text: "This section is where you write a short description of your product.",
            imageSrc: city,
        }, {
            title: "Сувенірна продукція",
            text: "This section is where you write a short description of your product.",
            imageSrc: city,
        }
    ]
    return (
        <React.Fragment>
            <section style={{paddingTop: headerHeight}} className="bg_section sb-section-opt-dark">
                <div className="image_block"></div>
                <Container className={"sb-container align-items-start justify-content-center flex-column"}>
                    <Row
                        className={"pt-5 align-items-center text-center sb-row-opt-padding-bottom-large sb-row-opt-padding-top-large justify-content-center"}>
                        <Col xs={12} md={8} lg={7}>
                            <h1 data-aos="fade-up" className="bg_section_main_title fs-1">TEREBOVLIA TOURIST INFORMATION
                                CENTER</h1>
                            <h4 data-aos="fade-up" className="bg_section_small_title fs-4">
                                ТЕРЕБОВЛЯНСЬКИЙ ТУРИСТИЧНИЙ ІНФОРМАЦІЙНИЙ ЦЕНТР
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </section>
            <AboutBlock/>

            <PageSectionWrapper id={"services"}>
                <Row>
                    <Col xs={12} md={8} lg={8} className={"sb-items-grid__content"}>
                        <h6 data-aos="slide-up" className="sb-text-image__content-title">Що відвідати, де перекусити та
                            де зупинитись</h6>
                        <p data-aos="slide-up" className="fs-2">Індивідуальний досвід для кожного мандрівника</p>
                    </Col>
                </Row>
                <Row className={"our_services_list card_list"}>
                    {ourServicesArray.map(({title, text, imageSrc}, index) => (
                        <Col data-aos-delay={`${50 * index}`} data-aos="fade-up" className={"card_container"} key={index + title} xs={12} md={4}>
                            <MyCardComponent IsButton={true} typeView={2} text={text} title={title}
                                             imageSrc={imageSrc}/>
                        </Col>
                    ))}
                </Row>
            </PageSectionWrapper>

            <PageSectionWrapper id={"products-overview"}>
                <Row>
                    <Col xs={12} md={8} lg={8} className={"sb-items-grid__content"}>
                        <h6 data-aos="slide-up" className="sb-text-image__content-title">Наші послуги</h6>
                        <p data-aos="slide-up" className="fs-6 title_sub-title">Індивідуальний досвід для кожного
                            мандрівника</p>
                    </Col>
                </Row>
                <Row className={"our_services_list"}>
                    {ourProductsArray.map(({title, text, imageSrc}, index) => (
                        <Col data-aos-delay={`${50 * index}`} data-aos="fade-up" key={index + title} md={4}>
                            <MyCardComponent typeView={2} text={text} title={title}
                                             imageSrc={imageSrc}/>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col>
                        <Button data-aos="slide-up" to="contacts" smooth={true} duration={500}
                                className={"btn border-2 rounded-0 btn-lg btn-outline-secondary"}>
                            Зв'яжіться з нами
                        </Button>
                    </Col>
                </Row>
            </PageSectionWrapper>

            <PageSectionWrapper id={"contacts"}>
                <Row className={"gx-md-5"}>
                    <Col xs={12} md={6}>
                        <h6 data-aos="slide-up" className="sb-text-image__content-title">
                            Запитайте у нас
                        </h6>
                        <p data-aos="slide-up" className="fs-6 title_sub-title">
                            Ми працюємо щоб надати Вам максимум інформації про нашу громаду та створити відчуття
                            комфорту
                        </p>
                        <div data-aos="slide-up" className="contact-full__location">
                            <div>
                                <div className="contact-details__row contact-details__contact">
                                    <h6 className="contact-details__title fw-bold">Запитайте у нас</h6>
                                    <div className="contact-details__phone">
                                        <a href="tel:+380688180278" className="d-flex align-items-center">
                                            <i className="bi bi-telephone"></i>
                                            <span>+380 68 818 0278</span>
                                        </a>
                                    </div>
                                    <div className="contact-details__email">
                                        <a href="mailto:tic.terebovlia@gmail.com" className="d-flex align-items-center">
                                            <i className="bi bi-envelope"></i>
                                            <span>tic.terebovlia@gmail.com</span>
                                        </a>
                                    </div>
                                    <ul className="social-icons list-inline">
                                        <li className="list-inline-item">
                                            <a href="https://www.facebook.com/terebovlia.tic" target="_blank"
                                               rel="noreferrer">
                                                <i className="bi bi-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://www.instagram.com/tourcenter.terebovlia" target="_blank"
                                               rel="noreferrer">
                                                <i className="bi bi-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact-details__row contact-details__location">
                                    <h6 className="fw-bold">Location</h6>
                                    <p className="adr contact-details__address">
                                        <a href="https://www.google.com/maps/place/вул.+Шевченка,+8,+Теребовля"
                                           target="_blank" rel="noreferrer"
                                           className="d-flex align-items-center">
                                            <i className="bi bi-geo-alt-fill"></i>
                                            <span> вул. Шевченка, 8, Теребовля</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <MapEmbed latitude={49.2996228} longitude={25.6888259}/>
                    </Col>
                </Row>
            </PageSectionWrapper>
        </React.Fragment>
    );
};

export default MainPageContent;
