import ProductCartGrid from "@/components/products/productCartGrid";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import { useAuth } from "@/hooks/useAuth";
import { ProductCartType } from "@/types/productType";
import { Button } from "@nextui-org/react";

export default function Cart() {
  const { isLoading, isLoggedIn } = useAuth();

  if (isLoading) return <p>Loading...</p>;
  if (!isLoggedIn) return <p>Please login to view your cart</p>;

  const product1: ProductCartType = {
    id: "1",
    name: "Product 1",
    image: "https://via.placeholder.com/300x250",
    basePrice: 100,
    format: {
      id: "1",
      name: "Format 1",
      price: 100,
    },
    colorSet: {
      id: "1",
      name: "Color Set 1",
      colors: ["#000000", "#FFFFFF", "#FF0000"],
    },
    quantity: 1,
  };

  const product2: ProductCartType = {
    id: "2",
    name: "Product 2",
    image: "https://via.placeholder.com/300x250",
    basePrice: 200,
    format: {
      id: "1",
      name: "Format 1",
      price: 15,
    },
    colorSet: {
      id: "1",
      name: "Color Set 1",
      colors: ["#0FF000", "#FAF2BF", "#FF0190"],
    },
    quantity: 3,
  };

  const productMock: ProductCartType[] = [product1, product2];

  return (
    <div>
      <NavbarHome />
      <section className="flex flex-col  items-center">
        <ProductCartGrid products={productMock} />
        <Button>Comprar</Button>
      </section>
    </div>
  );
}
