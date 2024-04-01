import { Button, Card, CardBody, Image } from "@nextui-org/react";

export default function FeaturedProduct() {
  const product = {
    title: "Titulo para producto destacado",
    description:
      "Descripcion de producto destacado, Descripcion de producto destacado, Descripcion de producto destacado",
    image: "https://via.placeholder.com/300x250",
  };

  return (
    <Card className="border-none maw-w-[610px] bg-transparent">
      <CardBody>
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-col  max-w-[350px] gap-2 items-center">
            <h1 className="text-2xl font-bold text-center">{product.title}</h1>
            <p className="text-base text-justify">{product.description}</p>
            <Button className="w-24 font-bold" color="success">
              Ver producto
            </Button>
          </div>
          <div className="flex flex-col w-1/2 items-center">
            <Image
              alt={product.description}
              src={product.image}
              width={300}
              height={250}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
