import React, { Component } from 'react';
import './NavBar.css';

import {Nav, Navbar, NavItem} from 'react-bootstrap';

class NavBar extends Component {
    render(){
        return (
            <div className="NavBar">
                 <Navbar className="myNav" inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                        <NavItem eventKey={1} href="#Menu">
                            MENU
                        </NavItem>
                        <NavItem eventKey={2} href="#About">
                            WAS?
                        </NavItem>
                        <NavItem eventKey={2} href="#Gallery">
                            Gallery
                        </NavItem>
                        <NavItem eventKey={2} href="#Partners">
                            WER?
                        </NavItem>
                        <NavItem eventKey={3} href="#Map">
                            WO?
                        </NavItem>
                        <NavItem eventKey={1} href="#Schedule">
                            WANN?
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;