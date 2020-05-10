import React from 'react';
import '../App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

//to add title prop later
const Footer = props =>  {
    return (
        <Navbar color="light" light expand="md" id="footer-pos">
            <NavbarBrand href="/">Brand Name</NavbarBrand>
        </Navbar>
        
    )
}

export default Footer;