import type { NextPage } from "next";
import { Prism } from "@mantine/prism";
import { useMantineTheme } from "@mantine/core";
import Head from "next/head";
import DisqusEmbed from "../../../components/disqus/DisqusEmbed";
import GiscusDiscussion from "../../../libs/giscus";

const demoCode = `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`;

const AdvanceAxios: NextPage = () => {
  const { colorScheme } = useMantineTheme();
  return (
    <div>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>
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

      <main style={{ margin: "50px 20px" }}>{/* <DisqusEmbed /> */}</main>
      <main style={{ margin: "50px 20px" }}>
        <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
      </main>
    </div>
  );
};

export default AdvanceAxios;
