import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url: string | URL | Request) =>
  fetch(url).then((res) => res.json());

type UseAuthReturn = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  isLoading: boolean;
};

export function useAuth(): UseAuthReturn {
  const { data, error } = useSWR("/api/auth/status", fetcher);
  const router = useRouter();

  const isLoggedIn = data?.isAuthenticated;
  const isLoading = !error && !data;

  const login = () => {
    router.push("/user/auth");
  };

  const logout = () => {
    fetch("/api/auth/logout", { method: "POST" }) // API to destroy the session or cookie
      .then(() => {
        router.push("/");
      })
      .catch((error) => console.error("Logout failed", error));
  };
  console.log("isLoggedIn", isLoggedIn);
  return { isLoggedIn, login, logout, isLoading };
}
