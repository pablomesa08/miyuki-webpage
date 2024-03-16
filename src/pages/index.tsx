import EmblaCarousel from "@/components/ui/imageCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import { Divider } from "@nextui-org/react";

export default function Page() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const announces = [
    {
      image: "https://source.unsplash.com/random/600x300",
      text: "",
    },
    {
      image: "https://source.unsplash.com/random/600x300",
      text: "",
    },
    {
      image: "https://source.unsplash.com/random/600x300",
      text: "",
    },
  ];

  const categories = [
    {
      image: "https://source.unsplash.com/random/200x200",
      text: "Dijes",
    },
    {
      image: "https://source.unsplash.com/random/200x200",
      text: "Accesorios finalizados",
    },
    {
      image: "https://source.unsplash.com/random/200x200",
      text: "Personalizar",
    },
  ];

  const favouriteTags = [
    {
      image: "https://source.unsplash.com/random/200x200",
      text: "Animales",
    },
    {
      image: "https://source.unsplash.com/random/200x200",
      text: "Flores",
    },
    {
      image: "https://source.unsplash.com/random/200x200",
      text: "Personajes",
    },
  ];

  return (
    <div>
      <NavbarHome />

      <section className="flex flex-col  items-center">
        <EmblaCarousel slides={announces} options={OPTIONS} />
        <article className="max-w-screen-md">
          <h1 className="text-4xl">Descripción tienda</h1>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            esse doloribus corporis ut repellendus, accusantium culpa, enim
            minima molestias dolor labore ea. Ut ex pariatur officia, fugiat
            soluta distinctio quibusdam!
          </p>
        </article>
        <Divider className="h-1 max-w-screen-md bg-white mt-3 mb-3 " />

        <article>
          <h1 className=" text-2xl text-center mb-5">Categorías</h1>
          <EmblaCarousel slides={categories} options={OPTIONS} />
        </article>

        <Divider className="h-1 max-w-screen-md bg-white mt-3 mb-3 " />

        <article>
          <h1 className=" text-2xl text-center mb-5">Tags favoritos</h1>
          <EmblaCarousel slides={favouriteTags} options={OPTIONS} />
        </article>
      </section>
    </div>
  );
}
