import Head from "next/head";
import React from "react";

const CommonHead = () => {
  return (
    <Head>
      <title>Welcome</title>
      <meta name="description" content="My Personal App to Share Knowledge" />
      <link rel="icon" href="/main.ico" />
    </Head>
  );
};

export default CommonHead;
