import {
  Avatar,
  Badge,
  Button,
  Card,
  Center,
  Grid,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import downloadFile from "../utils/downloadFile";
import {
  BrandFacebook,
  BrandLinkedin,
  BrandGithub,
  Template,
} from "tabler-icons-react";

const About: NextPage = () => {
  const { colorScheme } = useMantineTheme();

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
          <Image src="/me.jpg" alt="Profile picture" width={110} height={110} />
        </div>
      </Center>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <Text weight={700} size="xl">
          Mahadi Hasan Biplob
        </Text>
        <Text weight={700} size="sm">
          Software Engineer
        </Text>
        <a
          href="https://github.com/biplobmahadi/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "0px 3px" }}
        >
          <BrandGithub
            size={20}
            color={colorScheme === "dark" ? "gray" : "#171515"}
          />
        </a>
        <a
          href="https://linkedin.com/in/mahadi-hasan-biplob-a56535161"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "0px 3px" }}
        >
          <BrandLinkedin size={20} color="#0072b1" />
        </a>
        <a
          href="https://facebook.com/profile.php?id=100014558505131"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "0px 3px" }}
        >
          <BrandFacebook size={20} color="#4267B2" />
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
          <Group position="center">
            <Button
              leftIcon={<Template size={16} />}
              variant="light"
              radius="xl"
              size="xs"
            >
              React Template
            </Button>
            <Button
              leftIcon={<Template size={16} />}
              variant="light"
              radius="xl"
              size="xs"
            >
              Vite Template
            </Button>
          </Group>
          {/* <Chips
            position="center"
            multiple
            defaultValue={["react-template", "vite-template"]}
          >
            <Chip value="react-template">React Template</Chip>
            <Chip value="vite-template">Vite Template</Chip>
          </Chips> */}
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
                    size={80}
                    radius="lg"
                    sx={{ border: "1px gray solid" }}
                  />
                  <div>
                    <Text size="xs" weight={700} color="dimmed">
                      Associate Software Engineer
                    </Text>

                    <Text weight={700}>Kaz Software </Text>
                    <Text size="xs" color="dimmed">
                      Aug 2021 - Present
                    </Text>

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
                    size={80}
                    radius="lg"
                    sx={{ border: "1px gray solid" }}
                  />
                  <div>
                    <Text size="xs" weight={700} color="dimmed">
                      Frontend Engineer
                    </Text>

                    <Text weight={700}>Drobboo Limited</Text>
                    <Text size="xs" color="dimmed">
                      Jun 2021 - Jul 2021
                    </Text>

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
                    size={80}
                    radius="lg"
                    sx={{ border: "1px gray solid" }}
                  />
                  <div>
                    <Text size="xs" weight={700} color="dimmed">
                      Full Stack Developer (Intern)
                    </Text>

                    <Text weight={700}>Merchant Bay LTD</Text>
                    <Text size="xs" color="dimmed">
                      Apr 2020 - Sep 2020
                    </Text>

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
                    size={65}
                    radius="lg"
                    sx={{ border: "1px gray solid" }}
                  />
                  <div>
                    <Text weight={700}>
                      Rajshahi University of Engineering & Technology
                    </Text>
                    <Text size="xs" color="dimmed">
                      Feb 2016 - Mar 2021
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
                    size={65}
                    radius="lg"
                    sx={{ border: "1px gray solid" }}
                  />
                  <div>
                    <Text weight={700}>Narsingdi Model College</Text>
                    <Text size="xs" color="dimmed">
                      Jun 2013 - May 2015
                    </Text>

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
                    size={65}
                    radius="lg"
                    sx={{ border: "1px gray solid" }}
                  />
                  <div>
                    <Text weight={700}>Harishangan High School</Text>
                    <Text size="xs" color="dimmed">
                      Jan 2008 - Feb 2013
                    </Text>

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
