import React from 'react';
import ThreeImageGallery, { ImageInfo } from "../ui/groupImages/threeImageGallery";

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
    <section className="flex justify-center items-center w-full">
      <h1 className="text-2xl font-bold text-center mb-6">Etiquetas favoritas</h1>
      <div className="flex justify-around w-full mx-auto">
        <ThreeImageGallery imageInfoArray={accessories} />
      </div>
      
    </section>
  );
}
