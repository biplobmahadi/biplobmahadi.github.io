import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import { Text, useMantineTheme } from "@mantine/core";
import CustomPrism from "../../../libs/prism";
import {
  usePrivateAxiosCode,
  usePublicAxiosCode,
} from "../../../consts/docs/axios";
import GiscusDiscussion from "../../../libs/giscus";

const RequestHooks: NextPage = () => {
  const { colorScheme } = useMantineTheme();

  return (
    <Fragment>
      <Head>
        <title>Custom Hooks - Axios for React</title>
      </Head>
      <div style={{ margin: "1%" }}>
        <Text size="sm" mb={20}>
          We created 2 instances for our application. Using these instances we
          will create 2 different hooks which return all requests{" "}
          <b>(GET, POST, PUT, PATCH, DELETE)</b>.
        </Text>
        <Text size="sm" mb={20}>
          Create <b>hooks/usePublicAxios.ts</b>
        </Text>
        <CustomPrism code={usePublicAxiosCode} language="typescript" />

        <Text size="sm" mb={20}>
          Create <b>hooks/usePrivateAxios.ts</b>
        </Text>
        <CustomPrism code={usePrivateAxiosCode} language="typescript" />

        <Text size="sm" mb={20}>
          We can see, both are the same. Now we need to add the authorization
          header with all private requests using our private instance.
        </Text>
        <Text size="sm" mb={20}>
          We will add the authorization using the axios interceptor, so that we
          can also configure access and refresh tokens.
        </Text>
        <Text size="sm" mb={20}>
          See in interceptors page.
        </Text>

        <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
      </div>
    </Fragment>
  );
};

export default RequestHooks;
