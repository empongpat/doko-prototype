import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import 'assets/styles/css/layout/Navbar.css';
import Logo from 'assets/images/doko-logo.svg';

export default class Example extends React.Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand id="brand" tag={RouterNavLink} to="/"><img src={Logo} alt="" width="60" height="60" /><span>doko</span></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink exact className="custom-nav-link" tag={RouterNavLink} to="/" activeClassName="active">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="custom-nav-link" tag={RouterNavLink} to="/career" activeClassName="active">Career</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="custom-nav-link" tag={RouterNavLink} to="/workshop" activeClassName="active">Workshop</NavLink>
                            </NavItem>
                            <Button id="signInButton" color="primary">SIGN IN</Button>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}