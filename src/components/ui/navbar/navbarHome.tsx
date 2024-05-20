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
import { mdiCartOutline, mdiAccountOutline } from "@mdi/js";
import { AcmeLogo } from "./AcmeLogo.jsx";
import LoginLogoutButtom from "./buttons/loginLogout";
import ProductsPopover, { Category } from "./ProductsPopover";
import { useRouter } from "next/router.js";

export default function NavbarHome() {
  const router = useRouter();
  const menuItemsRoutes = {
    Promociones: "/products/tag?tag=promociones",
    Conócenos: "/contact",
  };

  const categories: Category[] = [
    {
      label: "Categorias",
      items: [
        {
          label: "Anillos",
          href: "/products/tag?categories=c70a7ae8-c82a-4e1d-bd56-1a484d231e15",
        },
        {
          label: "Collares",
          href: "/products/tag?categories=c88c70d3-10f4-462b-9d9a-b2598c6d8476",
        },
        {
          label: "Dijes",
          href: "/products/tag?categories=b3105fab-c7c9-45d3-a606-3758e1545a9f",
        },
      ],
    },
    {
      label: "Formatos",
      items: [
        {
          label: "Oro",
          href: "/products/tag?formats=f8b8c6fa-2dab-4612-b882-55369514b95a",
        },
        {
          label: "Bronce",
          href: "/products/tag?formats=3f7b4a4d-982f-4ece-841e-76f77b5293b3",
        },
        {
          label: "Plata",
          href: "/products/tag?formats=d03225f5-d965-42a4-a334-76b8f0a4a565",
        },
        {
          label: "Rottweiler",
          href: "/products/tag?formats=e18d186b-ceb9-4edd-b6fa-b98423493359",
        },
      ],
    },
  ];

  return (
    <NextUINavbar
      isBordered
      position="static"
      height="7rem"
      className="w-full mx-0 px-0"
    >
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
          <Link href="/user/profile">
            <Icon path={mdiAccountOutline} size={1} />
          </Link>
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
