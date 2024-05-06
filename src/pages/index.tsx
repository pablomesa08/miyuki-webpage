import EmblaCarousel from "@/components/ui/imageCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import FeaturedProduct from "@/components/featured/featuredProduct";
import FeaturedAccessories from "@/components/featured/featuredAccessories";
import FavouriteTags from "@/components/featured/favouriteTags";
import FeaturedSocialMedia from "@/components/featured/featuredSocialMedia";
import Footer from "@/components/ui/navbar/footer";
import { BiFullscreen } from "react-icons/bi";

export default function Page() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const favouriteClients = [
    {
      image: "/Images/backround/verde.png",
      text: "",
    },
    {
      image: "/Images/backround/verde.png",
      text: "",
    },
    {
      image: "/Images/backround/verde.png",
      text: "",
    },
  ];

  return (
    <div>
      <NavbarHome />
      <div className="mt-5"></div>
      <section className="flex flex-col  items-center w-full">
        
        <div className="w-full max-w-screen-xl mx-auto">
        <FeaturedProduct />
        <div className="bg-focus">
        <FeaturedAccessories />
        </div>
        
        <article className="mt-5">
          <h1 className="text-2xl text-center mb-5">
            Favoritos de nuestros clientes
          </h1>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <EmblaCarousel slides={favouriteClients} options={OPTIONS} />
          </div>
        </article>
        <FavouriteTags />
        <FeaturedSocialMedia />
      </div>
      
      </section>
      <Footer />
    </div>
  );
}
