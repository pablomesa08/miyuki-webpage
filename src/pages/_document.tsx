import { Html, Head, Main, NextScript } from "next/document";
import { Providers } from "@/app/providers";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Providers>
          <Main />
          <NextScript />
        </Providers>
      </body>
    </Html>
  );
}
