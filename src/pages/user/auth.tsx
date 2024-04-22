import { Card, CardBody, Input, Image, Link } from "@nextui-org/react";
import { useState } from "react";

export default function Auth() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: { target: { name: string; value: string } }) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Iniciando sesión", credentials);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <main className="flex flex-col min-h-[100vh] items-center justify-center">
      <Link href="/">Regresar a página principal</Link>
      <section className="w-full flex flex-row justify-center grow items-center">
        <Card className="">
          <CardBody className="flex flex-row justify-evenly gap-10 flex-wrap items-center  w-[400px] sm:w-[600px] md:w-[800px] lg:w-[1000px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <h1 className="font-bold text-center">¡Bienvenido!</h1>
              <p>Usuario/correo:</p>
              <Input
                autoFocus
                placeholder="Ingrese su correo"
                variant="bordered"
                radius="full"
                type="email"
                name="email"
                onChange={handleLogin}
              />
              <p>Contraseña:</p>
              <Input
                placeholder="Ingrese su contraseña"
                type="password"
                name="password"
                variant="bordered"
                radius="full"
                onChange={handleLogin}
              />
              <button>Iniciar sesión</button>
              <p>
                ¿No tienes una cuenta?{" "}
                <Link href="/user/register">Registrate</Link>
              </p>
            </form>
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
