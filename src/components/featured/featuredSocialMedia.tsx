import { Button, Card, CardBody, Image } from "@nextui-org/react";

export default function FeaturedSocialMedia() {
  const socialMedia = {
    title: "Síguenos en redes sociales",
    description: "Sigue nuestras cuentas para estar al tanto de nuestras últimas actualizaciones y eventos.",
    image: "/Images/instagram.png",
    backround: "/Images/backround/azul.png",
  };

  return (
    <Card className="border-none max-w-full bg-transparent shadow-none">
      <CardBody>
        <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-5 md:gap-10 p-4 w-full">
          <div className="flex flex-col justify-center items-center gap-8 md:gap-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left">{socialMedia.title}</h1>
            <p className="w-3/4 text-sm sm:text-base md:text-lg text-center md:text-left">{socialMedia.description}</p>
            <a href="https://www.instagram.com/mitos_de_colores/" target="_blank" rel="noopener noreferrer">
              <Button className="w-260px h-380px font-bold text-lg bg-primary text-focus text-center justify-center" color="success">
                Instagram
              </Button>
            </a>
          </div>
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            <Image
              alt="An image of the instagram"
              src={socialMedia.image}
              className="relative z-50 custom-image h-80"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
