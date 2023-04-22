import { Container, Col, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <Container fluid className="site-footer">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top border-black">
                <Col md='4' className="d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Fox & Rabbit Fitness, LLC</span>
                </Col>
                <Col md='4' className="d-flex justify-content-end">
                    <Nav className="list-unstyled d-flex">
                        <NavItem>
                            <NavLink href="http://www.twitter.com" className="icon-link">
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="http://www.instagram.com" className="icon-link">
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="http://www.facebook.com" className="icon-link">
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="http://www.youtube.com" className="icon-link">
                                <FontAwesomeIcon icon={faYoutube} size="lg" />
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Col>
            </footer>
        </Container>
    )
}

export default Footer;