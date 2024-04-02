import ProductComponent, { ProductData } from "@/components/products/product";
import Footer from "@/components/ui/navbar/footer";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { productId } = router.query;

  const product: ProductData = {
    name: "Product",
    description: "Product description",
    price: 100,
    stock: 10,
    mass: 0.5,
    addedDate: new Date(),
    image: "https://source.unsplash.com/random/200x200",
    colorSets: [
      {
        name: "Set 1",
        colors: ["#ff0000", "#00ff00", "#0000ff"],
      },
      {
        name: "Set 2",
        colors: ["#ffff00", "#ff00ff", "#00ffff"],
      },
      {
        name: "Set 3",
        colors: [
          "#e74c3c",
          "#8e44ad",
          "#3498db",
          "#2ecc71",
          "#0000ff",
          "#000000",
        ],
      },
    ],
    format: ["Format 1", "Format 2", "Format 3", "Format 4"],
  };

  return (
    <div className="flex flex-col h-[89.5vh] justify-between">
      <NavbarHome />
      <main className="flex-grow">
        <div className="flex items-center justify-center h-full ">
          <ProductComponent product={product} />
        </div>
        <Footer />
      </main>
    </div>
  );
}
