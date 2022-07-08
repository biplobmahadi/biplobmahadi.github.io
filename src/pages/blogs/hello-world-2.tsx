import { useMantineTheme } from "@mantine/core";
import Head from "next/head";
import { Fragment } from "react";
import GiscusDiscussion from "../../libs/giscus";

const HelloWorld2 = () => {
  const { colorScheme } = useMantineTheme();
  return (
    <Fragment>
      <Head>
        <title>HelloWorld2</title>
      </Head>
      <h4>HelloWorld2</h4>
      <main>Here is my blog content</main>
      <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
    </Fragment>
  );
};

export default HelloWorld2;
