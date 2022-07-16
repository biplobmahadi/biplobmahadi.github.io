import { Text } from "@mantine/core";
import Head from "next/head";
import { Fragment } from "react";
import { AllBlogs } from "../../components/blogs";

const WelcomeToBlog = () => {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my blog</title>
      </Head>
      <Text size="xl" weight={700} align="center">
        Welcome to my blog
      </Text>

      <AllBlogs />
    </Fragment>
  );
};
export default WelcomeToBlog;
