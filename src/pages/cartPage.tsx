import React, { useEffect, useState } from "react";
import CartItem from "../components/cart/cartItem";
import CartSummary from "../components/cart/CartSummary";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import Footer from "@/components/ui/navbar/footer";
import {
  Format,
  ColorSet,
  ProductCartType,
  Promotion,
} from "@/types/productType";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useOrders } from "@/hooks/useOrders";

export default function CartPage() {
  const { isLoading, isLoggedIn } = useAuth();
  const { getProducts, getDiscount } = useCart();
  const [products, setProducts] = useState<ProductCartType[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [promo, setPromotion] = useState<Promotion | null>(null);
  const {
    isOpen: isErrorPromotionOpen,
    onOpen: onErrorPromotionOpen,
    onClose: onErrorPromotionOpenChange,
  } = useDisclosure();
  const {
    isOpen: isSuccessOrderOpen,
    onOpen: onSuccessOrderOpen,
    onClose: onSuccessOrderOpenChange,
  } = useDisclosure();
  // modal for error creating order
  const {
    isOpen: isErrorOrderOpen,
    onOpen: onErrorOrderOpen,
    onClose: onErrorOrderOpenChange,
  } = useDisclosure();
  const { createOrder } = useOrders();

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
  const onCheckout = async () => {
    let susccess = false;
    if (promo) {
      susccess = await createOrder(promo.id);
    } else {
      susccess = await createOrder();
    }
    if (susccess) {
      setProducts([]);
      setPromotion(null);
      onSuccessOrderOpen();
    } else {
      onErrorOrderOpen();
    }
  };

  const handlePromotion = async (discountCode: string) => {
    try {
      const promo = await getDiscount(discountCode);
      if (promo.isAvailable === false) {
        onErrorPromotionOpen();
        return;
      }
      setPromotion(promo);
      console.log("Applied discount", promo);
    } catch (error) {
      onErrorPromotionOpen();
      console.error("Failed to apply discount", error);
    }
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

  const getPromotion = () => {
    if (!promo) return 0;
    return (getSubtotal() * promo.value) / 100;
  };

  const getTotal = () => {
    return getSubtotal() - getPromotion();
  };

  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isErrorPromotionOpen}
        onOpenChange={onErrorPromotionOpen}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cuidado ⚠️
              </ModalHeader>
              <ModalBody>
                <p>Código de descuento no valido, por favor intenta con otro</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onErrorPromotionOpenChange}
                >
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        backdrop="opaque"
        isOpen={isSuccessOrderOpen}
        onOpenChange={onSuccessOrderOpen}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                ¡Pedido Realizado! 🎉
              </ModalHeader>
              <ModalBody>
                <p>Pedido realizado con exito</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onSuccessOrderOpenChange}
                >
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        backdrop="opaque"
        isOpen={isErrorOrderOpen}
        onOpenChange={onErrorOrderOpen}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Upps, algo salio mal 😢
              </ModalHeader>
              <ModalBody>
                <p>No es culpa tuya, intenta más tarde</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onErrorOrderOpenChange}
                >
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
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
              <CartSummary
                subtotal={getSubtotal()}
                onCheckout={onCheckout}
                onPromotion={handlePromotion}
                promo={promo}
                promoTotal={getPromotion()}
                total={getTotal()}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
