import type { NextPage } from "next";
import { Blockquote, Center } from "@mantine/core";
import Head from "next/head";
import { BlogSection } from "../components/blogs";

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
      <h4>My Blogs</h4>
      <BlogSection />
    </div>
  );
};

export default Home;
