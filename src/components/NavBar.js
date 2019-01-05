import React, { Component } from "react";

import {
	Glyphicon,
	Grid,
	Col,
	Row,
	Button,
	Image,
	FormGroup,
	ControlLabel,
	FormControl,
	HelpBlock,
	ButtonGroup,
	ButtonToolbar,
	Navbar,
	Nav,
	MenuItem,
	NavItem,
	NavDropdown
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div style={{ backgroundImage: "./public/header.png" }} >
			<Navbar style={{ backgroundColor: "#ff9999" }} collapseOnSelect>
				<Navbar.Header>
					<Button
						style={{
							border: "2px solid #4dd0e1"
						}}
					>
						<Navbar.Brand>WhatToCook</Navbar.Brand>
						<Navbar.Toggle />
					</Button>
				</Navbar.Header>

				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} href="#"> <NavLink to='/savedrecipes'>
							<Glyphicon glyph="glyphicon glyphicon-plus" />
							Saved recipes </NavLink>
						</NavItem>
						<NavItem eventKey={2} href="#"><NavLink to='/addarecipe'>
							<Glyphicon glyph="glyphicon glyphicon-ok" />
							Add a recipe</NavLink>
						</NavItem>
					</Nav>
					<Nav pullRight>
						<NavItem eventKey={1} href="#">
							<strong>Log In</strong>
						</NavItem>
						<NavItem eventKey={2} href="#">
							<strong>Sign Up</strong>
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavBar;