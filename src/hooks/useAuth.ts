import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";

const fetcher = (url: string | URL | Request) =>
  fetch(url).then((res) => res.json());

type UseAuthReturn = {
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};

export function useAuth(): UseAuthReturn {
  const { data, error } = useSWR("/api/auth/status", fetcher);
  const router = useRouter();

  const isLoggedIn = data?.isAuthenticated;
  const isLoading = !error && !data;

  const login = async (email: string, password: string) => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();
    if (response.ok) {
      mutate("/api/auth/status");
      router.push("/");
    } else {
      throw new Error(result.error || "Authentication failed");
    }
  };

  const logout = () => {
    fetch("/api/auth/logout", { method: "POST" }) // API to destroy the session or cookie
      .then(() => {
        mutate("/api/auth/status"); // revalidate the data
        router.push("/");
      })
      .catch((error) => console.error("Logout failed", error));
  };
  return { isLoggedIn, login, logout, isLoading };
}
