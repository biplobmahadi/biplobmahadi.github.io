import { FC } from "react";
import { Avatar, Card, Center, Group, Text } from "@mantine/core";

export const Education: FC = () => {
  return (
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
  );
};
