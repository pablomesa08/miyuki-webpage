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
