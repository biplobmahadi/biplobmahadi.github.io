import type { NextPage } from "next";
import { useMantineTheme } from "@mantine/core";
import GiscusDiscussion from "../../../libs/giscus";
import Head from "next/head";
import CustomPrism from "../../../libs/prism";

const demoCode = `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`;

const Interceptors: NextPage = () => {
  const { colorScheme } = useMantineTheme();
  return (
    <div>
      <Head>
        <title>Interceptors</title>
      </Head>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <section id="ok1" style={{ paddingTop: "100px" }}>
        Ok 1
      </section>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <CustomPrism code={demoCode} language="typescript" />
      <CustomPrism code={demoCode} language="typescript" />

      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <section id="ok2" style={{ paddingTop: "100px" }}>
        Ok 2
      </section>

      <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
    </div>
  );
};

export default Interceptors;
