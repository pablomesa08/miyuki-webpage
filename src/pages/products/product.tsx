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
    colors: ["#000000", "#224f21", "#ff0000"],
    image: "https://source.unsplash.com/random/200x200",
  };

  return (
    <div>
      <NavbarHome />

      <h1>Product: {productId}</h1>
      <ProductComponent product={product} />
      <Footer />
    </div>
  );
}
