import { ProductCartType } from "@/types/productType";
import { mdiTrashCan } from "@mdi/js";
import Icon from "@mdi/react";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { getPath } from "./colorWheel";

export default function ProductCartGrid({
  products,
}: Readonly<{
  products: ProductCartType[];
}>) {
  return (
    <div className="flex flex-col gap-4">
      {products.map((product, index) => (
        <Card key={index} shadow="sm">
          <CardBody>
            <div className="flex flex-row gap-4">
              <Image
                src={product.image}
                alt={product.name}
                width="100px"
                height="100px"
                className="object-cover"
              />
              <div className="flex flex-col gap-2">
                <h2>{product.name}</h2>
                <div className="flex flex-row gap-2">
                  <span>Price: {product.basePrice}</span>
                  <span>Quantity: {product.quantity}</span>
                  <span>Subtotal: {product.basePrice * product.quantity}</span>
                </div>
                <div className="h-[60px] w-[60px] p-0 rounded-full">
                  <svg viewBox="0 0 100 100" width="100%" height="100%">
                    {product.colorSet.colors.map((color, idx) => (
                      <path
                        key={idx}
                        d={getPath(idx, product.colorSet.colors.length)}
                        fill={color}
                      />
                    ))}
                  </svg>
                </div>
                <Button isIconOnly>
                  <Icon path={mdiTrashCan} size={1} />
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
