import Head from "next/head";
import { Fragment } from "react";
import { AllBlogs } from "../../components/blogs";

const WelcomeToBlog = () => {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my blog</title>
      </Head>
      <h4>Welcome to my blog</h4>

      <AllBlogs />
    </Fragment>
  );
};
export default WelcomeToBlog;
