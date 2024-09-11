import Carousel from 'react-bootstrap/Carousel';

import slider1 from '../../assets/img/city2.jpeg'
import slider2 from '../../assets/img/city3.jpeg'
import slider3 from '../../assets/img/city4.jpeg'



function UncontrolledExample() {

    const sliderArray = [
        {
            imgSrc: slider1
        }, {
            imgSrc: slider2
        }, {
            imgSrc: slider3
        },
    ]
    return (
        <Carousel>

            {sliderArray.map(({imgSrc},index) => (
                <Carousel.Item key={index}>
                    <img src={imgSrc} alt=""/>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default UncontrolledExample;