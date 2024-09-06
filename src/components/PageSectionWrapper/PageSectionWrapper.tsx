import {ReactNode} from "react";
import {Col, Container, Row} from "react-bootstrap";

interface IPageSectionWrapper {
    children: ReactNode,
    id?: string;
    variant?: "dark" | "light",
}

const PageSectionWrapper = ({children, id, variant="light"}: IPageSectionWrapper) => {
    return (
        <section id={id ? id : ""}
                 className={"sb-section option-title-show-decoration-square "+ (variant==='light' ? "sb-section-opt-light " : "sb-section-opt-dark")}>
            <Container>
                <Row className={"sb-row-opt-padding-bottom-large sb-row-opt-padding-top-large align-items-center"}>
                    <Col>
                         {children}
                    </Col>
                </Row>

            </Container>
        </section>
    );
};

export default PageSectionWrapper;
