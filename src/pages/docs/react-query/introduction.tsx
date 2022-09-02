import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import { Anchor, Text, useMantineTheme } from "@mantine/core";
import GiscusDiscussion from "../../../libs/giscus";

const Introduction: NextPage = () => {
  const { colorScheme } = useMantineTheme();

  return (
    <Fragment>
      <Head>
        <title>Introduction - React Query</title>
      </Head>
      <div style={{ margin: "2% 1%" }}>
        <Text size="xl" weight={700} mb={30} align="center">
          Introduction to React Query
        </Text>
        <section>
          <Text size="xs" color="dimmed">
            Published: Jul 23, 2022 | Last Modified: Jul 23, 2022
          </Text>
        </section>
        <Text size="sm" my={20}>
          Using React Query we can <b>fetch, cache and update data</b> in our
          React applications all without touching any &quot;global state&quot;.
        </Text>
        <Text size="sm" mb={20}>
          We can do all requests <b>(GET, POST, PUT, PATCH, DELETE)</b> using
          React Query with{" "}
          <b>caching, synchronizing and updating server state</b>.
        </Text>

        <Text id="whyReactQuery" size="sm" mb={20} weight={700}>
          Why should we use React Query?
        </Text>
        <Text size="sm" mb={20}>
          In our react applications, we always need to fetch data and update DOM
          with the data using GET requests. And for that we need state and need
          to update state using the life cycle method in React. But using React
          Query we can achieve it easily and it has some other great features
          like caching.
        </Text>
        <Text size="sm" mb={20}>
          We always use some side effects with API calls. Like, after API
          success we need to do some tasks, also after getting errors we need to
          do something.
        </Text>
        <Text size="sm" mb={20}>
          And for all requests <b>(GET, POST, PUT, PATCH, DELETE)</b> we can
          handle those side effects easily, optimizely.
        </Text>
        <Text size="sm" mb={20}>
          There is a popular library like React Query: <b>SWR</b>. But we have
          greater control and much more features in React Query. Also React
          Query is more optimized.
        </Text>

        <Text id="ourAchievement" size="sm" mb={20} weight={700}>
          What do we achieve here?
        </Text>
        <Text size="sm" mb={20}>
          In one word, we will do some customization for reusability. We will
          make 5 custom hooks using React Query to handle{" "}
          <b>GET, POST, PUT, PATCH and DELETE</b> requests with all features.
        </Text>
        <Text size="sm" mb={20}>
          We don&apos;t need to write query functions and mutation functions
          every time for every request after creating our custom hooks.
        </Text>
        <Text size="sm" mb={20}>
          After this setup it will be so much easier to handle all API requests
          using React Query.
        </Text>
        <Text size="sm" mb={20}>
          React Query does support <b>fetch</b> and other clients <b>(axios)</b>{" "}
          for API calls. We will use <b>axios</b> for our setup. Previously we
          did a setup for axios. We need a small update here for React Query. It
          will be discussed on the next page.
        </Text>
        <Text size="sm" mb={20}>
          There are many more features available in react query and everything
          is well documented.{" "}
          <Anchor href="https://react-query-v3.tanstack.com" target="_blank">
            We must read everything
          </Anchor>
          .
        </Text>

        <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
      </div>
    </Fragment>
  );
};

export default Introduction;
