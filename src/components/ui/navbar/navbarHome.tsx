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
} from "@nextui-org/react";

import AvatarProfile from "./avatarProfile/AvatarProfile.jsx";

import Icon from "@mdi/react";
import { mdiCartOutline, mdiMagnify } from "@mdi/js";

import { AcmeLogo } from "./AcmeLogo.jsx";
export default function NavbarHome() {
  const menuItemsRoutes = {
    Tienda: "/store",
    Conócenos: "/contact",
    Promociones: "/promos",
  };

  return (
    <NextUINavbar isBordered position="static" height="7rem">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <div className="flex-col w-full ">
        <div className="flex justify-between w-full items-center">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[12rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Buscar productos..."
            size="sm"
            startContent={<Icon path={mdiMagnify} size={1} />}
            type="search"
          />
          <div className="flex items-center mr-10 sm:mr-[11.5rem] ">
            <AcmeLogo />
            <p className="font-bold text-inherit">LOGO</p>
          </div>
          <div className="flex items-center gap-2">
            <AvatarProfile />
            <Icon path={mdiCartOutline} size={1} />
          </div>
        </div>
        <NavbarContent className="hidden mt-2 sm:flex gap-40" justify="center">
          {Object.entries(menuItemsRoutes).map(([item, href], index) => (
            <NavbarItem key={index} isActive={item === "Customers"}>
              <Link color="foreground" href={href}>
                {item}
              </Link>
            </NavbarItem>
          ))}
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
