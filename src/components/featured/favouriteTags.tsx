import ThreeImageGallery, {
  ImageInfo,
} from "../ui/groupImages/threeImageGallery";
export default function FavouriteTags() {
  const accessories: ImageInfo[] = [
    {
      imageUrl: "https://source.unsplash.com/random/150x150",
      imageTitle: "Flores",
      imageDescription: "",
    },
    {
      imageUrl: "https://source.unsplash.com/random/150x150",
      imageTitle: "Animales",
      imageDescription: "",
    },
    {
      imageUrl: "https://source.unsplash.com/random/150x150",
      imageTitle: "Personajes",
      imageDescription: "",
    },
  ];

  return (
    <section>
      <h1 className="text-2xl font-bold text-center">Etiquetas favoritas</h1>
      <ThreeImageGallery imageInfoArray={accessories} />
    </section>
  );
}
