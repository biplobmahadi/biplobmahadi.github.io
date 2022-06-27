import type { AppProps } from "next/app";
import { Fragment } from "react";
import CommonHead from "../components/CommonHead";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <CommonHead />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
