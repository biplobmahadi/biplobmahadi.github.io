import { useMantineTheme } from "@mantine/core";
import Head from "next/head";
import React, { Fragment } from "react";
import GiscusDiscussion from "../../libs/giscus";

const Welcome = () => {
  const { colorScheme } = useMantineTheme();
  return (
    <Fragment>
      <Head>
        <title>Welcome to Doc</title>
      </Head>
      <div>
        Welcome
        <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
      </div>
    </Fragment>
  );
};

export default Welcome;
