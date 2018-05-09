import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class TopMenu extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { logUserOff } = this.props;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            UnB Feelings
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>AaaaaaAAAaaaaAAaaaAAaaaa</NavLink>
              </NavItem>

              <NavItem>
                <NavLink>BbbbbBBBBbbbbbBBbbbbBBbbbBBBb</NavLink>
              </NavItem>

              <NavItem>
                <button className="btn btn-primary" onClick={logUserOff}>Sair</button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopMenu;
