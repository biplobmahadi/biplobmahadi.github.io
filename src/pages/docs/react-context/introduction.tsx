import { useMantineTheme, Text, Anchor } from "@mantine/core";
import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import useDocsStyles from "../../../../helpers/useDocsStyles";
import GiscusDiscussion from "../../../libs/giscus";

const Introduction: NextPage = () => {
  const { colorScheme } = useMantineTheme();
  const { classes } = useDocsStyles();

  return (
    <Fragment>
      <Head>
        <title>Introduction - React Context</title>
      </Head>
      <div className={classes.containerClass}>
        <Text size="xl" weight={700} mb={30} align="center">
          Introduction to React Context
        </Text>
        <section>
          <Text size="xs" color="dimmed">
            Published: Jul 30, 2022 | Last Modified: Jul 30, 2022
          </Text>
        </section>
        <Text size="sm" my={20}>
          Here, we will replace <b>redux</b> or any other state management
          library using react <b>context</b> and <b>useReducer</b> hook.
        </Text>
        <Text size="sm" mb={20}>
          Context and useReducer are totally different things. We can use both
          separately.
        </Text>
        <Text size="sm" mb={20}>
          Here we will use both together to achieve functionality like redux.
        </Text>

        <Text weight={700} mb={10}>
          Context
        </Text>
        <Text size="sm" mb={20}>
          Context provides a way to pass data through the component tree without
          props drilling. It is like a global state management system.
        </Text>
        <Text size="sm" mb={20}>
          Context has mainy 2 things. One is the <b>provider</b> and the other
          is the <b>consumer</b>. Using a context provider we can wrap child
          components, and only those components can consume the global state.
        </Text>
        <Text size="sm" mb={20}>
          To consume the context state, there are some ways. But we will use a
          hook called useContext to consume context state.
        </Text>

        <Text weight={700} mb={10}>
          useReducer Hook
        </Text>
        <Text size="sm" mb={20}>
          It is an alternative to <b>useState</b> hook. When we need complex
          state logic that involves multiple sub-values or when the next state
          depends on the previous one, we use useReducer instead of useState.
        </Text>
        <Text size="sm" mb={20}>
          Please read more about{" "}
          <Anchor href="https://reactjs.org/docs/context.html" target="_blank">
            context
          </Anchor>{" "}
          and{" "}
          <Anchor
            href="https://reactjs.org/docs/hooks-reference.html#usereducer"
            target="_blank"
          >
            useReducer
          </Anchor>{" "}
          hook.
        </Text>

        <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
      </div>
    </Fragment>
  );
};

export default Introduction;
