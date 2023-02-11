import "@/styles/globals.css";
import type { AppProps } from "next/app";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
