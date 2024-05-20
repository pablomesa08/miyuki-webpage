import ProductGrid from "@/components/products/productGrid";
import Footer from "@/components/ui/navbar/footer";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import { useProduct } from "@/hooks/useProduct";
import { ProductGridType } from "@/types/productType";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Tag() {
  const router = useRouter();
  const { tag, categories, formats } = router.query;

  const { getProductByCategoriesAndFormats } = useProduct();
  const [products, setProducts] = useState<ProductGridType[] | null>(null);
  const [loadingProducts, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let categoryArray: string[] = [];
    let formatArray: string[] = [];
    if (categories) {
      categoryArray = categories.toString().split(",");
    }
    if (formats) {
      formatArray = formats.toString().split(",");
    }

    console.log("Fetching products based on categories and formats");
    setLoading(true);
    setError(null);
    getProductByCategoriesAndFormats(categoryArray, formatArray)
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setError(err.message || "Failed to load products");
        setLoading(false);
      });
  }, [categories, formats, getProductByCategoriesAndFormats]);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <NavbarHome />
      <main className="grow">
        <section className="flex flex-row">
          <article className="flex flex-col w-[150px] ml-5 mr-5 mt-44 h-max">
            <Card>
              <CardBody>
                <h1 className="text-xl font-bold text-center">Filtros</h1>
                <CheckboxGroup className="mt-1">
                  {["bonito", "pajaro", "pez"].map((filter, index) => (
                    <div key={index}>
                      <Checkbox value={filter}>{filter}</Checkbox>
                    </div>
                  ))}
                </CheckboxGroup>
              </CardBody>
            </Card>
          </article>
          <article className="flex flex-col grow items-center mt-5 mr-10 w-full">
            <h1 className="text-2xl uppercase font-bold">{tag}</h1>
            <Button size="sm" variant="solid" className="self-end mr-10">
              Ordenar
            </Button>
            <div className="mt-5"></div>
            {loadingProducts ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : products ? (
              <ProductGrid products={products} />
            ) : (
              <p>Product not found</p>
            )}
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
