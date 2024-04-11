import { Button, Card, CardBody, Input, Image, Link } from "@nextui-org/react";

export default function Auth() {
  return (
    <main className="flex flex-col min-h-[100vh] items-center justify-center">
      <section className="w-full flex flex-row justify-center grow items-center">
        <Card className="">
          <CardBody className="flex flex-row justify-evenly gap-10 flex-wrap items-center  w-[400px] sm:w-[600px] md:w-[800px] lg:w-[1000px]">
            <section className="flex flex-col gap-2">
              <h1 className="font-bold text-center">¡Bienvenido!</h1>
              <p>Usuario/correo:</p>
              <Input
                autoFocus
                placeholder="Ingrese su correo"
                variant="bordered"
                radius="full"
              />
              <p>Contraseña:</p>
              <Input
                placeholder="Ingrese su contraseña"
                type="password"
                variant="bordered"
                radius="full"
              />
              <Button>Iniciar sesión</Button>
              <p>
                ¿No tienes una cuenta?{" "}
                <Link href="/user/register">Registrate</Link>
              </p>
            </section>
            <section className="mt-5 mb-5">
              <Image
                alt="Random image"
                src="https://source.unsplash.com/random/500x400"
                width={500}
                height={400}
              ></Image>
            </section>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
