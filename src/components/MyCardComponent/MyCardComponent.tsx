import Card from 'react-bootstrap/Card';
import city from '../../assets/img/city.jpeg'
import {Button} from "react-bootstrap";
import {Link as RouterLink, useNavigate} from "react-router-dom";

interface IMyCardComponent {
    imageSrc?: string,
    title?: string,
    text?: string,
    typeView?: 1 | 2,
    IsButton?: boolean,
}

const MyCardComponent = ({
                             imageSrc = city,
                             title = "Цікаві місця",
                             text = "Відкрийте для себе багату історію та культуру Теребовлі та громади.",
                             typeView = 1,
                             IsButton = false
                         }: IMyCardComponent) => {

    const navigate = useNavigate();

    function handleLinkClick(path) {
        navigate(path);
    }

    return (
        <Card className={typeView == 1 ? "rounded-0 border-0 shadow our_services_card" : "rounded-0 border-0" +
            " bg-transparent" +
            " our_product_card"}>
            <Card.Img className={"rounded-0"} variant="top" src={imageSrc}/>
            <Card.Body className={typeView == 2 ? "ps-0 pe-0" : ""}>
                <Card.Title className={"fs-6 fw-bold"}>{title}</Card.Title>
                <Card.Text className={"fs-6"}>
                    {text}
                </Card.Text>

                {IsButton &&
                <Button variant="outline-secondary"
                        className={"border-2 rounded-0 btn-lg  mt-2"} onClick={() => handleLinkClick('/places')}>
                    Переглянути
                </Button>

                    // <RouterLink className={'btn-outline-secondary'} to='/places' >Переглянути</RouterLink>


                }
            </Card.Body>
        </Card>
    );
};

export default MyCardComponent;
