import React, { Component } from "react";

import {
	Col,
	Row,
	Grid,
	Navbar,
	NavItem,
	Nav,
	NavDropdown,
	MenuItem,
	Image,
	Label
} from "react-bootstrap";
//import custom css
import "./HomePageHeader.css"; // this technique is CSS Stylesheet => best way to do custom css
// More infos at: https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822

const HomePageHeader = () => {
	const logo = "../static/monster-chef.png";
	return (
		<div>
			<Navbar className="navbar" collapseOnSelect>
			<Navbar.Header>
						<Navbar.Brand className="navbar-brand">
							<a href="#home">Monster Chef</a>
						</Navbar.Brand>
					</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavItem href="#">Add a recipe</NavItem>
						<NavItem href="#">Saved recipes</NavItem>
					</Nav>
					<Nav pullRight>
						<NavItem href="#">Log In</NavItem>
						<NavItem href="#">Sign Up</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default HomePageHeader;