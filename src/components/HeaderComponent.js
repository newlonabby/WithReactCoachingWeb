import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

//to add title prop later
const Header = props =>  {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Brand Name</NavbarBrand>
        </Navbar>
        
    )
}

export default Header;