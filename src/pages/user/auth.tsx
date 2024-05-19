import { Card, CardBody, Input, Image, Link, Button } from "@nextui-org/react";
import { useState } from "react";
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
    login(credentials.email, credentials.password).catch(() => {
      setError("Error al iniciar sesión, intente de nuevo.");
    });
    setError("");
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center bg-background no-shadow">
      <Link href="/" className="absolute top-4 left-4 text-focus">Regresar a página principal</Link>
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 p-8 rounded-lg no-shadow w-full max-w-6xl">
        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-md">
          <h1 className="font-bold text-4xl text-center mb-8">¡Bienvenido!</h1>
          <div className="flex flex-col gap-2 mt-8">
            <label htmlFor="email" className="font-semibold">Usuario/correo:</label>
            <Input
              id="email"
              isRequired
              placeholder="Ingrese su correo"
              variant="bordered"
              radius="full"
              type="email"
              name="email"
              color={isEmailInvalid ? "danger" : "default"}
              errorMessage={
                isEmailInvalid && "Por favor, ingrese un correo válido"
              }
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold">Contraseña:</label>
            <Input
              id="password"
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
          </div>
          <Button type="submit" className="mt-10 bg-focus text-lg hover:bg-purple-700 text-white rounded-full">Iniciar sesión</Button>
          {error && (
            <p className="text-danger mt-2 text-center">{error}</p>
          )}
          <p className="mt-4 text-center">
            ¿No tienes una cuenta?{" "}
            <Link href="/user/register" className="text-green-600">Regístrate</Link>
          </p>
        </form>
        <div className="flex justify-center items-center w-full md:w-1/2 hidden md:flex">
          <Image
            alt="Random image"
            src="/Images/Backround/verde.png"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}
