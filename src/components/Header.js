import { useState } from "react";
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import logoLarge from '../app/assets/logoLarge.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar light sticky="top" expand="md">
            <NavbarBrand className='px-5' href='/'>
                <img src={logoLarge} alt='Fox and Rabbit Fitness logo' className="float-start"/>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto px-5' navbar>
                    <NavItem>
                        <NavLink className="nav-link" to='/about'>
                            About Us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/programs'>
                            Programs
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/trainers'>
                            Trainers
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/testimonials'>
                            Testimonials
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/contact'>
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;