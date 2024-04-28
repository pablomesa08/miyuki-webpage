import "@/styles/globals.css";
import "@/styles/embla.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <AuthProvider>
        <main className="miyuki-light text-foreground bg-background min-h-screen max-h-fit">
          <Component {...pageProps} />
        </main>
      </AuthProvider>
    </NextUIProvider>
  );
}
