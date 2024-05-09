import { Button, Card, CardBody, Image } from "@nextui-org/react";

export default function FeaturedSocialMedia() {
  const socialMedia = {
    image: "/Images/backround/azul.png",
  };

  return (<Card className="border-none max-w-full bg-transparent shadow-none">
    <CardBody>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 p-4 w-full">
        <div className="w-full md: w-3/5 flex justify-center md:justify-start">
          <Image
            alt="An image of the instagram"
            src={socialMedia.image}
            width="524px"
            height="300px"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-4 md:gap-8 w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Siguenos en redes sociales  
          </h1>
          <Button className="w-260px h-380px font-bold text-lg bg-primary text-focus" color="success">
          Instagram
          </Button>
        </div>
      </div>
    </CardBody>
  </Card>



  );
}
