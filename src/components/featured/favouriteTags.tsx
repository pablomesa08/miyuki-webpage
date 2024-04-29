import ThreeImageGallery, {
  ImageInfo,
} from "../ui/groupImages/threeImageGallery";
export default function FavouriteTags() {
  const accessories: ImageInfo[] = [
    {
      imageUrl: "/Images/backround/verdeazul.png",
      imageTitle: "Flores",
      imageDescription: "",
    },
    {
      imageUrl: "/Images/backround/verdeazul.png",
      imageTitle: "Animales",
      imageDescription: "",
    },
    {
      imageUrl: "/Images/backround/verdeazul.png",
      imageTitle: "Personajes",
      imageDescription: "",
    },
  ];

  return (
    <section>
      <h1 className="text-2xl font-bold text-center">Etiquetas favoritas</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '600px' }}>
      <ThreeImageGallery imageInfoArray={accessories} />
      </div>
      
    </section>
  );
}
