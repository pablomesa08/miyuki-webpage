import { Button, Card, CardBody, Input, Image, Link } from "@nextui-org/react";
import React from "react";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [equalPassword, setEqualPassword] = React.useState("");

  const validateEmail = (value: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/.exec(value);

  const validatePassword = (value: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.exec(
      value
    );

  const isInvalid = React.useMemo(() => {
    if (email === "") return false;
    return !validateEmail(email);
  }, [email]);

  const isPasswordInvalid = React.useMemo(() => {
    if (password === "") return false;
    return !validatePassword(password);
  }, [password]);

  const isPasswordEqual = React.useMemo(() => {
    if (password === "" || equalPassword === "") return true;
    return password === equalPassword;
  }, [password, equalPassword]);

  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center bg-background no-shadow">
      <Link href="/" className="absolute top-4 left-4 text-focus">Regresar a página principal</Link>
      <section className="flex flex-col md:flex-row items-center justify-center gap-16 p-2 rounded-lg no-shadow w-full max-w-6xl">
        <form className="flex flex-col gap-2 w-full max-w-md">
          <h1 className="font-bold text-2xl text-center mb-4">Información de Registro</h1>
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="font-semibold">Nombre Completo:</label>
            <Input
              id="fullName"
              autoFocus
              placeholder="Ingrese tu nombre completo"
              variant="bordered"
              radius="full"
              className="custom-input"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="font-semibold">Usuario:</label>
            <Input
              id="username"
              placeholder="Ingresa tu usuario"
              variant="bordered"
              radius="full"
              className="custom-input"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">Correo:</label>
            <Input
              id="email"
              value={email}
              type="email"
              variant="bordered"
              placeholder="Ingresa tu correo"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "success"}
              errorMessage={isInvalid && "Por favor ingresa un correo valido"}
              onValueChange={setEmail}
              radius="full"
              className="custom-input"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">Contraseña:</label>
            <Input
              id="password"
              value={password}
              type="password"
              variant="bordered"
              placeholder="Ingresa tu contraseña"
              isInvalid={isPasswordInvalid}
              color={isPasswordInvalid ? "danger" : "success"}
              errorMessage={
                isPasswordInvalid &&
                "Debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial (@$!%*?&)."
              }
              onValueChange={setPassword}
              radius="full"
              className="custom-input"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="equalPassword" className="font-semibold">Confirma la contraseña:</label>
            <Input
              id="equalPassword"
              value={equalPassword}
              type="password"
              variant="bordered"
              placeholder="Confirma tu contraseña"
              isInvalid={!isPasswordEqual}
              color={isPasswordEqual ? "success" : "danger"}
              errorMessage={
                !isPasswordEqual && "Las contraseñas no coinciden."
              }
              onValueChange={setEqualPassword}
              radius="full"
              className="custom-input"
            />
          </div>
          <Button className="mt-4 bg-focus text-lg hover:bg-purple-700 text-white rounded-full h-10">Regístrate</Button>
          <p className="mt-4 text-center">
            ¿Ya tienes cuenta? <Link href="/user/auth" className="text-green-600">Inicia Sesión</Link>
          </p>
        </form>
        <div className="flex justify-center items-center w-full md:w-1/2 hidden md:flex">
          <Image
            alt="Random image"
            src="/Images/Backround/morado.png"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}
