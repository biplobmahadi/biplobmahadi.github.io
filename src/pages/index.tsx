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
        <Blockquote>
          Don&apos;t Blame, Improve Together. Remember - Improvements are
          Endless!
        </Blockquote>
      </Center>
      <Center>
        <Blockquote>
          Use CLI, It&apos;s not for coolness, It has greater control of
          Application or OS with less memory!
        </Blockquote>
      </Center>
    </div>
  );
};

export default Home;
