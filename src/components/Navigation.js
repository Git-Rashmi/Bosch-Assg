import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  HouseDoor,
  OctagonHalf,
  EyeFill,
  CardChecklist,
} from "react-bootstrap-icons";

export const Navigation = () => (
  <div className="custom-nav">
    <Navbar bg="dark" variant="dark">
      <Nav className="flex-column">
        <Nav.Link href="/">
          <HouseDoor />
        </Nav.Link>
        <Nav.Link href="/sample">
          <OctagonHalf />
        </Nav.Link>
        <Nav.Link href="/view">
          <EyeFill />
        </Nav.Link>
        <Nav.Link href="/contacts">
          <CardChecklist />
        </Nav.Link>
      </Nav>
    </Navbar>
  </div>
);
