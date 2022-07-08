import type { NextPage } from "next";
import { Blockquote, Center } from "@mantine/core";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Welcome</title>
      </Head>
      <Center>
        <Blockquote cite="– Biplob">
          Don&apos;t Blame, Improve Together. Remember - Improvements are
          Endless!
        </Blockquote>
      </Center>
    </div>
  );
};

export default Home;
