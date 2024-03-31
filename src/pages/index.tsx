import EmblaCarousel from "@/components/ui/imageCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import FeaturedProduct from "@/components/featured/featuredProduct";
import FeaturedAccessories from "@/components/featured/featuredAccessories";
import FavouriteTags from "@/components/featured/favouriteTags";
import FeaturedSocialMedia from "@/components/featured/featuredSocialMedia";

export default function Page() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const favouriteClients = [
    {
      image: "https://source.unsplash.com/random/200x200",
      text: "",
    },
    {
      image: "https://source.unsplash.com/random/200x200",
      text: "",
    },
    {
      image: "https://source.unsplash.com/random/200x200",
      text: "",
    },
  ];

  return (
    <div>
      <NavbarHome />

      <section className="flex flex-col  items-center">
        <FeaturedProduct />
        <FeaturedAccessories />
        <article className="mt-5">
          <h1 className=" text-2xl text-center mb-5">
            Favoritos de nuestros clientes
          </h1>
          <EmblaCarousel slides={favouriteClients} options={OPTIONS} />
        </article>
        <FavouriteTags />
        <FeaturedSocialMedia />
      </section>
    </div>
  );
}
