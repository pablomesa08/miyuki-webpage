import { Button, Card, CardBody, Image } from "@nextui-org/react";

export default function FeaturedSocialMedia() {
  const socialMedia = {
    image: "https://via.placeholder.com/300x250",
  };

  return (
    <Card className="border-none maw-w-[610px] bg-transparent mt-5">
      <CardBody>
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-col w-1/2 items-center">
            <Image
              alt="An image of a product"
              src={socialMedia.image}
              width={300}
              height={250}
            />
          </div>
          <div className="flex flex-col  max-w-[350px] gap-2 items-center">
            <h1 className="text-2xl font-bold text-center">
              Siguenos en redes sociales
            </h1>
            <Button className="w-24 font-bold bg-primary text-focus" color="success">
              Instagram
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
