import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const HeroBanner = () => {
    return (
        <div className='jumbotron'>
            <Container className="text-center my-5">
                <Row>
                    <h1 className="fw-bold display-5">Fox & Rabbit Fitness</h1>
                </Row>
                <Row>
                    <Col className="mx-auto" xs='12'>
                        <p className="lead mb-4">From strength and physique to long-distance running, we are ready to guide you to your finish line.<br></br><br></br>Reach out today to start your journey.</p>
                    </Col>
                    <Col className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link 
                            className="btn btn-primary btn-lg"
                            role="button"
                            to="/contact"
                            > 
                            Get in Touch
                        </Link>
                        <Link 
                            className="btn btn-secondary btn-lg"
                            role="button"
                            to="/programs"
                            > 
                            Find a Program
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default HeroBanner;