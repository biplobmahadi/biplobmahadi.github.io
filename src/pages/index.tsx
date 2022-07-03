import type { NextPage } from "next";
import { Blockquote, Center, useMantineTheme } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { blogTitlesAndPaths } from "../../blogs";
import { IBlogTitleAndPaths } from "../interfaces/blogs";

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
      <Center>
        <h4>My Blogs</h4>
        {blogTitlesAndPaths.map((blog: IBlogTitleAndPaths) => (
          <div key={blog.title}>
            <Link href={`/${blog.path}`}>{blog.title}</Link>
          </div>
        ))}
      </Center>
    </div>
  );
};

export default Home;
