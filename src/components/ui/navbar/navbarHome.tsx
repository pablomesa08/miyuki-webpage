"use client";

import {
  Navbar as NextUINavbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import Icon from "@mdi/react";
import { mdiCartOutline, mdiMagnify } from "@mdi/js";
import { AcmeLogo } from "./AcmeLogo.jsx";

type categoryLink = {
  label: string;
  href: string;
};

type Category = {
  label: string;
  items: categoryLink[];
};

type DropdownFullScreenCategoriesProps = {
  categories: Category[];
};

type LinkPopupProps = {
  key: string;
  link: string;
  content: string;
};

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
    <NextUINavbar isBordered position="static" height="7rem">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <div className="flex-col w-full">
        <div className="flex w-full items-center"></div>
        <NavbarContent className="hidden mt-2 sm:flex gap-20" justify="center">
          <div className="flex items-center ">
            <AcmeLogo />
            <Link href="/" color="foreground">
              <p className="font-bold text-inherit">LOGO</p>
            </Link>
          </div>
          <div className="flex flex-row items-center gap-3">
            <NavbarMenuItem>
              <Popover placement="bottom">
                <PopoverTrigger>
                  <Link color="foreground">Productos</Link>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="w-[calc(100vw-50px)] flex flex-row justify-around">
                    {categories.map((category, index) => (
                      <div key={index} className="flex flex-col">
                        <h3>{category.label}</h3>
                        {category.items.map((item, index) => (
                          <a key={index} href={item.href} content={item.label}>
                            {item.label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </NavbarMenuItem>
            {Object.entries(menuItemsRoutes).map(([item, href], index) => (
              <NavbarItem key={index}>
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
