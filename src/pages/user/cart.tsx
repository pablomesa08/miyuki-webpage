import { useState, useEffect } from "react";
import ProductCartGrid from "@/components/products/productCartGrid";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { ProductCartType } from "@/types/productType";
import { Button } from "@nextui-org/react";

export default function Cart() {
  const { isLoading, isLoggedIn } = useAuth();
  const { getProducts } = useCart();
  const [products, setProducts] = useState<ProductCartType[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      getProducts().then((loadedProducts) => {
        setProducts(loadedProducts);
        setLoadingProducts(false);
      });
    }
  }, [isLoggedIn, getProducts]);

  if (isLoading || loadingProducts) return <p>Loading...</p>;
  if (!isLoggedIn) return <p>Please login to view your cart</p>;

  return (
    <div>
      <NavbarHome />
      <section className="flex flex-col items-center">
        <ProductCartGrid products={products} />
        <Button>Comprar</Button>
      </section>
    </div>
  );
}
