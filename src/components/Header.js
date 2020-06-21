import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>
      <Link to="/">Logo</Link>
    </Navbar.Brand>
    <span style={{ marginLeft: "auto", color:"white" }}>User Name</span>
  </Navbar>
);
