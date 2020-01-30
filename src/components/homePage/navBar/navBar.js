import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function NavBar(props) {
  return (
    <React.Fragment>
      <Navbar
        bg="primary"
        expand="lg"
        variant="dark"
        style={{ boxShadow: "3px 4px 20px rgba(0, 0, 0, 0.25)" }}
      >
        <Navbar.Brand href="/">
          <h3>Orders Arena</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="https://www.linkedin.com/in/saurav-sehgal"
              target="_blank"
            >
              <strong style={{ color: "white" }}>Linkedin</strong>
            </Nav.Link>
          </Nav>
          <FormControlLabel
            control={<Switch checked={props.toggle} onChange={props.updateToggle} />}
            label={props.toggle? 'Latest First':'Earliest First'}
            style={{color:'white'}}
            id="deadline-input"
          />
          <Form inline>
            <FormControl
              type="text"
              id="name-input"
              placeholder="Search by worker name"
              onChange={(e)=>{props.changeSearchValue(e.target.value)}}
              style={{width:'100%'}}
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
