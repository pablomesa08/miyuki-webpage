import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { Format, ProductData, ColorSet } from "@/types/productType";
import { getPath } from "./colorWheel";
import FavoriteIcon from "./favoriteIcon";
import { useCart } from "@/hooks/useCart";

export default function ProductComponent({
  product,
}: Readonly<{ product: ProductData }>) {
  const [selectedColorSet, setSelectedColorSet] = useState<ColorSet | null>(
    null
  );
  const [selectedFormat, setSelectedFormat] = useState<Format | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isAddedModalOpen,
    onOpen: onAddedModalOpen,
    onClose: onAddedModalClose,
  } = useDisclosure();
  const { addProduct } = useCart();
  const {
    isOpen: errorAddedModalOpen,
    onOpen: onErrorAddedModalOpen,
    onClose: onErrorAddedModalClose,
  } = useDisclosure();

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleBuy = async () => {
    if (!selectedColorSet || !selectedFormat) {
      onOpen();
    } else {
      const isAdded = await addProduct({
        productId: product.id,
        formatId: selectedFormat.id,
        quantity,
        colorsetId: selectedColorSet.id,
      });
      if (isAdded) {
        onAddedModalOpen();
      } else {
        onErrorAddedModalOpen();
        console.error("Failed to add product to cart");
      }
    }
  };

  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cuidado ⚠️
              </ModalHeader>
              <ModalBody>
                <p>
                  Debes seleccionar un formato y un conjunto de colores antes de
                  proceder con la compra.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isAddedModalOpen}
        onClose={onAddedModalClose}
        backdrop="opaque"
      >
        <ModalContent>
          <ModalHeader>Producto Añadido</ModalHeader>
          <ModalBody>
            <p>{`Has añadido ${quantity} ${product.name} con formato ${selectedFormat?.name} y color ${selectedColorSet?.name} al carrito.`}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={onAddedModalClose}>
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={errorAddedModalOpen}
        onClose={onErrorAddedModalClose}
        backdrop="opaque"
      >
        <ModalContent>
          <ModalHeader>Producto Añadido</ModalHeader>
          <ModalBody>
            <p>Error añadiendo producto al carrito de compra</p>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={onErrorAddedModalClose}>
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
                    <p>
                      Precio adicional por formato: {selectedFormat.price} $
                    </p>
                  ) : (
                    <></>
                  )}
                  <FavoriteIcon productId={product.id} />
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
                          ? "ring-2 ring-offset-2 ring-primary-200"
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
                      className={`${
                        selectedFormat === format
                          ? "bg-primary-50 text-white"
                          : "bg-secondary-50 text-black"
                      } transition-colors duration-300`}
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
                <Button onClick={handleBuy} className="btn bg-primary">
                  Comprar
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export type { ProductData };
