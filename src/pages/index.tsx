import type { NextPage } from "next";
import { Blockquote, Center, useMantineTheme } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { blogTitlesAndPaths } from "../../blogs";
import { IBlogTitleAndPaths } from "../interfaces/blogs";
import UIPaths from "../paths/uiPaths";

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
      {blogTitlesAndPaths.map((blog: IBlogTitleAndPaths) => (
        <div key={blog.title}>
          <Link href={UIPaths.Blogs.GetSingleBlog(blog.path)}>
            {blog.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
