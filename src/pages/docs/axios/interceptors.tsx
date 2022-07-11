import type { NextPage } from "next";
import { Prism } from "@mantine/prism";
import { useMantineTheme } from "@mantine/core";
import GiscusDiscussion from "../../../libs/giscus";
import Head from "next/head";

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
      <Prism
        sx={{ margin: "100px" }}
        language="tsx"
        withLineNumbers
        colorScheme={colorScheme === "dark" ? "light" : "dark"}
      >
        {demoCode}
      </Prism>
      <Prism
        sx={{ margin: "100px" }}
        language="tsx"
        withLineNumbers
        colorScheme={colorScheme === "dark" ? "light" : "dark"}
      >
        {demoCode}
      </Prism>

      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <section id="ok2" style={{ paddingTop: "100px" }}>
        Ok 2
      </section>
      <main style={{ margin: "50px 20px" }}>
        <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
      </main>
    </div>
  );
};

export default Interceptors;
