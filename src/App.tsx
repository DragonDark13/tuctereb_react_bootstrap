import Header from "./components/Header/Header";
import './App.scss';
import PageSectionWrapper from "./components/PageSectionWrapper/PageSectionWrapper";
import {Button, Col, Row} from "react-bootstrap";
import castle1 from './assets/img/castle1.png'
import city from './assets/img/city.jpeg'
import MyCardComponent from "./components/MyCardComponent/MyCardComponent";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./components/Footer/Footer";
import {useState} from "react";
import React from 'react'


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

const ourProdutsArray = [
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


function App() {
    const [headerHeight, setHeaderHeight] = useState(0); // State to store the height


    console.log(headerHeight);

    return (
        <React.Fragment>
            <Header setHeaderHeight={setHeaderHeight}/>
            <section style={{paddingTop: headerHeight}} className="bg_section sb-section-opt-dark">
                <div className="image_block"></div>
                <div className="container sb-container align-items-start justify-content-center flex-column">
                    <div
                        className="row pt-5 align-items-center text-center sb-row-opt-padding-bottom-large sb-row-opt-padding-top-large">
                        <div className="col-12">
                            <div className="row justify-content-center">
                                <div className="col-10">
                                    <h1 className="bg_section_main_title">TEREBOVLIA TOURIST INFORMATION CENTER</h1>
                                    <h4 className="bg_section_small_title">
                                        ТЕРЕБОВЛЯНСЬКИЙ ТУРИСТИЧНО ІНФОРМАЦІЙНИЙ ЦЕНТР
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PageSectionWrapper id={"about"}>
                <Row className={"align-items-center gx-5"}>
                    <Col lg={7}>
                        <h5 className="sb-text-image__content-title">ПРО НАС
                        </h5>
                        <div className="text_container fs-5">
                            <p></p>
                            <p>Туристично-інформаційний центр&nbsp;створювався&nbsp;з думкою&nbsp;про гостей&nbsp;нашого
                                міста&nbsp;для
                                того, щоб&nbsp;зробити їх перебування в&nbsp;громаді&nbsp;максимально комфортним
                                і&nbsp;цікавим.</p>
                            <p>Ми&nbsp;з радістю надамо&nbsp;вам необхідну інформацію&nbsp;про&nbsp;визначні
                                пам’ятки,&nbsp;інфраструктуру,&nbsp;культурні
                                та розважальні&nbsp;заклади,&nbsp;готельно-рекреаційну&nbsp;базу&nbsp;нашого
                                міста,&nbsp;заходи
                                та&nbsp;фестивалі, а&nbsp;також про багато іншого.</p>
                            <p>Туристично-інформаційний центр є міським комунальним підприємством і надає
                                послуги&nbsp;екскурсійного
                                обслуговування&nbsp;у супроводі гідів-екскурсоводів.</p>
                            <p>Основним завданням нашого центру є інформаційна підтримка та проведення екскурсій, тому
                                для нас
                                дуже важливо, щоб у Вас залишилися найкращі враження про нашу гостинну громаду.</p>
                        </div>
                        <Button variant="outline-secondary" size={"lg"} className={"border-2 rounded-0"}>Наші
                            контакти</Button>
                    </Col>
                    <Col lg={5}>
                        <img src={castle1} alt=""/>
                    </Col>
                </Row>
            </PageSectionWrapper>
            <PageSectionWrapper id={"services"}>
                <Row>
                    <Col xs={12} md={8} lg={8} className={"sb-items-grid__content"}>
                        <h5 className="sb-text-image__content-title">Що відвідати, де перекусити та де зупинитись</h5>
                        <p className="fs-2">Індивідуальний досвід для кожного мандрівника</p>
                    </Col>
                </Row>
                <Row className={"our_services_list"}>
                    {ourServicesArray.map(({title, text, imageSrc}, index) => (
                        <Col key={index + title} md={4}>
                            <MyCardComponent text={text} title={title} imageSrc={imageSrc}/>
                        </Col>
                    ))}
                </Row>

            </PageSectionWrapper>
            <PageSectionWrapper id={"products-overview"}>
                <Row>
                    <Col xs={12} md={8} lg={8} className={"sb-items-grid__content"}>
                        <h5 className="sb-text-image__content-title">Наші послуги</h5>
                        <p className="fs-2">Індивідуальний досвід для кожного мандрівника</p>
                    </Col>
                </Row>
                <Row className={"our_services_list"}>
                    {ourProdutsArray.map(({title, text, imageSrc}, index) => (
                        <Col key={index + title} md={4}>
                            <MyCardComponent typeView={2} text={text} title={title} imageSrc={imageSrc}/>
                        </Col>
                    ))}
                </Row>
            </PageSectionWrapper>
            <PageSectionWrapper id={"image-carousel"}>
                <Row className={"gx-5 align-items-center"}>
                    <Col xs={12} md={"6"}>

                        <h5 className="sb-text-image__content-title">
                            Сувеніри з Теребовлі
                            <br/>
                            Символіка нашого міста
                            <br/>
                            рЕЧІ З історіею</h5>
                        <p className="fs-2">
                            We work collaboratively with our clients to uncover the most effective and efficient way to
                            achieve their needs.
                        </p>

                    </Col>
                    <Col xs={12} md={"6"}>
                        <img src={city} alt=""/>
                    </Col>

                </Row>

            </PageSectionWrapper>
            <PageSectionWrapper id={"contacts"}>
                <Col md={6}>

                    <div className="contact-full__location">
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
                                    <a href="mailto:tic.terebovlia@gmail.com"
                                       className="d-flex align-items-center">
                                        <i className="bi bi-envelope"></i>

                                        <span>tic.terebovlia@gmail.com</span>
                                    </a>
                                </div>
                                <ul className="social-icons list-inline">
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/terebovlia.tic"
                                           target="_blank" rel="noreferrer">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.instagram.com/tourcenter.terebovlia"
                                           target="_blank" rel="noreferrer">
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

                            <div className="contact-details__row contact-details__hours sb-hours-wrapper">
                                <h6 className="contact-details__title fw-bold">Hours</h6>
                                <ol aria-label="Working hours" className="hours-list list-unstyled">
                                    <li className="hours-list__item d-flex">
                                        <span className="hours-list__day">Monday</span>
                                        <span className="ms-auto">9:00am – 5:00pm</span>
                                    </li>
                                    <li className="hours-list__item d-flex">
                                        <span className="hours-list__day">Tuesday</span>
                                        <span className="ms-auto">9:00am – 5:00pm</span>
                                    </li>
                                    <li className="hours-list__item d-flex">
                                        <span className="hours-list__day">Wednesday</span>
                                        <span className="ms-auto">9:00am – 5:00pm</span>
                                    </li>
                                    <li className="hours-list__item d-flex">
                                        <span className="hours-list__day">Thursday</span>
                                        <span className="ms-auto">9:00am – 5:00pm</span>
                                    </li>
                                    <li className="hours-list__item d-flex">
                                        <span className="hours-list__day">Friday</span>
                                        <span className="ms-auto">9:00am – 5:00pm</span>
                                    </li>
                                    <li className="hours-list__item d-flex">
                                        <span className="hours-list__day">Saturday</span>
                                        <span className="ms-auto">10:00am – 4:00pm</span>
                                    </li>
                                    <li className="hours-list__item d-flex">
                                        <span className="hours-list__day">Sunday</span>
                                        <span className="ms-auto">Closed</span>
                                    </li>
                                </ol>
                            </div>

                        </div>
                    </div>


                </Col>
            </PageSectionWrapper>
            <Footer/>
        </React.Fragment>
    )
}

export default App
