import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedPage() {
  const { isAuthenticated, jwt } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      console.log("User is not authenticated");
      router.push("/user/auth");
    }
  }, [isAuthenticated, jwt, router]); // use jwt as a dependency instead of isAuthenticated

  return (
    <div>
      <h1>This is a protected page</h1>
    </div>
  );
}
