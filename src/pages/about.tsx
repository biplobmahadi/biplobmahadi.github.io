import { Button, Center, Grid } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import downloadFile from "../utils/downloadFile";
import {
  Education,
  Enjoy,
  Experiences,
  Packages,
  Profile,
  ShortIntro,
  Skills,
} from "../components/about";

const AboutPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>About me</title>
      </Head>

      <Profile />

      <div style={{ margin: "2% 3%" }}>
        <ShortIntro />
        <Skills />
        <Packages />
        <div style={{ height: "100%" }}>
          <Grid columns={24}>
            <Grid.Col sm={12}>
              <Experiences />
            </Grid.Col>

            <Grid.Col sm={12}>
              <Education />
            </Grid.Col>
          </Grid>
        </div>

        <Enjoy />

        <Center>
          <Button
            variant="outline"
            onClick={() => downloadFile("/Mahadi's_Resume.pdf")}
          >
            Download Resume
          </Button>
        </Center>
      </div>
    </Fragment>
  );
};

export default AboutPage;
