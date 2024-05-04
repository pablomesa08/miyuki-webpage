import ProductGrid from "@/components/products/productGrid";
import Footer from "@/components/ui/navbar/footer";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import { useProduct } from "@/hooks/useProduct";
import { ProductGridType, ProductIdNameImage } from "@/types/productType";
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
  const { tag } = router.query;
  const filters: string[] = ["bonito", "pajaro", "pez"];

  const { getAllProducts } = useProduct(); // TODO: No traer todos los productos, solo los que tengan el tag
  const [products, setProduct] = useState<ProductGridType[] | null>(null);
  const [loadingProducts, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!products) {
      console.log("getting all products");
      setLoading(true);
      setError(null);
      getAllProducts()
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
  }, [getAllProducts, products]);

  return (
    <div className="flex flex-col min-h-screen  justify-between">
      <NavbarHome />
      <main className="grow">
        <section className="flex flex-row">
          <article className="flex flex-col w-[150px] ml-5 mr-5 mt-44 h-max">
            <Card>
              <CardBody>
                <h1 className="text-xl font-bold text-center">Filtros</h1>
                <CheckboxGroup className="mt-1">
                  {filters.map((filter, index) => (
                    <div key={index}>
                      <Checkbox value={filter}>{filter}</Checkbox>
                    </div>
                  ))}
                </CheckboxGroup>
              </CardBody>
            </Card>
          </article>
          <article className=" flex flex-col grow items-center mt-5 mr-10  w-full  ">
            <h1 className="text-2xl uppercase font-bold ">{tag}</h1>
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
