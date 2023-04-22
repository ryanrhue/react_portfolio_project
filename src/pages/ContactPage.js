import { Container, Row, Col } from "reactstrap";
import ContactForm from "../features/contact/ContactForm";

const ContactPage = () => {
    return (
        <Container>
            <Row className="row-content align-items-center">
                <Col>
                    <a
                        role='button'
                        className="btn btn-link"
                        href='tel:+12065551234'
                    >
                        1-206-555-1234
                    </a>
                    <br />
                    <a
                        role="button"
                        className="btn btn-link"
                        href='mailto:fakeemail@fakeemail.co'
                    >
                        foxandrabbit@fakeemail.co
                    </a>
                </Col>
            </Row>
            <Row className="row-content">
                <Col xs='12'>
                    <h3>Get in Touch</h3>
                    <hr />
                </Col>
                <Col>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    )
};

export default ContactPage;