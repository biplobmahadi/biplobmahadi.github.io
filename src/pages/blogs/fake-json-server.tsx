import { useMantineTheme, Text, Card, Code, Anchor } from "@mantine/core";
import { NextPage } from "next";
import Head from "next/head";
import useBlogsStyles from "../../../helpers/useBlogsStyles";
import useNoteCardStyles from "../../../helpers/useNoteCardStyles";
import {
  dbCode,
  packageJson,
  responseFormat,
  serverCode,
} from "../../consts/blogs/fakeJsonServer";
import GiscusDiscussion from "../../libs/giscus";
import CustomPrism from "../../libs/prism";

const FakeJsonServer: NextPage = () => {
  const { colorScheme } = useMantineTheme();
  const { classes } = useBlogsStyles();
  const { classes: cardClasses } = useNoteCardStyles();

  return (
    <div className={classes.containerClass}>
      <Head>
        <title>Fake Json Server</title>
      </Head>
      <Text mb={30} size="xl" weight={700} align="center">
        Fake Json Server
      </Text>
      <section>
        <Text size="xs" color="dimmed">
          Published: Aug 13, 2022 | Last Modified: Aug 13, 2022
        </Text>
      </section>

      <main>
        <Text size="sm" my={20}>
          As a frontend engineer we always need data as <b>REST</b> or{" "}
          <b>GraphQL</b> or <b>gRPC</b> API from a backend server. But it&apos;s
          time consuming to create a backend service to practice our frontend
          things.
        </Text>
        <Text size="sm" mb={10}>
          So, we can create a fake <b>REST</b> API server with zero coding in
          less than 30 sec using{" "}
          <Anchor
            href="https://github.com/typicode/json-server"
            target="_blank"
          >
            JSON Server
          </Anchor>{" "}
          to practice frontend things.
        </Text>
        <Text size="sm" mb={10}>
          We can make <b>GET</b>, <b>POST</b>, <b>PUT</b>, <b>PATCH</b> and{" "}
          <b>DELETE</b> requests, changes will be automatically and safely saved
          to db.json using lowdb.
        </Text>
        <Text size="sm" mb={20}>
          JSON Server can support <b>Filter</b>, <b>Sort</b>, <b>Search</b>,{" "}
          <b>Pagination</b> and other necessary things.
        </Text>
        <Text size="sm" mb={20}>
          Let&apos;s start ...
        </Text>

        <Text size="sm">
          Create a <b>db.json</b> file with data
        </Text>
        <CustomPrism code={dbCode} language="json" />
        <Text size="sm" my={20}>
          Start JSON Server:{" "}
          <Code color="blue">json-server --watch db.json --port 4000</Code>
        </Text>

        <Text size="sm" weight={700}>
          JSON Server provides all request:
        </Text>
        <div style={{ padding: "1% 5%" }}>
          <Text size="sm">
            <b style={{ paddingRight: "1%" }}>GET</b> /posts
          </Text>
          <Text size="sm">
            <b style={{ paddingRight: "1%" }}>GET</b> /posts/1
          </Text>
          <Text size="sm">
            <b style={{ paddingRight: "1%" }}>POST</b> /posts
          </Text>
          <Text size="sm">
            <b style={{ paddingRight: "1%" }}>PUT</b> /posts/1
          </Text>
          <Text size="sm">
            <b style={{ paddingRight: "1%" }}>PATCH</b> /posts/1
          </Text>
          <Text size="sm">
            <b style={{ paddingRight: "1%" }}>DELETE</b> /posts/1
          </Text>
        </div>

        <Text size="sm" mt={10}>
          Request with <b>Filter</b>, <b>Sort</b>, <b>Search</b>,{" "}
          <b>Pagination</b>:
        </Text>
        <div style={{ padding: "1% 5%" }}>
          <Text size="sm">
            <b style={{ paddingRight: "1%" }}>Filter</b>{" "}
            /posts?title=json-server&author=typicode
          </Text>
          <Text size="sm">
            <b style={{ paddingRight: "1%" }}>Sort</b>{" "}
            /posts?_sort=author&_order=asc or desc
          </Text>
          <Text size="sm">
            <b style={{ paddingRight: "1%" }}>Pagination</b>{" "}
            /posts?_page=1&_limit=10
          </Text>
          <Text size="sm">
            <b style={{ paddingRight: "1%" }}>Search</b> /posts?q=axios
          </Text>
        </div>

        <Card className={cardClasses.noteCard} my="lg" radius="lg" shadow="sm">
          <Text size="sm" mb={10}>
            We can achieve everything using{" "}
            <Anchor
              href="https://jsonplaceholder.typicode.com/"
              target="_blank"
            >
              JSON Placeholder
            </Anchor>
            . No need <b>db.json</b>.
          </Text>
          <Text size="sm" mb={10}>
            Load remote schema:{" "}
            <Code color="blue">
              json-server http://jsonplaceholder.typicode.com/db --port 4000
            </Code>
          </Text>
          <Text size="sm" weight={700}>
            Here we have /db, using /db data will persist for a single session.
          </Text>
        </Card>

        <Text size="sm" my={20}>
          We can also create our own{" "}
          <Anchor
            href="https://github.com/typicode/json-server#add-middlewares"
            target="_blank"
          >
            middleware
          </Anchor>{" "}
          to add some extra power.
        </Text>

        <Text mb={10} weight={700}>
          But the best part is: Module
        </Text>
        <Text size="sm" mb={10}>
          We can use the json-server project as a module in combination with
          other Express middlewares.
        </Text>
        <Text size="sm" mb={10}>
          Here, we will create a project using json-server only to get responses
          in specific format.
        </Text>

        <Text size="sm">
          Every response will be like{" "}
          <Text inherit component="span">
            <Code color="blue">{responseFormat}</Code>
          </Text>
        </Text>

        <Text size="sm" mt={20} mb={5}>
          Create a node project using <Code color="blue">npm init -y</Code>
        </Text>
        <Text size="sm" mb={20}>
          Install JSON Server: <Code color="blue">npm install json-server</Code>
        </Text>
        <Text size="sm">
          Create <b>server.js</b>
        </Text>
        <CustomPrism code={serverCode} language="javascript" />
        <Text size="sm" mt={20}>
          Create <b>db.json</b>
        </Text>
        <CustomPrism code={dbCode} language="json" />
        <Text size="sm" mt={20}>
          Update scripts on <b>package.json</b>
        </Text>
        <CustomPrism code={packageJson} language="json" />
        <Text size="sm" mt={20}>
          Run node project: <Code color="blue">npm start</Code>
        </Text>
        <Text size="sm" my={20}>
          Documentation of JSON Server is well written.{" "}
          <Anchor
            href="https://github.com/typicode/json-server"
            target="_blank"
          >
            Check it out
          </Anchor>
          .
        </Text>
      </main>
      <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
    </div>
  );
};

export default FakeJsonServer;
