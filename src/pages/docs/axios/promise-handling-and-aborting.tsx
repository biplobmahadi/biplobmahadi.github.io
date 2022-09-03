import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import { Text, useMantineTheme } from "@mantine/core";
import CustomPrism from "../../../libs/prism";
import {
  abortOptionInterfaceCode,
  axiosRequestsCode,
  requestCode,
  requestWithAbortCode,
} from "../../../consts/docs/axios";
import GiscusDiscussion from "../../../libs/giscus";

const PromiseHandlingAndAborting: NextPage = () => {
  const { colorScheme } = useMantineTheme();

  return (
    <Fragment>
      <Head>
        <title>Promise Handling & Aborting - Axios for React</title>
      </Head>
      <div style={{ margin: "2% 1%" }}>
        <Text size="xl" weight={700} mb={30} align="center">
          Promise Handling & Aborting
        </Text>
        <section>
          <Text size="xs" color="dimmed">
            Published: Jul 16, 2022 | Last Modified: Jul 16, 2022
          </Text>
        </section>
        <Text size="sm" my={20}>
          We know axios is a promise based library. We always need to handle
          those promises in every request. Here we will create a system to reuse
          this every time.
        </Text>
        <Text size="sm" mb={20}>
          Here we are using 2 instances. Now we need to create all requests{" "}
          <b>(GET, POST, PUT, PATCH, DELETE)</b> which both instances can use
          and here the promises need to be handled.
        </Text>
        <Text size="sm" mb={20}>
          We can see, for every request <b>(GET, POST, PUT, PATCH, DELETE)</b>{" "}
          we need to handle promises. So we can create one request function and
          use it for every request. And in that one request we can handle
          promises. It will also be great for adding abort or cancellation in
          only one place and every request will use this abort or cancellation.
        </Text>

        <Text
          id="promiseHandling"
          sx={{ scrollMarginTop: "95px" }}
          weight={700}
          mb={10}
        >
          Promise handling
        </Text>
        <Text size="sm">
          Create <b>helpers/request.ts</b>
        </Text>
        <CustomPrism code={requestCode} language="typescript" />

        <Text
          id="aborting"
          sx={{ scrollMarginTop: "95px" }}
          weight={700}
          mb={10}
          mt={30}
        >
          Aborting
        </Text>
        <Text size="sm" mb={20}>
          We need to know why we use abort or cancellation. This is to cancel
          any request for optimization.
        </Text>
        <Text size="sm" mb={20}>
          Why do we need to cancel any request?
        </Text>
        <Text size="sm" mb={20}>
          Suppose we are creating a search component. When a user types anything
          on search input we will show the specific result with that onchange
          event. If someone types frequently, we don’t need an api call every
          time, we can optimize it when users stop typing frequently.
        </Text>
        <Text size="sm" mb={20}>
          Abort or cancellation in axios means, if a request is not resolved or
          rejected and again that same request occurs then the previous one will
          cancel and the latest request will resolve or reject.
        </Text>
        <Text size="sm">
          Adding abort functionality with <b>helpers/request.ts</b>
        </Text>
        <CustomPrism code={requestWithAbortCode} language="typescript" />

        <Text size="sm" mt={20}>
          For interface, create <b>interfaces/abortOption.ts</b>
        </Text>
        <CustomPrism code={abortOptionInterfaceCode} language="typescript" />

        <Text
          id="necessaryRequests"
          sx={{ scrollMarginTop: "95px" }}
          weight={700}
          mb={10}
          mt={30}
        >
          Necessary requests
        </Text>
        <Text size="sm" mb={20}>
          We have 2 instances and we want to create all requests{" "}
          <b>(GET, POST, PUT, PATCH, DELETE)</b> which both instances can use.
        </Text>
        <Text size="sm">
          Create <b>helpers/axiosRequests.ts</b>
        </Text>
        <CustomPrism code={axiosRequestsCode} language="typescript" />

        <div style={{ marginTop: "20px" }}>
          <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
        </div>
      </div>
    </Fragment>
  );
};

export default PromiseHandlingAndAborting;
