import { useMantineTheme, Text } from "@mantine/core";
import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import useDocsStyles from "../../../../helpers/useDocsStyles";
import {
  actionCreator,
  actionInterface,
  actions,
  Counter,
  hook,
  indexContext,
  indexInterface,
  indexType,
  initialState,
  provider,
  reducer,
  reducerType,
  stateInterface,
  updatedApp,
  valueInterface,
} from "../../../consts/docs/reactContext";
import GiscusDiscussion from "../../../libs/giscus";
import CustomPrism from "../../../libs/prism";

const HandsOn: NextPage = () => {
  const { colorScheme } = useMantineTheme();
  const { classes } = useDocsStyles();

  return (
    <Fragment>
      <Head>
        <title>Hands On - React Context</title>
      </Head>
      <div className={classes.containerClass}>
        <Text size="xl" weight={700} mb={30} align="center">
          React Context Hands-On
        </Text>
        <section>
          <Text size="xs" color="dimmed">
            Published: Jul 30, 2022 | Last Modified: Jul 30, 2022
          </Text>
        </section>
        <Text size="sm" my={20}>
          We will create a counter context and wrap our app with this context
          provider. Then we will create a component and consume our counter
          context state on it. Obviously we will manage the context state by
          using the useReducer hook.
        </Text>

        <Text size="sm">
          Create <b>contexts/counter/initialState.ts</b>
        </Text>
        <CustomPrism code={initialState} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>contexts/counter/actions.ts</b>
        </Text>
        <CustomPrism code={actions} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>contexts/counter/reducer.ts</b>
        </Text>
        <CustomPrism code={reducer} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>contexts/counter/actionCreator.ts</b>
        </Text>
        <CustomPrism code={actionCreator} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>contexts/counter/provider.tsx</b>
        </Text>
        <CustomPrism code={provider} language="tsx" />

        <Text size="sm" mt={20}>
          Create <b>contexts/counter/hook.ts</b>
        </Text>
        <CustomPrism code={hook} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>contexts/counter/index.ts</b>
        </Text>
        <CustomPrism code={indexContext} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>interfaces/contexts/counter/state.ts</b>
        </Text>
        <CustomPrism code={stateInterface} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>interfaces/contexts/counter/action.ts</b>
        </Text>
        <CustomPrism code={actionInterface} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>interfaces/contexts/counter/value.ts</b>
        </Text>
        <CustomPrism code={valueInterface} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>interfaces/contexts/counter/index.ts</b>
        </Text>
        <CustomPrism code={indexInterface} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>types/contexts/counter/reducer.ts</b>
        </Text>
        <CustomPrism code={reducerType} language="typescript" />

        <Text size="sm" mt={20}>
          Create <b>types/contexts/counter/index.ts</b>
        </Text>
        <CustomPrism code={indexType} language="typescript" />

        <Text size="sm" mt={20}>
          Now, we will wrap our App component with our counter context provider,
          so that we can consume our counter context state anywhere inside the
          App component.
        </Text>
        <Text size="sm" mt={10}>
          Update <b>App.tsx</b>
        </Text>
        <CustomPrism code={updatedApp} language="tsx" />

        <Text size="sm" mt={20}>
          Finally, create <b>components/Counter.tsx</b>
        </Text>
        <CustomPrism code={Counter} language="tsx" />

        <div style={{ marginTop: "20px" }}>
          <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
        </div>
      </div>
    </Fragment>
  );
};

export default HandsOn;
