import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import { Anchor, Text, useMantineTheme } from "@mantine/core";
import GiscusDiscussion from "../../../libs/giscus";
import useDocsStyles from "../../../helpers/useDocsStyles";

const Introduction: NextPage = () => {
  const { colorScheme } = useMantineTheme();
  const { classes } = useDocsStyles();

  return (
    <Fragment>
      <Head>
        <title>Introduction - Axios for React</title>
      </Head>
      <div className={classes.containerClass}>
        <Text size="xl" weight={700} mb={30} align="center">
          Introduction to Axios
        </Text>
        <section>
          <Text size="xs" color="dimmed">
            Published: Jul 16, 2022 | Last Modified: Jul 16, 2022
          </Text>
        </section>
        <Text size="sm" my={20}>
          Axios is a promise based HTTP Client for node and the browser. We will
          use it for the browser here.
        </Text>
        <Text size="sm" mb={20}>
          We can find everything in official documentation. But why are we here?{" "}
        </Text>
        <Text size="sm" mb={20}>
          We know, Promises in javascript have 3 states{" "}
          <b>(Pending, Fulfilled, Rejected)</b>. We always need to handle these
          3 states. When we use axios in our react project, we need to handle
          axios promises. Here we will create reusable promise handling so that
          we don’t need to write the same code frequently.
        </Text>
        <Text size="sm" mb={20}>
          Also the best part is using abort or cancellation to call API
          optimizely. We will see it later.
        </Text>
        <Text size="sm" mb={20}>
          The most important thing is, for production label application we need
          some API calls with authorization header and some are without any
          authorization header. We will configure the authorization header with
          access and refresh token for our react application.
        </Text>

        <Text mb={20} weight={700}>
          So, What do we cover?
        </Text>
        <div style={{ paddingLeft: "5%" }}>
          <ul>
            <li>
              <Text size="sm">Reusable promise handling</Text>
            </li>
            <li>
              <Text size="sm">Abort/Cancellation for API call</Text>
            </li>
            <li>
              <Text size="sm">
                Configure authorization header with access and refresh token
              </Text>
            </li>
            <li>
              <Text size="sm">Create all demo request with react</Text>
            </li>
          </ul>
        </div>

        <Text size="sm" my={20}>
          The documentation of Axios is great.{" "}
          <Anchor href="https://axios-http.com/docs/intro" target="_blank">
            Check it out
          </Anchor>
          .
        </Text>

        <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
      </div>
    </Fragment>
  );
};

export default Introduction;
