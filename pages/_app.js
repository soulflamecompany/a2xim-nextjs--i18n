import React, { Suspense } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import LangSwitcher from "../components/LangSwitcher/LangSwitcher";

function MyApp({ Component, pageProps }) {
  return (
    <Suspense fallback="Loading">
      <LangSwitcher />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Suspense>
  );
}

export default MyApp;
