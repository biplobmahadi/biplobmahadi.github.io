import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import { NotFound } from "../components/notFound";

const NotFoundPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Not Found</title>
      </Head>
      <NotFound />
    </Fragment>
  );
};

export default NotFoundPage;
