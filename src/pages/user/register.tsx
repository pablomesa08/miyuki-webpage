import { useAuth } from "@/hooks/useAuth";
import {
  Button,
  Card,
  CardBody,
  Input,
  Image,
  Link,
  useDisclosure,
  Modal,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalHeader,
} from "@nextui-org/react";
import React, { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [equalPassword, setEqualPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const { register } = useAuth();
  //modal for "se ha registrado correctamente"
  const {
    isOpen: isRegisteredModalOpen,
    onOpen: onRegisteredModalOpen,
    onOpenChange: onRegisteredOpenChange,
  } = useDisclosure();

  // modal for " no se ha podido registrar"
  const {
    isOpen: isNotRegisteredModalOpen,
    onOpen: onNotRegisteredModalOpen,
    onOpenChange: onNotRegisteredOpenChange,
  } = useDisclosure();

  const validateEmail = (value: string) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

  const validatePassword = (value: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      value
    );

  const isInvalid = React.useMemo(() => {
    if (email === "") return false;
    const isValid = validateEmail(email);
    return !isValid;
  }, [email]);

  const isPasswordInvalid = React.useMemo(() => {
    if (password === "") return false;
    return !validatePassword(password);
  }, [password]);

  const isPasswordEqual = React.useMemo(() => {
    if (password === "" || equalPassword === "") return true;
    return password === equalPassword;
  }, [password, equalPassword]);

  const handleRegister = async () => {
    if (isInvalid || isPasswordInvalid || !isPasswordEqual) {
      onNotRegisteredModalOpen();
      return;
    }
    try {
      await register(email, password, fullName, phone);
      onRegisteredModalOpen();
    } catch (error) {
      console.error("Registration failed", error);
      onNotRegisteredModalOpen();
    }
  };

  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isRegisteredModalOpen}
        onOpenChange={onRegisteredOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Registro Exitoso 🎉
              </ModalHeader>
              <ModalBody>
                <p>
                  ¡Te has registrado correctamente! Ahora puedes iniciar sesión
                  con tu correo y contraseña.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        backdrop="opaque"
        isOpen={isNotRegisteredModalOpen}
        onOpenChange={onNotRegisteredOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                No se ha podido registrar 😢
              </ModalHeader>
              <ModalBody>
                <p>
                  Ha ocurrido un error al intentar registrarte. Por favor
                  verifica tus datos e intenta nuevamente.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <main className="flex flex-col min-h-screen w-full items-center justify-center bg-background no-shadow">
        <Link href="/" className="absolute top-4 left-4 text-focus">
          Regresar a página principal
        </Link>
        <section className="flex flex-col md:flex-row items-center justify-center gap-16 p-2 rounded-lg no-shadow w-full max-w-6xl">
          <form className="flex flex-col gap-2 w-full max-w-md">
            <h1 className="font-bold text-2xl text-center mb-4">
              Información de Registro
            </h1>
            <div className="flex flex-col gap-1">
              <label htmlFor="fullName" className="font-semibold">
                Nombre Completo:
              </label>
              <Input
                id="fullName"
                autoFocus
                placeholder="Ingrese tu nombre completo"
                variant="bordered"
                radius="full"
                className="custom-input"
                value={fullName}
                onValueChange={setFullName}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="font-semibold">
                Usuario:
              </label>
              <Input
                id="username"
                placeholder="Ingresa tu usuario"
                variant="bordered"
                radius="full"
                className="custom-input"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-semibold">
                Correo:
              </label>
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
              <label htmlFor="phone" className="font-semibold">
                Teléfono:
              </label>
              <Input
                id="phone"
                placeholder="Ingresa tu teléfono"
                variant="bordered"
                radius="full"
                className="custom-input"
                value={phone}
                onValueChange={setPhone}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="font-semibold">
                Contraseña:
              </label>
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
              <label htmlFor="equalPassword" className="font-semibold">
                Confirma la contraseña:
              </label>
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
            <Button
              onClick={handleRegister}
              className="mt-4 bg-focus text-lg hover:bg-purple-700 text-white rounded-full h-10"
            >
              Regístrate
            </Button>
            <p className="mt-4 text-center">
              ¿Ya tienes cuenta?{" "}
              <Link href="/user/auth" className="text-green-600">
                Inicia Sesión
              </Link>
            </p>
          </form>
          <div className="flex justify-center items-center w-full md:w-1/2 hidden md:flex">
            <Image
              alt="Random image"
              src="/Images/backround/morado.png"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </section>
      </main>
    </>
  );
}
