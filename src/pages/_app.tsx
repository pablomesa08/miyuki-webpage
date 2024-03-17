import "@/styles/globals.css";
import "@/styles/embla.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className="purple-dark text-foreground bg-background min-h-screen max-h-fit">
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
