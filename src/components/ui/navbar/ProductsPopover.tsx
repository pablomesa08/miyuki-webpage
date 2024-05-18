import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Link,
  
} from "@nextui-org/react";

type categoryLink = {
  label: string;
  href: string;
};

type Category = {
  label: string;
  items: categoryLink[];
};

type ProductsPopoverProps = {
  categories: Category[];
};

const ProductsPopover: React.FC<ProductsPopoverProps> = ({ categories }) => {
  return (
    <Popover placement="bottom">
      <PopoverTrigger className="">
        <Link className="text-primary-50">Productos</Link>
      </PopoverTrigger>
      <PopoverContent className="bg-succeed">
        <div className="w-[calc(100vw-50px)] flex flex-row justify-around bg-backround" >
          {categories.map((category, index) => (
            <div key={category.label} className="flex flex-col">
              <h3>{category.label}</h3>
              {category.items.map((item, itemIndex) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProductsPopover;
export type { Category };
