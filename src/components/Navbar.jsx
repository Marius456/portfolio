import { Navbar as NavbarBs, Nav } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar() {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>

                <Nav className="me-right">
                    <Nav.Link to="/" as={NavLink}>
                        <strong>Marius Žilgužis</strong>
                    </Nav.Link>
                </Nav>
                <Nav className="me-left">
                    <Nav.Link to="/about" as={NavLink}>
                        Apie mane
                    </Nav.Link>
                    <Nav.Link to="/projects" as={NavLink}>
                        Projektai
                    </Nav.Link>
                    <Nav.Link to="/contact" as={NavLink}>
                        Kontaktai
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}