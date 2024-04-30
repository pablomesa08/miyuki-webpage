import { useAuth } from "@/hooks/useAuth";
import { Button } from "@nextui-org/react";

export default function LoginLogoutButton() {
  const { isLoggedIn, login, logout, isLoading } = useAuth();

  if (isLoading) return <p>Loading...</p>;

  return (
    <Button
      size="sm"
      color={isLoggedIn ? "danger" : "primary"}
      variant="solid"
      className="font-bold"
      onClick={isLoggedIn ? logout : login}
    >
      {isLoggedIn ? "Logout" : "Login"}
    </Button>
  );
}
