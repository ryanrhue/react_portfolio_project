import { Container, Col, Row } from "reactstrap";
import AboutPageCarousel from "../features/about/AboutPageCarousel";
import AboutPageCard from "../features/about/AboutPageCard";

const AboutPage = () => {
    return (
        <Container className=''>
            <h1 className="text-center pb-4">Who We Are</h1>
            <Row className='row-content'>
                <Col md='4'>
                    <AboutPageCarousel />
                </Col>
                <Col md='8'>
                    <AboutPageCard />
                </Col>
            </Row>
        </Container>

    );
};

export default AboutPage;