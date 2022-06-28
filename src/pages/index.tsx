import type { NextPage } from "next";
import { Prism } from "@mantine/prism";
import { Blockquote, Center, useMantineTheme } from "@mantine/core";
import DisqusEmbed from "../components/disqus/DisqusEmbed";
import Head from "next/head";

const demoCode = `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`;

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
