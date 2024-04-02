import ProductGrid from "@/components/products/productGrid";
import Footer from "@/components/ui/navbar/footer";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Tag() {
  const router = useRouter();
  const { tag } = router.query;
  const filters: string[] = ["bonito", "pajaro", "pez"];
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
            <ProductGrid />
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
