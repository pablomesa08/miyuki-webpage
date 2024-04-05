import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Button,
} from "@nextui-org/react";
import Icon from "@mdi/react";
import { mdiCartOutline, mdiMagnify } from "@mdi/js";
import { AcmeLogo } from "./AcmeLogo.jsx";
import DropdownFullScreen from "./dropdownFullScreen.tsx";

export default function NavbarHome() {
  const menuItemsRoutes = {
    Productos: "/store",
    Promociones: "/products/tag?tag=promociones",
    Conócenos: "/contact",
  };

  return (
    <NextUINavbar isBordered position="static" height="7rem">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <div className="flex-col w-full ">
        <div className="flex w-full items-center "></div>
        <NavbarContent className="hidden mt-2 sm:flex gap-20" justify="center">
          <div className="flex items-center ">
            <AcmeLogo />
            <Link href="/" color="foreground">
              <p className="font-bold text-inherit">LOGO</p>
            </Link>
          </div>
          <div className="flex flex-row items-center gap-3 ">
            <NavbarMenuItem>
              <DropdownFullScreen />
            </NavbarMenuItem>
            {Object.entries(menuItemsRoutes).map(([item, href], index) => (
              <NavbarItem key={index} isActive={item === "Customers"}>
                <Link color="foreground" href={href}>
                  {item}
                </Link>
              </NavbarItem>
            ))}
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                color="primary"
                variant="solid"
                className=" font-bold"
              >
                Iniciar sesión
              </Button>
              <Icon path={mdiMagnify} size={1} />
              <Icon path={mdiCartOutline} size={1} />
            </div>
          </div>
        </NavbarContent>
      </div>

      <NavbarMenu>
        {Object.entries(menuItemsRoutes).map(([item, href], index) => (
          <NavbarMenuItem key={index}>
            <Link color="foreground" href={href} size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
