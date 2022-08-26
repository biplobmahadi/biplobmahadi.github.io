import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import { Text, useMantineTheme } from "@mantine/core";
import CustomPrism from "../../../libs/prism";
import GiscusDiscussion from "../../../libs/giscus";
import {
  deleteMutation,
  exportMutations,
  mutationConfig,
  patchMutation,
  postMutation,
  putMutation,
} from "../../../consts/docs/reactQuery";

const MutationHooks: NextPage = () => {
  const { colorScheme } = useMantineTheme();

  return (
    <Fragment>
      <Head>
        <title>Mutation Hooks - React Query</title>
      </Head>
      <div style={{ margin: "2% 1%" }}>
        <Text size="xl" weight={700} mb={30} align="center">
          Create Custom Mutation Hooks
        </Text>
        <section>
          <Text size="xs" color="dimmed">
            Published: Jul 28, 2022 | Last Modified: Jul 31, 2022
          </Text>
        </section>
        <Text size="sm" my={20}>
          Here we will create 4 different custom hooks using the useMutation
          hook to handle <b>POST, PUT, PATCH and DELETE</b> requests.
        </Text>

        <Text size="sm">
          Create some interfaces in interfaces/mutationConfig.ts which will be
          used to create our mutation hooks.
        </Text>
        <CustomPrism code={mutationConfig} language="typescript" />

        <Text id="postMutation" size="sm" mb={10} mt={30} weight={700}>
          Create Post Mutation
        </Text>
        <Text size="sm">
          To handle <b>POST</b> request, create <b>hooks/usePostMutation.ts</b>
        </Text>
        <CustomPrism code={postMutation} language="typescript" />

        <Text id="putMutation" size="sm" mt={30} mb={10} weight={700}>
          Create Put Mutation
        </Text>
        <Text size="sm">
          To handle <b>PUT</b> request, create <b>hooks/usePutMutation.ts</b>
        </Text>
        <Text size="sm" mt={10}>
          We must pass id to handle <b>PUT</b> requests. So we will create this
          hook with this concern.
        </Text>
        <CustomPrism code={putMutation} language="typescript" />

        <Text id="patchMutation" size="sm" mt={30} mb={10} weight={700}>
          Create Patch Mutation
        </Text>
        <Text size="sm">
          To handle <b>PATCH</b> request, create{" "}
          <b>hooks/usePatchMutation.ts</b>
        </Text>
        <Text size="sm" mt={10}>
          We must pass id to handle <b>PATCH</b> requests. So we will create
          this hook with this concern.
        </Text>
        <CustomPrism code={patchMutation} language="typescript" />

        <Text id="deleteMutation" size="sm" mt={30} mb={10} weight={700}>
          Create Delete Mutation
        </Text>
        <Text size="sm">
          To handle <b>DELETE</b> request, create{" "}
          <b>hooks/useDeleteMutation.ts</b>
        </Text>
        <Text size="sm" mt={10}>
          We must pass id to handle <b>DELETE</b> requests. So we will create
          this hook with this concern.
        </Text>
        <CustomPrism code={deleteMutation} language="typescript" />

        <Text size="sm" mt={20}>
          Finally, we will move all React Query related folders to the{" "}
          <b>libs/reactQuery</b> folder.
        </Text>

        <Text size="sm" mt={10}>
          And, we will export our hooks from <b>libs/reactQuery</b> folder.
        </Text>
        <Text size="sm" mt={10}>
          Create <b>libs/reactQuery/index.ts</b>
        </Text>
        <CustomPrism code={exportMutations} language="typescript" />

        <div style={{ marginTop: "20px" }}>
          <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
        </div>
      </div>
    </Fragment>
  );
};

export default MutationHooks;
