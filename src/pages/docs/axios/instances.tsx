import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import { Text, useMantineTheme } from "@mantine/core";
import CustomPrism from "../../../libs/prism";
import {
  indexCode,
  privateInstanceCode,
  publicInstanceCode,
} from "../../../consts/docs/axios";
import GiscusDiscussion from "../../../libs/giscus";

const Instances: NextPage = () => {
  const { colorScheme } = useMantineTheme();

  return (
    <Fragment>
      <Head>
        <title>Instances - Axios for React</title>
      </Head>
      <div style={{ margin: "1%" }}>
        <Text size="sm" mb={20}>
          We can create a new instance of axios with a custom config.
        </Text>
        <Text size="sm" mb={20}>
          We will create 2 axios instances for our project. One for public
          requests which does not need any authorization and another for private
          requests which need an authorization header.
        </Text>
        <Text size="sm" mb={20}>
          We can use only one instance, when we add authorization header using
          axios interceptor then every request will add the authorization
          header. So we need 2 different instances to request with the
          authorization header and without.
        </Text>

        <Text weight={700} mb={20}>
          Public Instance
        </Text>
        <Text size="sm" mb={20}>
          Create <b>instances/publicInstance.ts</b>
        </Text>
        <CustomPrism code={publicInstanceCode} language="typescript" />

        <Text weight={700} mb={20}>
          Private Instance
        </Text>
        <Text size="sm" mb={20}>
          Create <b>instances/privateInstance.ts</b>
        </Text>
        <CustomPrism code={privateInstanceCode} language="typescript" />

        <Text size="sm" mb={20}>
          Create a <b>instances/index.ts</b> file to export everything from{" "}
          <b>instances</b> folder
        </Text>
        <CustomPrism code={indexCode} language="typescript" />

        <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
      </div>
    </Fragment>
  );
};

export default Instances;
