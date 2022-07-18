import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import { AllBlogs } from "../../components/blogs";

const WelcomeToBlog: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my blogs</title>
      </Head>

      <AllBlogs />
    </Fragment>
  );
};
export default WelcomeToBlog;
