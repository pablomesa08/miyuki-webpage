import ThreeRectangleImageGallery, { RectangleImageInfo } from "@/components/ui/groupImages/ThreeRectangleImageGallery";
import ThreeImageGallery, { ImageInfo as CircleImageInfo } from "@/components/ui/groupImages/threeImageGallery";
import Footer from "@/components/ui/navbar/footer";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export default function Contact() {
  const characteristics: RectangleImageInfo[] = [
    {
      imageUrl: "/Images/color.jpg",
      imageTitle: "Color",
      imageDescription: "  ",
    },
    {
      imageUrl: "/Images/creatividad.jpg",
      imageTitle: "Creatividad",
      imageDescription: "  ",
    },
    {
      imageUrl: "/Images/conexion.jpg",
      imageTitle: "Conexión",
      imageDescription: "  ",
    },
  ];

  const artisans: CircleImageInfo[] = [
    {
      imageUrl: "/Images/backround/verdeazul.png",
      backround:"/Images/backround/verdeazul.png",
      imageTitle: "Artesano A",
      imageDescription: "Descripción. Cargos. Datos curiosos",
    },
    {
      imageUrl: "/Images/backround/verdeazul.png",
      backround:"/Images/backround/verdeazul.png",
      imageTitle: "Natalia Naranjo",
      imageDescription: "Fundadora y artesana principal. Le gustan los gatos",
    },
    {
      imageUrl: "/Images/backround/verdeazul.png",
      backround:"/Images/backround/verdeazul.png",
      imageTitle: "Artesano 3",
      imageDescription: "Descripción. Cargos. Datos curiosos",
    },
  ];

  return (
    <div>
      <NavbarHome />
      <div className="w-full">
        <div className="container mx-auto my-16 px-4 sm:px-6 lg:px-8">
          <section className="flex flex-col items-center space-y-16">
            <Card className="relative h-[60vh] w-full mb-8">
              <CardHeader className="absolute z-10 top-1/3 flex-col items-center">
                <p className="text-4xl text-white uppercase font-bold mb-6">Acerca de &quot;KIWI&quot;</p>
                <h4 className="text-black font-medium text-medium w-[80vh] text-center">
                Nuestros dijes de miyuki no solo son accesorios, son pequeñas obras de arte diseñadas para llevar alegría y color a tu día a día.
                </h4>
              </CardHeader>
              <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover opacity-20"
                src="/Images/backround/verde.png"
              />
            </Card>
            <ThreeRectangleImageGallery imageInfoArray={characteristics} textColor="text-black" />
            <div className="w-screen flex justify-center py-24 bg-focus bg-opacity-75">
              <div className="w-full max-w-3xl bg-primary-50 p-6 rounded-md shadow-lg text-white relative z-10">
                <p className="text-justify text-xl">
                En Kiwi, cada pieza de miyuki es más que un simple accesorio; es una expresión de arte y una celebración de individualidad. Nuestra tienda se especializa en dijes únicos, meticulosamente hechos a mano, que capturan la belleza y la diversidad del mundo que nos rodea. Desde la delicadeza de las flores hasta la juguetonía de los animales y la deliciosa apariencia de los alimentos, nuestros dijes son perfectos para quienes buscan añadir un toque especial y personal a su estilo.
                </p>
              </div>
            </div>
            <article className="mt-5 w-full">
              <h1 className="text-2xl font-bold text-center mb-4">Conoce a nuestros artesanos</h1>
              <ThreeImageGallery imageInfoArray={artisans} textColor="text-black" />
            </article>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
