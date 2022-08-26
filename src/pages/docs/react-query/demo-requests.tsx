import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import { Anchor, Text, useMantineTheme } from "@mantine/core";
import useDocsStyles from "../../../../helpers/useDocsStyles";
import GiscusDiscussion from "../../../libs/giscus";
import CustomPrism from "../../../libs/prism";
import {
  apiHookDelete,
  apiHookGet,
  apiHookPost,
  apiHookPut,
  demoRequests,
  exportHooks,
  providerAdd,
  todoInterface,
} from "../../../consts/docs/reactQuery";

const DemoRequests: NextPage = () => {
  const { colorScheme } = useMantineTheme();
  const { classes } = useDocsStyles();

  return (
    <Fragment>
      <Head>
        <title>Demo Requests - React Query</title>
      </Head>
      <div className={classes.containerClass}>
        <Text size="xl" weight={700} mb={30} align="center">
          Demo Requests with React Component
        </Text>
        <section>
          <Text size="xs" color="dimmed">
            Published: Jul 28, 2022 | Last Modified: Jul 31, 2022
          </Text>
        </section>
        <Text size="sm" my={20}>
          We will use{" "}
          <Anchor href="https://jsonplaceholder.typicode.com" target="_blank">
            Json Placeholder
          </Anchor>{" "}
          for some fake rest API. Also we will create a React component to test
          all requests <b>(GET, POST, PUT, PATCH, DELETE)</b> using our 5 React
          Query custom hooks.
        </Text>
        <Text size="sm" mb={20}>
          To get all features of React Query, we need to use their provider. Now
          in the React <b>index.tsx</b> file, we need to wrap our App component
          with that provider. We can also use React Query Devtools in
          development.
        </Text>
        <Text size="sm">
          Open <b>index.tsx</b> file and update it
        </Text>
        <CustomPrism code={providerAdd} language="tsx" />

        <Text size="sm" mt={20}>
          Now, let&apos;s create API hooks to handle all requests.
        </Text>
        <Text size="sm" mt={10}>
          Create <b>api/todo/useGetTodos.ts</b>
        </Text>
        <CustomPrism code={apiHookGet} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>api/todo/usePostTodo.ts</b>
        </Text>
        <CustomPrism code={apiHookPost} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>api/todo/usePutTodo.ts</b>
        </Text>
        <CustomPrism code={apiHookPut} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>api/todo/useDeleteTodo.ts</b>
        </Text>
        <CustomPrism code={apiHookDelete} language="typescript" />

        <Text size="sm" mt={20}>
          Now create <b>api/todo/index.ts</b> to export all todo API hooks
        </Text>
        <CustomPrism code={exportHooks} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>interfaces/todo.ts</b> outside the components folder
        </Text>
        <CustomPrism code={todoInterface} language="typescript" />

        <Text size="sm" mt={20}>
          Finally create <b>components/DemoComponent.tsx</b>
        </Text>
        <CustomPrism code={demoRequests} language="tsx" />

        <div style={{ marginTop: "20px" }}>
          <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
        </div>
      </div>
    </Fragment>
  );
};

export default DemoRequests;
