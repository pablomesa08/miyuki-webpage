import { useAuth } from "@/hooks/useAuth";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function LoginLogoutButton() {
  const { isLoggedIn, logout, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) return <p>Loading...</p>;

  return (
    <Button
      size="sm"
      color={isLoggedIn ? "danger" : "primary"}
      variant="solid"
      className="font-bold"
      onClick={isLoggedIn ? logout : () => router.push("/user/auth")}
    >
      {isLoggedIn ? "Logout" : "Login"}
    </Button>
  );
}
