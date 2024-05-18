import ThreeImageGallery, { ImageInfo } from "@/components/ui/groupImages/threeImageGallery";
import Footer from "@/components/ui/navbar/footer";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export default function Contact() {

  const characteristics: ImageInfo[] = [
    {
      imageUrl: "/Images/backround/azul.png",
      imageTitle: "Característica 1",
      imageDescription: "Descripción. Cargos. Datos curiosos",
    },
    {
      imageUrl: "/Images/backround/azul.png",
      imageTitle: "Característica 2",
      imageDescription: "Descripción. Cargos. Datos curiosos",
    },
    {
      imageUrl: "/Images/backround/azul.png",
      imageTitle: "Característica 3",
      imageDescription: "Descripción. Cargos. Datos curiosos",
    },
  ];

  const artisans: ImageInfo[] = [
    {
      imageUrl: "/Images/backround/verdeazul.png",
      imageTitle: "Artesano 1",
      imageDescription: "",
    },
    {
      imageUrl: "/Images/backround/verdeazul.png",
      imageTitle: "Artesano 2",
      imageDescription: "",
    },
    {
      imageUrl: "/Images/backround/verdeazul.png",
      imageTitle: "Artesano 3",
      imageDescription: "",
    },
  ];

  return (
    <div>
      <NavbarHome />
      <section className="flex flex-col items-center px-4">
        <Card className="relative w-full h-[300px] mb-8">
          <CardHeader className="absolute z-10 top-1/3 flex-col items-center">
            <p className="text-4xl text-black uppercase font-bold">Acerca de &quot;Nombre&quot;</p>
            <h4 className="text-black font-medium text-medium w-96 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo aspernatur in accusamus eum quo! Eum ipsam
              blanditiis nam aperiam culpa debitis ducimus sint? Atque molestiae aut, tenetur labore ea ratione.
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/Images/backround/verdeazul.png"
          />
        </Card>
        <ThreeImageGallery imageInfoArray={characteristics} textColor="text-black" />
        <Card className="mt-7 w-full max-w-screen-lg">
          <CardBody className="text-justify">
            <p>
              Descripción general de la tienda: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci dui,
              consectetur ac tincidunt et, vehicula non quam. Sed eu aliquet orci, non congue erat. Cras ut auctor erat.
              Curabitur efficitur, augue ut feugiat semper, nunc odio iaculis turpis, non dignissim leo tortor quis
              tellus. Integer in augue mattis, gravida ante quis, tempus urna. Phasellus pulvinar velit sit amet lacus
              eleifend, in efficitur ligula feugiat. Fusce aliquet, magna sit amet dignissim suscipit, justo enim aliquet
              massa, id egestas nibh lacus sit amet erat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Pellentesque quis lacinia enim. .
            </p>
          </CardBody>
        </Card>
        <article className="mt-5 w-full max-w-screen-lg">
          <h1 className="text-2xl font-bold text-center mb-4">Conoce a nuestros artesanos</h1>
          <ThreeImageGallery imageInfoArray={artisans} textColor="text-black" />
        </article>
      </section>
      <Footer />
    </div>
  );
}
