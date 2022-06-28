import type { NextPage } from "next";
import { Prism } from "@mantine/prism";
import { useMantineTheme } from "@mantine/core";
import DisqusEmbed from "../components/disqus/DisqusEmbed";

const demoCode = `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`;

const Home: NextPage = () => {
  const theme = useMantineTheme();
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
        sx={{ marginTop: "100px" }}
        language="tsx"
        withLineNumbers
        colorScheme={theme.colorScheme === "dark" ? "light" : "dark"}
      >
        {demoCode}
      </Prism>
      <Prism
        sx={{ marginTop: "100px" }}
        language="tsx"
        withLineNumbers
        colorScheme={theme.colorScheme === "dark" ? "light" : "dark"}
      >
        {demoCode}
      </Prism>

      <main style={{ marginTop: "100px" }}>Hello Man!</main>
      <main style={{ marginTop: "100px" }}>Hello Man!</main>

      <main style={{ margin: "50px 20px" }}>
        <DisqusEmbed />
      </main>
    </div>
  );
};

export default Home;
