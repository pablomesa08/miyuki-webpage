import React, { useEffect, useState } from "react";
import CartItem from "../components/cart/cartItem";
import CartSummary from "../components/cart/CartSummary";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import Footer from "@/components/ui/navbar/footer";
import { Format, ColorSet, ProductCartType } from "@/types/productType";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";

export default function CartPage() {
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

  /*
  const handleRemove = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const handleCheckout = () => {
    console.log("Checkout");
  };
  
  
  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  */
  const onCheckout = () => {
    console.log("Checkout");
  };

  const getSubtotal = () => {
    return products.reduce(
      (total, product) =>
        total +
        (Number(product.basePrice) + Number(product.format.price)) *
          Number(product.quantity),
      0
    );
  };

  return (
    <div className="flex flex-col min-h-[100vh] justify-between">
      <NavbarHome />
      <main className="flex flex-1 items-center justify-center">
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold text-center mb-6">
            CARRITO DE COMPRA
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-4">
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
            <CartSummary subtotal={getSubtotal()} onCheckout={onCheckout} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
