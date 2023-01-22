import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Header() {
	return (
		<Navbar bg="light" sticky="top" expand="lg">
			<Container>
				<Navbar.Brand href="#home">Illusion</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#whatWeDo">What We Do</Nav.Link>
						<Nav.Link href="#theFormula">The Formula</Nav.Link>
						<Nav.Link href="#bragSheet">Brag Sheet</Nav.Link>
						<Nav.Link href="#services">Services</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
