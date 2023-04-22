import { Container, Row, Col } from "reactstrap";
import { FoxAccordion, RabbitAccordion } from "./ProgramAccordion";

const ProgramsList = () => {
    <Container>
        <Row>
            <Col>
                <FoxAccordion />
            </Col>
            <Col>
                <RabbitAccordion />
            </Col>
        </Row>
    </Container>
}

export default ProgramsList;