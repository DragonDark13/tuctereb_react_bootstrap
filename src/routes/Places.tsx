import React from 'react';
import PageSectionWrapper from "../components/PageSectionWrapper/PageSectionWrapper";
import {Button, Col, Row} from "react-bootstrap";
import place1 from "../assets/img/place.jpeg"
import place2 from "../assets/img/place2.jpeg"
import place3 from "../assets/img/place3.jpeg"
import place4 from "../assets/img/place4.png"
import place5 from "../assets/img/place5.jpeg"

const placesArray = [

    {
        imageSrc: place2,
        title: "Теребовлянський замок",
        text: "Історія теребовлянських укріплень сягає своїми коренями у часи княжих міжусобиць, коли Теребовлею, княжою столицею, володів нащадок великого князя Ярослава Мудрого Василько Ростиславович. Уже тоді на Замковій Горі, було засноване давньоруське городище.\n" +
            "\n" +
            "У 1341 році, після переходу Теребовлі під владу Польщі в південній частині Замкової гори був закладений фундамент для майбутніх кам’яних укріплень. Тоді ж у скалі був висічений колодязь глибиною близько 44 метрів.\n" +
            "\n" +
            "Наступна згадка про замок датується 1534 роком. Новий замок стояв на сторожі міста близько століття, а залишки цих давніх укріплень виявлені археологами під час розкопок на території замку у 2012 році.\n" +
            "\n" +
            "Сучасного вигляду Теребовлянський замок набув за часів старости Олександра Балабана. Завершено будівництво нового замку у 1632-33 роках."
    },
    {
        imageSrc: place3,
        title: "Плебанівський віадук\n",
        text: "Fortis agripeta absolute attrahendams epos est.Cur adiurator ridetis? Est gratis fiscina, cesaris."
    },
    {
        imageSrc: place4,
        title: "Підгорянський монастир\n",
        text: "Paluss favere! Solitudos cantare in caelos!Sunt lumenes desiderium germanus, azureus omniaes.Eheu."
    },
    {
        imageSrc: place5,
        title: "Церква св. Володимира (Костел босих кармелітів)\n",
        text: "Ecce, imber!Pulchritudines ridetis!Ecce, bi-color fermium!Mortem clemens mineralis est."
    }
]

const Places = () => {
    return (
        <React.Fragment>
            <PageSectionWrapper>
                <Row className={"align-items-center"}>
                    <Col md={7}><h6 className="sb-text-image__content-title">Цікаві місця
                    </h6>
                        <p>Побувавши у нашій громаді Ви зможете відвідати багато цікавих об'єктів та пам'яток
                            архітектури,
                            які були створені у різні етапи нашої історії</p>
                        <Button className={"btn-lg"}>Назад</Button>
                    </Col>
                    <Col md={5}>
                        <img src={place1} alt="place1"/>
                    </Col>
                </Row>
            </PageSectionWrapper>
            <PageSectionWrapper>
                <h3>Деякі з цікавинок які можна у нас побачити
                </h3>
                {placesArray.map((place, index) => (
                    <Row className={"align-items-center"} key={place.title + index}>
                        <Col xs={12} md={5}>
                            <img src={place.imageSrc} alt={place.title}/>
                        </Col>
                        <Col xs={12} md={7}>
                            <h6>{place.title}</h6>
                            <p>{place.text}</p>
                        </Col>
                    </Row>
                ))}
                <Button>Вверх</Button>
            </PageSectionWrapper>
        </React.Fragment>
    );
};

export default Places;
