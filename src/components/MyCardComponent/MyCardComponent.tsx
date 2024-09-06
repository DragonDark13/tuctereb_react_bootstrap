import Card from 'react-bootstrap/Card';
import city from '../../assets/img/city.jpeg'

interface IMyCardComponent {
    imageSrc?: string,
    title?: string,
    text?: string,
    typeView?: 1 | 2,
}

const MyCardComponent = ({
                             imageSrc = city,
                             title = "Цікаві місця",
                             text = "Відкрийте для себе багату історію та культуру Теребовлі та громади.",
                             typeView = 1
                         }: IMyCardComponent) => {
    return (
        <Card className={typeView==1 ? "rounded-0 border-0 shadow our_services_card" : "rounded-0 border-0"}>
            <Card.Img className={"rounded-0"} variant="top" src={imageSrc}/>
            <Card.Body className={typeView==2 ? "ps-0 pe-0" : ""}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MyCardComponent;
