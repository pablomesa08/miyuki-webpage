import EmblaCarousel from "@/components/ui/imageCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import NavbarHome from "@/components/ui/navbar/navbarHome";

export default function Page() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES = [
    "https://images.pexels.com/photos/19597529/pexels-photo-19597529/free-photo-of-hombre-playa-arena-perro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/19877487/pexels-photo-19877487/free-photo-of-madera-ligero-amanecer-paisaje.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/20623990/pexels-photo-20623990/free-photo-of-herrerillo-azul-de-ensueno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div>
      <NavbarHome />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
