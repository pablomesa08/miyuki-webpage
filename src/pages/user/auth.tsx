import { Card, CardBody, Input, Image, Link, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaEyeSlash } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { useAuth } from "@/hooks/useAuth";

export default function Auth() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Email validation function
  const validateEmail = (email: string) =>
    RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).exec(email);

  // Determine if email is invalid
  const isEmailInvalid =
    !validateEmail(credentials.email) && credentials.email !== "";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent the form from submitting and refreshing the page
    if (isEmailInvalid) {
      setError("Por favor, ingrese un correo válido");
      return;
    }
    login(credentials.email, credentials.password).catch((error) => {
      setError("Error al iniciar sesión, intente de nuevo.");
    });
    setError("");
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <main className="flex flex-col min-h-[100vh] items-center justify-center">
      <Link href="/">Regresar a página principal</Link>
      <section className="w-full flex flex-row justify-center grow items-center">
        <Card>
          <CardBody className="flex flex-row justify-evenly gap-10 flex-wrap items-center w-[400px] sm:w-[600px] md:w-[800px] lg:w-[1000px]">
            <form onSubmit={handleLogin} className="flex flex-col gap-2">
              <h1 className="font-bold text-center">¡Bienvenido!</h1>
              <p>Usuario/correo:</p>
              <Input
                isRequired
                placeholder="Ingrese su correo"
                variant="bordered"
                radius="full"
                type="email"
                label="Email"
                name="email"
                color={isEmailInvalid ? "danger" : "default"}
                errorMessage={
                  isEmailInvalid && "Por favor, ingrese un correo válido"
                }
                onChange={handleInputChange}
              />
              <p>Contraseña:</p>
              <Input
                placeholder="Ingrese su contraseña"
                isRequired
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <BsEyeFill className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                name="password"
                variant="bordered"
                radius="full"
                onChange={handleInputChange}
              />
              <Button type="submit">Iniciar sesión</Button>
              {error && (
                <p className="text-danger mt-2 text-center w-64">{error}</p>
              )}
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
              />
            </section>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
