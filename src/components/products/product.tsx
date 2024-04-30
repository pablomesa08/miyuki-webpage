import { Button, ButtonGroup, Card, CardBody, Image } from "@nextui-org/react";
import { HeartIcon } from "../ui/icons/HeartIcon.jsx";
import { useState } from "react";
import { Format, ProductData, ColorSet } from "@/types/productType";
import { getPath } from "./colorWheel";

export default function ProductComponent({
  product,
}: Readonly<{ product: ProductData }>) {
  const [selectedColorSet, setSelectedColorSet] = useState<ColorSet | null>(
    null
  );
  const [selectedFormat, setSelectedFormat] = useState<Format | null>(null);

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <Card className="basis-4/6">
      <CardBody>
        <div className="flex flex-row justify-center gap-10 flex-wrap-reverse items-center">
          <div>
            <Image
              alt={product.name}
              src={product.image}
              width={300}
              height={250}
            />
          </div>
          <div className="flex flex-col ml-5 w-1/3 mt-5 gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-center">
                {product.name}
              </h1>
              <div className="flex flex-row justify-center gap-14 items-center mt-2">
                <p>Precio Base: {product.basePrice} $</p>
                {selectedFormat ? (
                  <p>Precio adicional por formato: {selectedFormat.price} $</p>
                ) : (
                  <></>
                )}
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
            </div>

            <div>
              <p className=" font-bold mb-2">Colores</p>
              <div className="flex justify-center items-center gap-10 flex-wrap  ">
                {product.colorSets.map((colorSet, setIdx) => (
                  <Button
                    isIconOnly
                    key={setIdx}
                    className={` h-[60px] w-[60px] p-0 rounded-full   ${
                      selectedColorSet === colorSet
                        ? "ring-2 ring-offset-2 ring-primary-500"
                        : ""
                    }`}
                    onClick={() => setSelectedColorSet(colorSet)}
                  >
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                      {colorSet.colors.map((color, colorIndex) => (
                        <path
                          key={colorIndex}
                          d={getPath(colorIndex, colorSet.colors.length)}
                          fill={color}
                        />
                      ))}
                    </svg>
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">Formatos</p>
              <div className="flex flex-row gap-5 justify-center flex-wrap">
                {product.formats.map((format, formatIdx) => (
                  <Button
                    key={formatIdx}
                    color={selectedFormat === format ? "primary" : "secondary"}
                    onClick={() => setSelectedFormat(format)}
                  >
                    {format.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-row justify-around flex-wrap items-center">
              <ButtonGroup variant="flat" radius="full">
                <Button isIconOnly onClick={handleDecrement}>
                  -
                </Button>
                <Button isIconOnly>{quantity}</Button>
                <Button isIconOnly onClick={handleIncrement}>
                  +
                </Button>
              </ButtonGroup>
              <Button className="btn">Comprar</Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export type { ProductData };
