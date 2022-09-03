import { Badge, Card, Grid, Text } from "@mantine/core";
import { FC } from "react";

export const Skills: FC = () => {
  return (
    <Card mt="md" radius="lg" shadow="sm">
      <Grid columns={24}>
        <Grid.Col sm={6}>
          <div style={{ textAlign: "center" }}>
            <Text weight={700} size="xs" mb={10} transform="uppercase">
              Languages
            </Text>
            <Badge variant="dot" m={3}>
              C
            </Badge>
            <Badge variant="dot" m={3}>
              C++
            </Badge>
            <Badge variant="dot" m={3}>
              JavaScript
            </Badge>
            <Badge variant="dot" m={3}>
              TypeScript
            </Badge>
            <Badge variant="dot" m={3}>
              Python
            </Badge>
            <Badge variant="dot" m={3}>
              SQL
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
              NodeJs
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
              Flask
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
              DevTools & Concepts
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
            <Badge variant="dot" m={3}>
              AWS
            </Badge>
            <Badge variant="dot" m={3}>
              OOP
            </Badge>
            <Badge variant="dot" m={3}>
              Functional Programming
            </Badge>
            <Badge variant="dot" m={3}>
              Testing
            </Badge>
            <Badge variant="dot" m={3}>
              Design Patterns
            </Badge>
          </div>
        </Grid.Col>
      </Grid>
    </Card>
  );
};
