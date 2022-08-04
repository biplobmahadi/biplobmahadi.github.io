import type { NextPage } from "next";
import { Card, useMantineTheme } from "@mantine/core";
import GiscusDiscussion from "../../../libs/giscus";
import Head from "next/head";
import { Text } from "@mantine/core";
import CustomPrism from "../../../libs/prism";
import {
  customAxiosRequestConfigCode,
  requestInterceptorCode,
  responsetInterceptorCode,
  responsetInterceptorCodeCompleted,
  usePrivateAxiosCodeForUpdate,
  usePrivateAxiosCodeUpdated,
  useRefreshTokenCode,
} from "../../../consts/docs/axios";
import useNoteCardStyles from "../../../../helpers/useNoteCardStyles";

const Interceptors: NextPage = () => {
  const { colorScheme } = useMantineTheme();
  const { classes: cardClasses } = useNoteCardStyles();

  return (
    <div>
      <Head>
        <title>Interceptors - Axios for React</title>
      </Head>
      <div style={{ margin: "2% 1%" }}>
        <Text size="xl" weight={700} mb={30} align="center">
          Axios Interceptors
        </Text>
        <section>
          <Text size="xs" color="dimmed">
            Published: Jul 28, 2022 | Last Modified: Jul 31, 2022
          </Text>
        </section>
        <Text size="sm" my={20}>
          Using axios interceptor we can intercept requests or responses before
          they are handled. There are 2 types of interceptor. One is a request
          interceptor and another is a response interceptor.
        </Text>
        <Text size="sm" mb={20}>
          What does the interceptor do?
        </Text>
        <Text size="sm" mb={20}>
          Interceptor is like a middleware. If we add a request interceptor with
          any instance then when we call any API using that instance, that API
          call will go through the request interceptor before that request is
          made. Same for response interceptor.
        </Text>
        <Text size="sm" mb={20}>
          We have our private hook.
        </Text>
        <Text size="sm" weight={700}>
          hooks/usePrivateAxios.ts
        </Text>
        <CustomPrism
          code={usePrivateAxiosCodeForUpdate}
          language="typescript"
        />

        <Text size="sm" mb={30} mt={20}>
          Now, we will add a request and response interceptor with our private
          interceptor in this private hook.
        </Text>

        <Text id="requestInterceptor" weight={700} mb={20}>
          Request interceptor
        </Text>
        <Text size="sm" mb={20}>
          Using request interceptor, we will add authorization header with
          access token before the request made by private instance.
        </Text>
        <Card className={cardClasses.noteCard} my="lg" radius="lg" shadow="sm">
          <Text size="sm">
            We can pass access token from any kind of memory. It can be
            persistent memory <b>(localhost)</b> or app memory <b>(state)</b>.
          </Text>
        </Card>
        <Text size="sm">
          Create <b>interceptors/requestInterceptor.ts</b>
        </Text>
        <CustomPrism code={requestInterceptorCode} language="typescript" />

        <Text id="responseInterceptor" weight={700} mt={30} mb={20}>
          Response interceptor
        </Text>
        <Text size="sm" mb={20}>
          Here we will consider a response interceptor for refresh token
          functionality.
        </Text>
        <Text size="sm" mb={20}>
          We know, expiration time of access token is less for security purpose
          and refresh token expiration time is more. We always pass access token
          with authorization header.
        </Text>
        <Text size="sm" mb={20}>
          When any request fails for authorization error then this response
          interceptor will create an API call to the refresh token path using
          refresh token and get the access token. Then that previous request
          will call again with the latest access token.
        </Text>
        <Text size="sm" mb={20}>
          Before creating a response interceptor, let’s create a hook for
          refresh API path.
        </Text>
        <Text size="sm">
          Create <b>hooks/useRefreshToken.ts</b>
        </Text>
        <CustomPrism code={useRefreshTokenCode} language="typescript" />
        <Text size="sm" mt={20}>
          Now create <b>interceptors/responseInterceptor.ts</b>
        </Text>
        <CustomPrism code={responsetInterceptorCode} language="typescript" />

        <Card className={cardClasses.noteCard} my="lg" radius="lg" shadow="sm">
          <Text size="sm">
            There is a chance for memory leak. When a request is sent with an
            access token and it gives an authorization error then the refresh
            API will call with refresh token and if that gives the correct
            access token then the previous API will call. And if every time that
            API gives authorization error, API calls will continue infinitely.
            So we need to stop the API call after twice.
          </Text>
        </Card>

        <Text size="sm">
          The complete <b>interceptors/responseInterceptor.ts</b>
        </Text>
        <CustomPrism
          code={responsetInterceptorCodeCompleted}
          language="typescript"
        />

        <Text size="sm" mt={20}>
          For interface, create <b>interfaces/customAxiosRequestConfig.ts</b>
        </Text>
        <CustomPrism
          code={customAxiosRequestConfigCode}
          language="typescript"
        />

        <Text id="addingInterceptors" weight={700} mt={30} mb={20}>
          Adding interceptors with private hook
        </Text>
        <Text size="sm" mb={20}>
          We will remove interceptors when this hook will unmount from any
          component to avoid memory leak.
        </Text>
        <Text size="sm">
          Here the complete <b>hooks/usePrivateAxios.ts</b>
        </Text>
        <CustomPrism code={usePrivateAxiosCodeUpdated} language="typescript" />

        <div style={{ marginTop: "20px" }}>
          <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
        </div>
      </div>
    </div>
  );
};

export default Interceptors;
