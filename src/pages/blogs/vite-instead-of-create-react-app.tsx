import { NextPage } from "next";
import { Text } from "@mantine/core";
import Head from "next/head";
import useBlogsStyles from "../../helpers/useBlogsStyles";

const ViteInsteadOfCreateReactApp: NextPage = () => {
  const { classes } = useBlogsStyles();

  return (
    <div className={classes.containerClass}>
      <Head>
        <title>Use vite instead of create-react-app</title>
      </Head>
      <Text mb={30} size="xl" weight={700} align="center">
        Use vite instead of create-react-app
      </Text>

      <main>
        <Text size="sm" my={20}>
          Coming Soon!
        </Text>
      </main>
    </div>
  );
};

export default ViteInsteadOfCreateReactApp;
