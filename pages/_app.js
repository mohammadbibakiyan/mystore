import "../styles/globals.css";
import Router from "next/router";
import { useState, useEffect } from "react";
import Layout from "./../component/layout/layout";
import Loader from "../component/layout/loader";
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps,...appProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }
  if ([`/profile/seller`,`/profile/admin`,`/content/create/product`].includes(appProps.router.pathname)) {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }

  return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
  );
}

export default MyApp;
