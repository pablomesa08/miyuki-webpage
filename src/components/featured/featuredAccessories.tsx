import ThreeImageGallery, {
  ImageInfo,
} from "../ui/groupImages/threeImageGallery";
export default function FeaturedAccessories() {
  const accessories: ImageInfo[] = [
    {
      imageUrl: "https://source.unsplash.com/random/150x150",
      imageTitle: "Finalizados",
      imageDescription: "Escoge un accesorio diseñado por completo",
    },
    {
      imageUrl: "https://source.unsplash.com/random/150x150",
      imageTitle: "Dijes",
      imageDescription:
        "Escoge el dije que más te guste y personaliza su formato de accesorio",
    },
    {
      imageUrl: "https://source.unsplash.com/random/150x150",
      imageTitle: "Personalizar",
      imageDescription: "Adjunta la imagen que quieres convertir en accesorio",
    },
  ];

  return (
    <section>
      <h1 className="text-2xl font-bold text-center">
        Compra nuestros accesorios
      </h1>
      <ThreeImageGallery imageInfoArray={accessories} />
    </section>
  );
}
