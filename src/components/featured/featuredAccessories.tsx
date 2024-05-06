import ThreeImageGallery, {
  ImageInfo,
} from "../ui/groupImages/threeImageGallery";
export default function FeaturedAccessories() {
  const accessories: ImageInfo[] = [
    {
      imageUrl: "/Images/backround/morado.png",
      imageTitle: "Finalizados",
      imageDescription: "Escoge un accesorio diseñado por completo",
    },
    {
      imageUrl: "/Images/backround/morado.png",
      imageTitle: "Dijes",
      imageDescription:
        "Escoge el dije que más te guste y personaliza su formato de accesorio",
    },
    {
      imageUrl: "/Images/backround/morado.png",
      imageTitle: "Personalizar",
      imageDescription: "Adjunta la imagen que quieres convertir en accesorio",
    },
  ];

  return (
    <section className="p-4">
      <h1 className="text-4xl font-bold text-center text-white">
        Compra nuestros accesorios
      </h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: 'full' }}>
      <ThreeImageGallery imageInfoArray={accessories} />
      </div>
      
    </section>
  );
}
