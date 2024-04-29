"use client";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LoginLogoutButtom() {
  const { isAuthenticated } = useAuth();
  const { logout } = useAuth();
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const login = async () => {
    router.push("/user/auth");
  };

  const logoutAction = async () => {
    logout();
  };

  if (!isClient) {
    return null; // or return a loading spinner, placeholder, etc.
  }

  return (
    <Button
      suppressHydrationWarning
      size="sm"
      // if isAuthenticated is true, the button will be primary, otherwise it will be secondary
      color={isAuthenticated() ? "danger" : "primary"}
      variant="solid"
      className=" font-bold"
      onClick={isAuthenticated() ? logoutAction : login}
    >
      {isAuthenticated() ? "Logout" : "Login"}
    </Button>
  );
}
