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
import useDocsStyles from "../../../../helpers/useDocsStyles";

const RequestHooks: NextPage = () => {
  const { colorScheme } = useMantineTheme();
  const { classes } = useDocsStyles();

  return (
    <Fragment>
      <Head>
        <title>Custom Hooks - Axios for React</title>
      </Head>
      <div className={classes.containerClass}>
        <Text size="xl" weight={700} mb={30} align="center">
          Custom Axios Hooks
        </Text>
        <section>
          <Text size="xs" color="dimmed">
            Published: Jul 16, 2022 | Last Modified: Jul 16, 2022
          </Text>
        </section>
        <Text size="sm" my={20}>
          We created 2 instances for our application. Using these instances we
          will create 2 different hooks which return all requests{" "}
          <b>(GET, POST, PUT, PATCH, DELETE)</b>.
        </Text>
        <Text size="sm">
          Create <b>hooks/usePublicAxios.ts</b>
        </Text>
        <CustomPrism code={usePublicAxiosCode} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>hooks/usePrivateAxios.ts</b>
        </Text>
        <CustomPrism code={usePrivateAxiosCode} language="typescript" />

        <Text size="sm" mt={20} mb={10}>
          We can see, both are the same. Now we need to add the authorization
          header with all private requests using our private instance.
        </Text>
        <Text size="sm" mb={10}>
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
