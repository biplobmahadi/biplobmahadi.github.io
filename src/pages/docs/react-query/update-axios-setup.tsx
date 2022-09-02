import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import { Anchor, Text, useMantineTheme } from "@mantine/core";
import useDocsStyles from "../../../../helpers/useDocsStyles";
import CustomPrism from "../../../libs/prism";
import {
  abortOptionInterfaceCodeInReactQuery,
  requestWithAbortCodeInReactQuery,
} from "../../../consts/docs/reactQuery";
import GiscusDiscussion from "../../../libs/giscus";

const UpdateAxiosSetup: NextPage = () => {
  const { colorScheme } = useMantineTheme();
  const { classes } = useDocsStyles();

  return (
    <Fragment>
      <Head>
        <title>Update Axios Setup - React Query</title>
      </Head>
      <div className={classes.containerClass}>
        <Text size="xl" weight={700} mb={30} align="center">
          Update Previous Axios Setup
        </Text>
        <section>
          <Text size="xs" color="dimmed">
            Published: Jul 23, 2022 | Last Modified: Jul 23, 2022
          </Text>
        </section>
        <Text size="sm" my={20}>
          In our axios setup documentation, we did handle promises. But as a
          query function, React Query needs a function which returns any
          promise. So we don’t need to handle axios promises.
        </Text>
        <Text size="sm" mb={20}>
          Here we will update our <b>helpers/request.ts</b> file. See this in
          the{" "}
          <Anchor
            href="https://biplobmahadi.github.io/docs/axios/promise-handling-and-aborting"
            target="_blank"
          >
            promise handling & aborting page
          </Anchor>
          .
        </Text>

        <Text size="sm">
          Here is the updated code of <b>helpers/request.ts</b>
        </Text>
        <CustomPrism
          code={requestWithAbortCodeInReactQuery}
          language="typescript"
        />

        <Text size="sm" mt={20}>
          For interface, create <b>interfaces/abortOption.ts</b>
        </Text>
        <CustomPrism
          code={abortOptionInterfaceCodeInReactQuery}
          language="typescript"
        />

        <Text size="sm" my={20}>
          For axios setup, we did move all axios related files in the{" "}
          <b>libs/axios</b> folder. Here we will import axios public and private
          hooks from this folder.
        </Text>

        <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
      </div>
    </Fragment>
  );
};

export default UpdateAxiosSetup;
