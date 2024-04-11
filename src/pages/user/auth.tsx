import { Button, Card, CardBody, Input, Image, Link } from "@nextui-org/react";

export default function Auth() {
  return (
    <main className="flex flex-col min-h-[100vh] items-center justify-center">
      <section className="w-full flex flex-row justify-center grow items-center">
        <Card className="  sm:h-[400px]">
          <CardBody className="flex flex-row justify-evenly gap-10 flex-wrap items-center">
            <section className="flex flex-col">
              <h1>¡Bienvenido!</h1>
              <p>Usuario/correo:</p>
              <Input
                autoFocus
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
              />
              <p>Contraseña:</p>
              <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
              />
              <Button>Iniciar sesión</Button>
              <p>
                ¿No tienes una cuenta?{" "}
                <Link href="/user/register">Registrate</Link>
              </p>
            </section>
            <section>
              <Image
                alt="Random image"
                src="https://source.unsplash.com/random/700x500"
                width={300}
                height={250}
              ></Image>
            </section>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
