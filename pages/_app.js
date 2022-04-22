import '../styles/globals.css';
import Router from "next/router";
import { useState,useEffect } from 'react';
import Layout from "./../component/layout/layout";
import Loader from '../component/layout/loader';

function MyApp({ Component, pageProps }) {
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

  if(loading){
    return <Loader/>
  }
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
