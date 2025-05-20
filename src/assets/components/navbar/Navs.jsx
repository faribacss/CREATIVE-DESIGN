import './Navs.css'
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, Button } from 'react-bootstrap'
function Navs() {

    return (
      <>
        {["xl"].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3">
            <Container className="nav-container">
              <Navbar.Brand href="#" className="nav-brand">
                STRATEGY
              </Navbar.Brand>
              <Navbar.Toggle style={{backgroundColor: '#fff'}}
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                className="nav-offcanvas"
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title style={{color: '#fff'}}>
                    STRATEGY
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-center flex-grow-1 nav-list">
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="#Services">Services</Nav.Link>
                    <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#Team">Team</Nav.Link>
                    <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#Contact">Contact</Nav.Link>
                  </Nav>
                  <Form>
                    <Button className="btn-login">Get Started</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
      //End of Navbar
    );
}

export default Navs