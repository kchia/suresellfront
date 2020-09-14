import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function HeadNav() {
  return (
    <div className="HeadNav">
      <Navbar
        className="justify-content-end"
        fixed="top"
        bg="dark"
        variant="dark"
      >
        <Nav>
          <Nav.Item>
            <Nav.Link id="link" href="/add">
              +
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default HeadNav;
