import React from 'react';
import ThreeImageGallery, { ImageInfo } from "../ui/groupImages/threeImageGallery";

export default function FavouriteTags() {
  const accessories: ImageInfo[] = [
    {
      imageUrl: "/Images/flores.png",
      backround: "/Images/backround/verdeazul.png",
      imageTitle: "Flores",
      imageDescription: "",
    },
    {
      imageUrl: "/Images/animales.png",
      backround: "/Images/backround/verdeazul.png",
      imageTitle: "Animales",
      imageDescription: "",
    },
    {
      imageUrl: "/Images/personajes.png",
      backround: "/Images/backround/verdeazul.png",
      imageTitle: "Personajes",
      imageDescription: "",
    },
  ];

  return (
    
    <section className="p-4">
      <h1 className="text-4xl font-bold text-center">Etiquetas favoritas</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: 'full' }}>
        <ThreeImageGallery imageInfoArray={accessories} textColor="text-black" />
      </div>
      
    </section>
  );
}
