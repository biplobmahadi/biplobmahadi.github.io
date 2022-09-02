import { Anchor, Text } from "@mantine/core";
import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import useDocsStyles from "../../../helpers/useDocsStyles";

const Welcome: NextPage = () => {
  const { classes } = useDocsStyles();

  return (
    <Fragment>
      <Head>
        <title>Welcome to Docs</title>
      </Head>
      <div className={classes.containerClass}>
        <Text size="xl" weight={700} mb={30} align="center">
          Welcome to Docs
        </Text>
        <Text size="sm" my={20}>
          We will discuss technologies in detail here.
        </Text>

        <Text size="sm">
          Highly encourage you to give feedback and{" "}
          <Anchor
            href="https://github.com/biplobmahadi/biplobmahadi.github.io"
            target="_blank"
          >
            edit on github
          </Anchor>
          .
        </Text>
      </div>
    </Fragment>
  );
};

export default Welcome;
