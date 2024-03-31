import ProductGrid from "@/components/products/productGrid";
import Footer from "@/components/ui/navbar/footer";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import { Button, Checkbox, CheckboxGroup } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Tag() {
  const router = useRouter();
  const { tag } = router.query;
  const filters: string[] = ["bonito", "pajaro", "pez"];
  return (
    <div>
      <NavbarHome />
      <div className="flex flex-col items-center">
        <section className="flex flex-row justify-around ">
          <article className="flex flex-col w-[150px] ml-16 mt-44">
            <h1 className="text-xl font-bold text-center">Filtros</h1>
            <CheckboxGroup>
              {filters.map((filter, index) => (
                <div key={index}>
                  <Checkbox value={filter}>{filter}</Checkbox>
                </div>
              ))}
            </CheckboxGroup>
          </article>
          <article className=" flex flex-col grow items-center mt-5 mr-10 max-w-[900px] w-full ">
            <h1 className="text-2xl uppercase font-bold ">{tag}</h1>
            <Button size="sm" variant="solid" className="self-end mr-10">
              Ordenar
            </Button>
            <div className="mt-5"></div>
            <ProductGrid />
          </article>
        </section>
      </div>
      <Footer />
    </div>
  );
}
