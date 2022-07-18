import { Avatar, Card, Center, Group, Text } from "@mantine/core";
import { FC } from "react";

export const Experiences: FC = () => {
  return (
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
  );
};
