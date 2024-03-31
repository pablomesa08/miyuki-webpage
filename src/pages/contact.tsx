import ThreeImageGallery, {
  ImageInfo,
} from "@/components/ui/groupImages/threeImageGallery";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export default function Contact() {
  const characteristics: ImageInfo[] = [
    {
      imageUrl: "https://source.unsplash.com/random/150x150",
      imageTitle: "Característica 1",
      imageDescription: "Descripción. Cargos. Datos curiosos",
    },
    {
      imageUrl: "https://source.unsplash.com/random/150x150",
      imageTitle: "Característica 2",
      imageDescription: "Descripción. Cargos. Datos curiosos",
    },
    {
      imageUrl: "https://source.unsplash.com/random/150x150",
      imageTitle: "Característica 3",
      imageDescription: "Descripción. Cargos. Datos curiosos",
    },
  ];

  const artisans: ImageInfo[] = [
    {
      imageUrl: "https://source.unsplash.com/random/150x150",
      imageTitle: "Artesano 1",
      imageDescription: "",
    },
    {
      imageUrl: "https://source.unsplash.com/random/150x150",
      imageTitle: "Artesano 2",
      imageDescription: "",
    },
    {
      imageUrl: "https://source.unsplash.com/random/150x150",
      imageTitle: "Artesano 3",
      imageDescription: "",
    },
  ];
  return (
    <div>
      <NavbarHome />
      <section className="flex flex-col  items-center">
        <Card className="col-span-full sm:col-span-4 md:col-span-3 lg:col-span-2 xl:col-span-1 w-full h-[300px]">
          <CardHeader className="absolute z-10 top-1/3 flex-col items-center">
            <p className="text-4xl text-black uppercase font-bold">
              Acerca de &quot;Nombre&quot;
            </p>
            <h4 className="text-black font-medium text-medium w-96 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              aspernatur in accusamus eum quo! Eum ipsam blanditiis nam aperiam
              culpa debitis ducimus sint? Atque molestiae aut, tenetur labore ea
              ratione.
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://source.unsplash.com/random/800x600"
          />
        </Card>
        <ThreeImageGallery imageInfoArray={characteristics} />
        <Card className="mt-7 bg-gray-700">
          <CardBody className=" max-w-[600px] text-justify">
            <p>
              Descripción general de la tienda: Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut orci dui, consectetur ac tincidunt
              et, vehicula non quam. Sed eu aliquet orci, non congue erat. Cras
              ut auctor erat. Curabitur efficitur, augue ut feugiat semper, nunc
              odio iaculis turpis, non dignissim leo tortor quis tellus. Integer
              in augue mattis, gravida ante quis, tempus urna. Phasellus
              pulvinar velit sit amet lacus eleifend, in efficitur ligula
              feugiat. Fusce aliquet, magna sit amet dignissim suscipit, justo
              enim aliquet massa, id egestas nibh lacus sit amet erat. Interdum
              et malesuada fames ac ante ipsum primis in faucibus. Pellentesque
              quis lacinia enim. .
            </p>
          </CardBody>
        </Card>
        <article className="mt-5">
          <h1 className="text-2xl font-bold text-center">
            Conoce a nuestros artesanos
          </h1>
          <ThreeImageGallery imageInfoArray={artisans} />
        </article>
      </section>
    </div>
  );
}
