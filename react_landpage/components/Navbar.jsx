import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@heroui/react";

export default function MyNavbar() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">Ps Gallery</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button variant="flat">
            <a href="#gallery">
            Guarda la Gallery
            </a>
          </Button>
        </NavbarItem>
      
      </NavbarContent>
    </Navbar>
  );
}
