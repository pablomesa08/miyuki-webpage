import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Image,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { HeartIcon } from "../ui/icons/HeartIcon.jsx";
import { useState } from "react";
type ProductData = {
  name: string;
  description: string;
  price: number;
  stock: number;
  mass: number;
  addedDate: Date;
  image: string;
  colors: string[];
};

export default function ProductComponent({
  product,
}: Readonly<{ product: ProductData }>) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  return (
    <div>
      <Card>
        <CardBody>
          <div className="flex flex-row justify-center gap-10 flex-wrap-reverse">
            <div>
              <Image
                alt={product.description}
                src={product.image}
                width={300}
                height={250}
              />
            </div>
            <div className="flex flex-col ml-5 w-1/3 mt-6">
              <h1 className="text-2xl font-semibold text-center">
                {product.name}
              </h1>
              <div className="flex flex-row justify-center gap-14 items-center">
                <p>{product.price} $</p>
                <Button isIconOnly color="danger" aria-label="Like">
                  <HeartIcon
                    filled={undefined}
                    size={undefined}
                    height={undefined}
                    width={undefined}
                    label={undefined}
                  />
                </Button>
              </div>

              <div>
                <p>Colores</p>
                <div className="ml-2 flex justify-around">
                  {product.colors.map((color, index) => (
                    <Button
                      isIconOnly
                      radius="full"
                      key={index}
                      className={` rounded-full border-2 border-gray-200 focus:outline-none ${
                        selectedColor === color
                          ? "ring-2 ring-offset-2 ring-" + color.substring(1)
                          : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    ></Button>
                  ))}
                </div>
              </div>

              <p>Agregado: {product.addedDate.toLocaleDateString()}</p>

              <Button className="btn">Comprar</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export type { ProductData };
