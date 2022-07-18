import { useMantineTheme } from "@mantine/core";
import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import GiscusDiscussion from "../../libs/giscus";

const HelloWorld1: NextPage = () => {
  const { colorScheme } = useMantineTheme();
  return (
    <Fragment>
      <Head>
        <title>HelloWorld1</title>
      </Head>
      <h4>HelloWorld1</h4>
      <main>Here is my blog content</main>
      <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
    </Fragment>
  );
};

export default HelloWorld1;
