import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import { Anchor, Text, useMantineTheme } from "@mantine/core";
import GiscusDiscussion from "../../../libs/giscus";
import CustomPrism from "../../../libs/prism";
import {
  demoComponentCode,
  postsInterfaceCode,
} from "../../../consts/docs/axios";

const DemoRequests: NextPage = () => {
  const { colorScheme } = useMantineTheme();

  return (
    <Fragment>
      <Head>
        <title>Demo Requests - Axios for React</title>
      </Head>
      <div style={{ margin: "1%" }}>
        <Text size="sm" mb={20}>
          We will use{" "}
          <Anchor href="https://jsonplaceholder.typicode.com/" target="_blank">
            JSON Placeholder
          </Anchor>{" "}
          for some fake rest API. And also will create a react component and
          test all requests <b>(GET, POST, PUT, DELETE)</b> using our axios
          setup in that component.
        </Text>
        <Text size="sm" mb={20}>
          Create <b>libs/axios</b> folder and inside this folder move our axios
          related folders.
        </Text>

        <Text size="sm" mb={20}>
          Now create <b>components/DemoComponent.tsx</b>
        </Text>
        <CustomPrism code={demoComponentCode} language="tsx" />

        <Text size="sm" mb={20}>
          Create <b>interfaces/posts.tsx</b> for posts interfaces outside the
          components folder
        </Text>
        <CustomPrism code={postsInterfaceCode} language="typescript" />

        <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
      </div>
    </Fragment>
  );
};

export default DemoRequests;
