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
    <main className="flex flex-col min-h-[100vh] items-center justify-center">
      <Link href="/">Regresar a página principal</Link>
      <section className="w-full flex flex-row justify-center grow items-center">
        <Card className="">
          <CardBody className="flex flex-row justify-evenly gap-10 flex-wrap items-center w-[400px] sm:w-[600px] md:w-[800px] lg:w-[1000px] ">
            <section>
              <Image
                alt="Random image"
                src="https://source.unsplash.com/random/700x500"
                width={300}
                height={250}
              ></Image>
            </section>
            <section className="flex flex-col w-[400px] gap-1">
              <h1 className=" text-center font-bold mb-3">
                Información de Registro
              </h1>
              <p>Nombre Completo:</p>
              <Input
                autoFocus
                placeholder="Ingrese tu nombre completo"
                variant="bordered"
                radius="full"
              />
              <p>Usuario:</p>
              <Input
                placeholder="Ingresa tu usuario"
                variant="bordered"
                radius="full"
              />
              <p>Correo:</p>
              <Input
                value={email}
                type="email"
                variant="bordered"
                placeholder="Ingresa tu correo"
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "success"}
                errorMessage={isInvalid && "Por favor ingresa un correo valido"}
                onValueChange={setEmail}
                radius="full"
              />
              <p>Contraseña:</p>
              <Input
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
              />
              <p>Confirma la contraseña:</p>
              <Input
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
              />

              <Button className="mt-1">Regístrate</Button>
              <p className="text-center">
                ¿Ya tienes cuenta? <Link href="/user/auth">Inicia Sesión</Link>
              </p>
            </section>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
