import { NextPage } from "next";
import { Text } from "@mantine/core";
import Head from "next/head";
import useBlogsStyles from "../../helpers/useBlogsStyles";

const PnpmInsteadOfNpmAndYarn: NextPage = () => {
  const { classes } = useBlogsStyles();

  return (
    <div className={classes.containerClass}>
      <Head>
        <title>Use pnpm instead of npm and yarn</title>
      </Head>
      <Text mb={30} size="xl" weight={700} align="center">
        Use pnpm instead of npm and yarn
      </Text>

      <main>
        <Text size="sm" my={20}>
          Coming Soon!
        </Text>
      </main>
    </div>
  );
};

export default PnpmInsteadOfNpmAndYarn;
