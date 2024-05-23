import { Button, Card, CardBody, Image } from "@nextui-org/react";

export default function FeaturedProduct() {
  const product = {
    title: "Titulo para producto destacado",
    description: "Descripcion de producto destacado, Descripcion de producto destacado, Descripcion de producto destacado",
    image: "/Images/backround/azul.png",
  };return (
    <Card className="border-none max-w-full bg-transparent shadow-none">
      <CardBody>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 md:gap-10 p-4 w-full">
          <div className="flex flex-col justify-center items-center gap-8 md:gap-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">{product.title}</h1>
            <p className="w-3/4 text-sm sm:text-base md:text-lg text-center">{product.description}</p>
            <Button className="w-260px h-380px font-bold text-lg bg-primary text-focus text-center justify-center" color="success">
              ¡Lo quiero!
            </Button>
          </div>
          <div className="w-full md:w-1/2 md:left-0 md:top-0 flex justify-center">
            <Image
              alt={product.description}
              src={product.image}
              width="554px"  
              height="400px"
            />
          </div>
        </div>
      </CardBody>
    </Card>
    
  );
}