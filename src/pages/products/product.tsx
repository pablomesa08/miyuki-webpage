import ProductComponent, { ProductData } from "@/components/products/product";
import Footer from "@/components/ui/navbar/footer";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import { useProduct } from "@/hooks/useProduct";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Product() {
  const router = useRouter();
  const { productId } = router.query;
  const { getProductById } = useProduct();
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof productId === "string" && !product) {
      setLoading(true);
      setError(null);
      getProductById(productId)
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
  }, [getProductById, product, productId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>; // Dependency array, to re-run this effect when productId changes

  return (
    <div className="flex flex-col min-h-[100vh] justify-between">
      <NavbarHome />
      <main>
        <div className="flex items-center justify-center h-full ">
          {product ? (
            <ProductComponent product={product} />
          ) : (
            <div>Product not found</div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
