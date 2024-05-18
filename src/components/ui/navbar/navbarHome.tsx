"use client";

import {
  Navbar as NextUINavbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Icon from "@mdi/react";
import { mdiCartOutline, mdiMagnify } from "@mdi/js";
import { AcmeLogo } from "./AcmeLogo.jsx";
import LoginLogoutButtom from "./buttons/loginLogout";
import ProductsPopover, { Category } from "./ProductsPopover";

export default function NavbarHome() {
  const menuItemsRoutes = {
    Promociones: "/products/tag?tag=promociones",
    Conócenos: "/contact",
  };

  const categories: Category[] = [
    {
      label: "Etiqueta 1",
      items: [
        {
          label: "Item 1",
          href: "/products/tag?tag=item-1-etiqueta-1",
        },
        {
          label: "Item 2",
          href: "/products/tag?tag=item-2-etiqueta-1",
        },
        {
          label: "Item 3",
          href: "/products/tag?tag=item-3-etiqueta-1",
        },
      ],
    },
    {
      label: "Etiqueta 2",
      items: [
        {
          label: "Item 1",
          href: "/products/tag?tag=item-1-etiqueta-2",
        },
        {
          label: "Item 2",
          href: "/products/tag?tag=item-2-etiqueta-2",
        },
        {
          label: "Item 3",
          href: "/products/tag?tag=item-3-etiqueta-2",
        },
      ],
    },
  ];

  return (
    <NextUINavbar isBordered position="static" height="7rem" className="w-full mx-0 px-0">
      <div className="flex flex-row items-center w-full justify-between mx-0 px-4">
        {/* Logo container */}
        <div className="flex items-center space-x-4">
          <AcmeLogo />
          <Link href="/" color="primary">
            <p className="font-bold text-inherit">LOGO</p>
          </Link>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex flex-grow justify-start space-x-4 ml-4">
          <ProductsPopover categories={categories} />
          {Object.entries(menuItemsRoutes).map(([item, href]) => (
            <NavbarItem key={href}>
              <Link className="text-primary-50" href={href}>
                {item}
              </Link>
            </NavbarItem>
          ))}
        </div>

        {/* Action items */}
        <div className="flex items-center space-x-4">
          <LoginLogoutButtom />
          <Icon path={mdiMagnify} size={1} />
          <Link href="/cartPage">
            <Icon path={mdiCartOutline} size={1} />
          </Link>
          {/* Menu toggle for small screens */}
          <NavbarMenuToggle className="md:hidden" />
        </div>
      </div>
      <NavbarMenu>
        <NavbarContent className="flex flex-col space-y-2">
          {Object.entries(menuItemsRoutes).map(([item, href], index) => (
            <NavbarMenuItem key={index}>
              <Link color="foreground" href={href} size="lg">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarContent>
      </NavbarMenu>
    </NextUINavbar>
  );
}
