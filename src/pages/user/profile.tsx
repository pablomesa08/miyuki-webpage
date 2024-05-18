import React from "react";
import UserProfile from "../../components/user/UserProfile";
import Wishlist from "../../components/user/Wishlist";
import Footer from "@/components/ui/navbar/footer";
import NavbarHome from "@/components/ui/navbar/navbarHome";

const profile: React.FC = () => {
  const user = {
    username: "Natynaro",
    fullName: "Natalia Naranjo",
    email: "natynaro@gmail.com",
    address: "Calle 80 #20-44 apto 666, Ant, Med",
  };

  const wishlistProducts = [
    { id: 1, name: "Producto 1", format: "#123", color: "green", price: 100.0 },
    { id: 2, name: "Producto 2", format: "#124", color: "blue", price: 150.0 },
    {
      id: 3,
      name: "Producto 3",
      format: "#125",
      color: "purple",
      price: 200.0,
    },
  ];

  return (
    <div className="flex flex-col min-h-[100vh] justify-between">
      <NavbarHome />
      <main>
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <UserProfile user={user} />
          </div>
          <div className="col-span-2">
            <Wishlist products={wishlistProducts} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default profile;

/*

<<<<<<< HEAD
import ProductFavoriteCard from "@/components/products/productFavoriteCard";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import { useProduct } from "@/hooks/useProduct";
import { ProductIdNameImage } from "@/types/productType";
import { useEffect, useState } from "react";

export default function Profile() {
  const { getFavoriteProducts } = useProduct();
  const [favorites, setProduct] = useState<ProductIdNameImage[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!favorites) {
      setLoading(true);
      setError(null);
      getFavoriteProducts()
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch product:", err);
          setError(err.message || "Failed to load product");
          setLoading(false);
        });
    }
  }, [getFavoriteProducts, favorites]);

  let content;
  if (loading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error: {error}</div>;
  } else if (favorites) {
    content = <ProductFavoriteCard product={favorites} />;
  } else {
    content = <div>Product not found</div>;
  }

  return (
    <div>
      <NavbarHome />
      <article className="flex items-center justify-center h-full">
        <section>
          <h1>Favoritos del usuario</h1>
          {content}
        </section>
      </article>

    </div>
  );
}
*/
