import type { NextPage } from "next";
import Head from "next/head";

const CommonHead: NextPage = () => {
  return (
    <Head>
      <title>Welcome</title>
      <meta name="description" content="My Personal App to Share Knowledge" />
      <link rel="icon" href="/main.ico" />
    </Head>
  );
};

export default CommonHead;
