import { useMantineTheme } from "@mantine/core";
import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import GiscusDiscussion from "../../libs/giscus";

const Welcome: NextPage = () => {
  const { colorScheme } = useMantineTheme();

  return (
    <Fragment>
      <Head>
        <title>Welcome to Docs</title>
      </Head>
      <div>
        Welcome
        <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
      </div>
    </Fragment>
  );
};

export default Welcome;
