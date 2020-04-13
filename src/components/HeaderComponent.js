import React from 'react';
import {Navbar, NavLink, NavItem, NavbarBrand} from 'reactstrap';


  const HeaderComponent = (props) => {
    return(
        <div>
            <Navbar>
            <NavbarBrand href="/home">Coaching</NavbarBrand>
                <NavItem>
                    <NavLink href="/home">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/about">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/contact">Home</NavLink>
                </NavItem>
            </Navbar>
        </div>

    )
  }

  export default HeaderComponent;