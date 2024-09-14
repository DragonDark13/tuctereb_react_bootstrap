import React from 'react';
import PageSectionWrapper from "../components/PageSectionWrapper/PageSectionWrapper";
import {Button, Col, Row} from "react-bootstrap";
import place1 from "../assets/img/place.jpeg"
import place2 from "../assets/img/place2.jpeg"
import place3 from "../assets/img/place3.jpeg"
import place4 from "../assets/img/place4.png"
import place5 from "../assets/img/place5.jpeg"
import {Link} from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';

const placesArray = [

    {
        imageSrc: place2,
        title: "Теребовлянський замок",
        text: "Історія яду Теребовлянський замок набув за часів старости Олександра Балабана. Завершено будівництво нового замку у 1632-33 роках."
    },
    {
        imageSrc: place3,
        title: "Плебанівський віадук",
        text: "Fortis agripeta absolute attrahendams epos est.Cur adiurator ridetis? Est gratis fiscina, cesaris."
    },
    {
        imageSrc: place4,
        title: "Підгорянський монастир",
        text: "Paluss favere! Solitudos cantare in caelos!Sunt lumenes desiderium germanus, azureus omniaes.Eheu."
    },
    {
        imageSrc: place5,
        title: "Церква св. Володимира (Костел босих кармелітів)\n",
        text: "Ecce, imber!Pulchritudines ridetis!Ecce, bi-color fermium!Mortem clemens mineralis est."
    }
]

const Places = () => {

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: true,
        });
    };
    return (
        <React.Fragment>
            <PageSectionWrapper>
                <Row  className={"align-items-center gy-4 gy-md-0"}>
                    <Col xs={12} md={7}>
                        <h6 className="sb-text-image__content-title">Цікаві місця
                        </h6>
                        <p>Побувавши у нашій громаді Ви зможете відвідати багато цікавих об'єктів та пам'яток
                            архітектури,
                            які були створені у різні етапи нашої історії</p>
                        <Button as={Link} to={'/'} className={"btn-lg"}>Назад</Button>
                    </Col>
                    <Col xs={12} md={5}>
                        <img src={place1} alt="place1"/>
                    </Col>
                </Row>
            </PageSectionWrapper>
            <PageSectionWrapper>
                <Row>
                    <Col xs={12} md={8} lg={8} className={"sb-items-grid__content"}>
                        <h2>Деякі з цікавинок які можна у нас побачити</h2>

                    </Col>
                </Row>
                {placesArray.map((place, index) => (
                    <Row className={"align-items-center mt-4 mb-4 gy-2 gy-md-0"} key={place.title + index}>
                        <Col xs={12} md={5}>
                            <img src={place.imageSrc} alt={place.title}/>
                        </Col>
                        <Col xs={12} md={7}>
                            <h5>{place.title}</h5>
                            <p>{place.text}</p>
                        </Col>
                    </Row>
                ))}
                <Button className={"btn-lg"} onClick={scrollToTop}>Вверх</Button>
            </PageSectionWrapper>
        </React.Fragment>
    );
};

export default Places;
