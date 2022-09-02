import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import { Text, useMantineTheme } from "@mantine/core";
import useDocsStyles from "../../../../helpers/useDocsStyles";
import CustomPrism from "../../../libs/prism";
import { queryHook, typeForQueryHook } from "../../../consts/docs/reactQuery";
import GiscusDiscussion from "../../../libs/giscus";

const QueryHook: NextPage = () => {
  const { colorScheme } = useMantineTheme();
  const { classes } = useDocsStyles();

  return (
    <Fragment>
      <Head>
        <title>Query Hook - React Query</title>
      </Head>
      <div className={classes.containerClass}>
        <Text size="xl" weight={700} mb={30} align="center">
          Create a Custom Query Hook
        </Text>
        <section>
          <Text size="xs" color="dimmed">
            Published: Jul 23, 2022 | Last Modified: Jul 23, 2022
          </Text>
        </section>
        <Text size="sm" my={20}>
          React Query gives mainly 2 different hooks. One is <b>useQuery</b> and
          another is <b>useMutation</b>. When we need to handle <b>GET</b>{" "}
          requests, we need useQuery hook. And for other requests we need
          useMutation hook.
        </Text>
        <Text size="sm" mb={20}>
          Here we will use the useQuery hook to make our custom hook. By using
          this hook we will handle all GET requests.
        </Text>

        <Text size="sm">
          Create <b>hooks/useReactQuery.ts</b>
        </Text>
        <CustomPrism code={queryHook} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>types/queryKey.ts</b> for type.
        </Text>
        <CustomPrism code={typeForQueryHook} language="typescript" />

        <div style={{ marginTop: "20px" }}>
          <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
        </div>
      </div>
    </Fragment>
  );
};

export default QueryHook;
