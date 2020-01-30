import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";

export default function NavBar() {
  return (
    <React.Fragment>
      <Navbar
        bg="primary"
        expand="lg"
        variant="dark"
        style={{ boxShadow: "3px 4px 20px rgba(0, 0, 0, 0.25)" }}
      >
        <Navbar.Brand href="#home">
          <h3>Orders Arena</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://github.com/sauravsehgal24" target="_blank">
              <strong style={{ color: "white" }}>Github</strong>
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/saurav-sehgal"
              target="_blank"
            >
              <strong style={{ color: "white" }}>Linkedin</strong>
            </Nav.Link>
          </Nav>
          <Form inline>
            <Form.Check
              className="ml-6"
              type="switch"
              id="custom-switch"
              label=""
            />
            <FormControl
              type="text"
              placeholder="Search Order"
              className="mr-sm-2"
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
