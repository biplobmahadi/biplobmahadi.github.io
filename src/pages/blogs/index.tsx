import Head from "next/head";
import { Fragment } from "react";
import { BlogSection } from "../../components/blogs";

const WelcomeToBlog = () => {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my blog</title>
      </Head>
      <h4>Welcome to my blog</h4>

      <BlogSection />
    </Fragment>
  );
};
export default WelcomeToBlog;
