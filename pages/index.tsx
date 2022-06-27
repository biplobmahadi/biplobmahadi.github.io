import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="My Personal App to Share Knowledge" />
        <link rel="icon" href="/main.ico" />
      </Head>

      <main>Hello Man!</main>
    </div>
  );
};

export default Home;
