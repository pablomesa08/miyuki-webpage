import { AcmeLogo } from "@/components/ui/navbar/AcmeLogo";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

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

export default function Test() {
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
    <div>
      <Navbar>
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Popover placement="bottom">
              <PopoverTrigger>
                <Button>Open Popover</Button>
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
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
