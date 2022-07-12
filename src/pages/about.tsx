import {
  Avatar,
  Badge,
  Button,
  Card,
  Center,
  Chip,
  Chips,
  Grid,
  Group,
  Image,
  Text,
} from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import downloadFile from "../utils/downloadFile";
import { BrandFacebook, BrandLinkedin, BrandGithub } from "tabler-icons-react";

const About: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>About me</title>
      </Head>

      <Center>
        <div
          style={{
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image src="/me.jpg" alt="Profile picture" width={100} height={100} />
        </div>
      </Center>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <Text weight={700}>Mahadi Hasan Biplob</Text>
        <Text weight={700} size="xs">
          Software Engineer
        </Text>
        <a
          href="https://github.com/biplobmahadi/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "0px 3px" }}
        >
          <BrandGithub size={18} color="#171515" />
        </a>
        <a
          href="https://linkedin.com/in/mahadi-hasan-biplob-a56535161"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "0px 3px" }}
        >
          <BrandLinkedin size={18} color="#0072b1" />
        </a>
        <a
          href="https://github.com/biplobmahadi/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "0px 3px" }}
        >
          <BrandFacebook size={18} color="#4267B2" />
        </a>
        <div>
          <Text size="xs">+8801753183119 | biplob.ruet15@gmail.com</Text>
          <Text size="xs" color="dimmed">
            Dhaka, Bangladesh
          </Text>
        </div>
      </div>

      <div style={{ margin: "2% 3%" }}>
        <Card mt="md" radius="lg" shadow="sm">
          <Text size="sm">
            A dedicated programmer having problem solving skills. I want to
            learn advanced knowledge of software engineering and architecture.
            My first priority is to learn and implement the skills.
          </Text>
        </Card>

        <Card mt="md" radius="lg" shadow="sm">
          <Grid columns={24}>
            <Grid.Col sm={6}>
              <div style={{ textAlign: "center" }}>
                <Text weight={700} size="xs" mb={10} transform="uppercase">
                  Languages
                </Text>
                <Badge variant="dot" m={3}>
                  C/C++
                </Badge>
                <Badge variant="dot" m={3}>
                  JavaScript
                </Badge>
                <Badge variant="dot" m={3}>
                  TypeScript
                </Badge>
                <Badge variant="dot" m={3}>
                  C#
                </Badge>
                <Badge variant="dot" m={3}>
                  Python
                </Badge>
              </div>
            </Grid.Col>
            <Grid.Col sm={6}>
              <div style={{ textAlign: "center" }}>
                <Text weight={700} size="xs" mb={10} transform="uppercase">
                  Frontend
                </Text>
                <Badge variant="dot" m={3}>
                  ReactJs
                </Badge>
                <Badge variant="dot" m={3}>
                  NextJs
                </Badge>
                <Badge variant="dot" m={3}>
                  Redux
                </Badge>
                <Badge variant="dot" m={3}>
                  React Router
                </Badge>
                <Badge variant="dot" m={3}>
                  Axios
                </Badge>
                <Badge variant="dot" m={3}>
                  React Query
                </Badge>
                <Badge variant="dot" m={3}>
                  SWR
                </Badge>
                <Badge variant="dot" m={3}>
                  Package needed
                </Badge>
              </div>
            </Grid.Col>
            <Grid.Col sm={6}>
              <div style={{ textAlign: "center" }}>
                <Text weight={700} size="xs" mb={10} transform="uppercase">
                  Backend
                </Text>
                <Badge variant="dot" m={3}>
                  DotNet
                </Badge>
                <Badge variant="dot" m={3}>
                  ExpressJs
                </Badge>
                <Badge variant="dot" m={3}>
                  Django
                </Badge>
                <Badge variant="dot" m={3}>
                  DRF
                </Badge>
                <Badge variant="dot" m={3}>
                  Postgresql
                </Badge>
                <Badge variant="dot" m={3}>
                  MongoDB
                </Badge>
                <Badge variant="dot" m={3}>
                  Package needed
                </Badge>
              </div>
            </Grid.Col>
            <Grid.Col sm={6}>
              <div style={{ textAlign: "center" }}>
                <Text weight={700} size="xs" mb={10} transform="uppercase">
                  DevTools
                </Text>
                <Badge variant="dot" m={3}>
                  Git
                </Badge>
                <Badge variant="dot" m={3}>
                  Docker
                </Badge>
                <Badge variant="dot" m={3}>
                  Nginx
                </Badge>
              </div>
            </Grid.Col>
          </Grid>
        </Card>

        <Card mt="md" radius="lg" shadow="sm">
          <Chips>
            <Chip checked>React Template</Chip>
            <Chip checked>Vite Template</Chip>
          </Chips>
        </Card>

        <div style={{ height: "100%" }}>
          <Grid columns={24}>
            <Grid.Col sm={12}>
              <Card mt="md" radius="lg" shadow="sm" sx={{ height: "95%" }}>
                <Center mb={30}>
                  <Text weight={700}>Experiences</Text>
                </Center>

                <Group noWrap mb={25}>
                  <Avatar
                    src="/kaz.jpeg"
                    size={65}
                    radius="lg"
                    sx={{ border: "1px gray solid" }}
                  />
                  <div>
                    <Text size="xs" weight={700} color="dimmed">
                      Associate Software Engineer
                    </Text>

                    <Text weight={700}>Kaz Software</Text>

                    <Group noWrap spacing={10} mt={3}>
                      <Text size="xs" color="dimmed">
                        Dhaka, Bangladesh
                      </Text>
                    </Group>
                  </div>
                </Group>

                <Group noWrap mb={25}>
                  <Avatar
                    src="/drobboo.jpeg"
                    size={65}
                    radius="lg"
                    sx={{ border: "1px gray solid" }}
                  />
                  <div>
                    <Text size="xs" weight={700} color="dimmed">
                      Frontend Engineer
                    </Text>

                    <Text weight={700}>Drobboo Limited</Text>

                    <Group noWrap spacing={10} mt={3}>
                      <Text size="xs" color="dimmed">
                        Dhaka, Bangladesh
                      </Text>
                    </Group>
                  </div>
                </Group>

                <Group noWrap mb={25}>
                  <Avatar
                    src="/merchant.png"
                    size={65}
                    radius="lg"
                    sx={{ border: "1px gray solid" }}
                  />
                  <div>
                    <Text size="xs" weight={700} color="dimmed">
                      Full Stack Developer (Intern)
                    </Text>

                    <Text weight={700}>Merchant Bay LTD</Text>

                    <Group noWrap spacing={10} mt={3}>
                      <Text size="xs" color="dimmed">
                        Dhaka, Bangladesh
                      </Text>
                    </Group>
                  </div>
                </Group>
              </Card>
            </Grid.Col>

            <Grid.Col sm={12}>
              <Card mt="md" radius="lg" shadow="sm" sx={{ height: "95%" }}>
                <Center mb={30}>
                  <Text weight={700}>Education</Text>
                </Center>

                <Group noWrap mb={25}>
                  <Avatar
                    src="/ruet.jpeg"
                    size={50}
                    radius="lg"
                    sx={{ border: "1px gray solid" }}
                  />
                  <div>
                    <Text weight={700}>
                      Rajshahi University of Engineering & Technology
                    </Text>

                    <Group noWrap spacing={10} mt={3}>
                      <Text size="xs" color="dimmed">
                        Rajshahi, Bangladesh
                      </Text>
                    </Group>
                  </div>
                </Group>

                <Group noWrap mb={25}>
                  <Avatar
                    src="/college.png"
                    size={50}
                    radius="lg"
                    sx={{ border: "1px gray solid" }}
                  />
                  <div>
                    <Text weight={700}>Narsingdi Model College</Text>

                    <Group noWrap spacing={10} mt={3}>
                      <Text size="xs" color="dimmed">
                        Narsingdi, Dhaka, Bangladesh
                      </Text>
                    </Group>
                  </div>
                </Group>

                <Group noWrap mb={25}>
                  <Avatar
                    src="/school.png"
                    size={50}
                    radius="lg"
                    sx={{ border: "1px gray solid" }}
                  />
                  <div>
                    <Text weight={700}>Harishangan High School</Text>

                    <Group noWrap spacing={10} mt={3}>
                      <Text size="xs" color="dimmed">
                        Narsingdi, Dhaka, Bangladesh
                      </Text>
                    </Group>
                  </div>
                </Group>
              </Card>
            </Grid.Col>
          </Grid>
        </div>

        <Card mt="md" mb="xl" radius="lg" shadow="sm">
          <Badge mr={5}>Family</Badge>
          <Badge mr={5}>Friends</Badge>
          <Badge mr={5}>Bike</Badge>
          <Badge mr={5}>Travel</Badge>
          <Badge mr={5}>Learn</Badge>
          <Badge mr={5}>Improve</Badge>
          <Badge mr={5}>Sleep</Badge>
        </Card>

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

export default About;
