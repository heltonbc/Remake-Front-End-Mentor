import React from "react";
import {
    Button,
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl,
} from "react-bootstrap";

const Navigation = () => (
    <Navbar bg="light" expand="lg" className="mb-3">
        <Container fluid>
            <Navbar.Brand href="#">Dashboard of Projects</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">All Challenges</Nav.Link>
                    <NavDropdown title="Level of Challenges" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Beginer</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Junior</NavDropdown.Item>
                        <NavDropdown.Item href="#action5">Full</NavDropdown.Item>
                        <NavDropdown.Item href="#action6">Senior</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                        Help
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search Projects"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Navigation;
