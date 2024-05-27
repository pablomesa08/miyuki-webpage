import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import { UserInfo } from "@/types/productType";
import { useCallback } from "react";

const fetcher = (url: string | URL | Request) =>
  fetch(url).then((res) => res.json());

type UseAuthReturn = {
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (
    email: string,
    password: string,
    fullName: string,
    phone: string
  ) => Promise<void>;
  isLoading: boolean;
  userInfo: UserInfo;
};

export function useAuth(): UseAuthReturn {
  const { data, error } = useSWR("/api/auth/status", fetcher);
  const { data: userInfoData } = useSWR("/api/auth/profile", fetcherUserInfo, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const router = useRouter();
  const userInfo = userInfoData || {
    username: "",
    fullName: "",
    email: "",
    address: "",
  };

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

  const register = async (
    email: string,
    password: string,
    fullName: string,
    phone: string
  ) => {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: fullName,
        phone: phone,
      }),
    });
    const result = await response.json();
    if (response.ok) {
      mutate("/api/auth/status");
    } else {
      throw new Error(result.error || "Registration failed");
    }
  };

  return { isLoggedIn, login, logout, isLoading, userInfo, register };
}

async function fetcherUserInfo() {
  const response = await fetch("/api/auth/profile", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const userInfo = await response.json();
    const user: UserInfo = {
      username: userInfo.username,
      fullName: userInfo.name,
      email: userInfo.email,
      address: userInfo.address,
    };
    return user;
  } else {
    throw new Error("Failed to fetch user info");
  }
}
