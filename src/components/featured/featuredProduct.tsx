import { Button, Card, CardBody, Image } from "@nextui-org/react";

export default function FeaturedProduct() {
  const product = {
    title: "¡Llegaron los pandas más lindos!",
    description: "Traemos nuevos diseños de pandas para ti, desde pandas durmiendo hasta pandas felices, ¡no te los pierdas!",
    image: "/Images/f6dc4f35-b993-4476-98ab-40314faa0bda.png",
    backround: "/Images/backround/azul.png",
  };return (
    <Card className="border-none max-w-full bg-transparent shadow-none">
      <CardBody>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 md:gap-10 p-4 w-full">
          <div className="flex flex-col justify-center items-center gap-8 md:gap-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">{product.title}</h1>
            <p className="w-3/4 text-sm sm:text-base md:text-lg text-center">{product.description}</p>
            <a href="http://localhost:3000/products/product?productId=f6dc4f35-b993-4476-98ab-40314faa0bda" target="_blank" rel="noopener noreferrer">
              <Button className="w-260px h-380px font-bold text-lg bg-primary text-focus text-center justify-center" color="success">
                ¡Lo quiero!
              </Button>
            </a>
          </div>
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80"
              style={{ backgroundImage: `url(${product.backround})`, zIndex: 0 }}
            ></div>
            <Image
              alt={product.description}
              src={product.image}
              width="554px"
              height="400px"
              className="relative z-10"
            />
          </div>
        </div>
      </CardBody>
    </Card>
    
  );
}