import { useMantineTheme, Text, Card, Anchor } from "@mantine/core";
import { NextPage } from "next";
import Head from "next/head";
import useBlogsStyles from "../../helpers/useBlogsStyles";
import useNoteCardStyles from "../../helpers/useNoteCardStyles";
import GiscusDiscussion from "../../libs/giscus";

const SecureJWTInFrontendApp: NextPage = () => {
  const { colorScheme } = useMantineTheme();
  const { classes } = useBlogsStyles();
  const { classes: cardClasses } = useNoteCardStyles();

  return (
    <div className={classes.containerClass}>
      <Head>
        <title>Secure JWT (Access & Refresh Token) in Frontend App</title>
      </Head>
      <Text mb={30} size="xl" weight={700} align="center">
        Secure JWT (Access & Refresh Token) in Frontend App
      </Text>
      <section>
        <Text size="xs" color="dimmed">
          Published: Aug 06, 2022 | Last Modified: Aug 06, 2022
        </Text>
      </section>

      <main>
        <Text size="sm" my={20}>
          We all know about some authorization techniques like{" "}
          <b>Session Cookies and JWT</b>. There are lots of discussions about
          why JWT is more useful for modern applications. So we don&apos;t want
          to discuss it here, also what is JWT, how it works.
        </Text>

        <Text size="sm" mb={20}>
          As a beginner most of us can&apos;t use JWT securely. We use JWT in
          our frontend app like, after logged in we store our JWT in local
          storage or session storage. But it can be accessible with javascript
          scripts. This is as bad as it sounds, an <b>XSS attack</b> could give
          an external attacker access to the token.
        </Text>

        <Text size="sm" mb={20}>
          In the frontend app, we also don&apos;t want to store user information
          in local storage. If application business logic depends on user
          information, then this is the worst to store in local storage. Like,
          when application business logic depends on the user role and we use it
          from local storage, this is so bad.
        </Text>

        <Text size="sm" mb={10} weight={700}>
          So let&apos;s discuss how we can secure our app properly?
        </Text>
        <Text size="sm" mb={20}>
          After authentication we will set our refresh token in the
          browser&apos;s cookies and store access token, user information in the
          application store (state). We need to store them in a global store
          (Redux, React Context). When we need to pass Authorization with the
          request header, we will pass our access token from the global store.
        </Text>

        <Text size="sm" mb={10} weight={700}>
          Now, we will discuss how to store refresh token and use it properly.
        </Text>
        <Text size="sm" mb={20}>
          We will set refresh token in browser&apos;s cookies with a path and
          with httponly (no javascript script can get our token). We will set
          the path as the path of the refresh API (the API by which we can get a
          new access token). We know browsers always send cookies in every
          request. When we set the path as a refresh API, browser will only send
          cookies when we request to get a new access token. And we also set our
          refresh token in cookies with expiration time. When a user logout from
          our application, we will destroy our cookie.
        </Text>

        <Text size="sm" weight={700}>
          To store refresh token in the browser&apos;s cookies, there are 2
          things.
        </Text>
        <div style={{ paddingLeft: "5%" }}>
          <ul>
            <li>
              <Text size="sm">
                If server and frontend is deployed in the same domain, we only
                need to store our refresh token with a path, httponly and expire
                time.
              </Text>
            </li>
            <li>
              <Text size="sm">
                If server and frontend is deployed in the different domain, we
                must store our refresh token with path, httplony, expire time,
                same site as none and secure as true.
              </Text>
            </li>
          </ul>
        </div>

        <Text size="sm" weight={700}>
          Let&apos;s see, How exactly will our setup work?
        </Text>
        <div style={{ paddingLeft: "5%" }}>
          <ul>
            <li>
              <Text size="sm">
                After login, store access token to app store and set refresh
                token to cookie
              </Text>
            </li>
            <li>
              <Text size="sm">
                Send this access token in every request when there is need
              </Text>
            </li>
            <li>
              <Text size="sm">
                When request failed for authorization, call refresh API and
                obviously browser will send cookie here automatically
              </Text>
            </li>
            <li>
              <Text size="sm">
                Then using new access token, call the previous failed API
              </Text>
            </li>
            <li>
              <Text size="sm">After logout, destroy the cookie</Text>
            </li>
          </ul>
        </div>

        <Card className={cardClasses.noteCard} my="lg" radius="lg" shadow="sm">
          <Text size="sm">
            We can set up this process using Axios interceptors.{" "}
            <Anchor
              href="https://biplobmahadi.github.io/docs/axios/interceptors"
              target="_blank"
            >
              Check it here
            </Anchor>
            .
          </Text>
        </Card>

        <Text size="sm" mb={10} weight={700}>
          Finally, the most important thing.
        </Text>
        <Text size="sm" mb={20}>
          When we set or send cookies to the server using <b>XMLHttpRequest</b>{" "}
          (using Axios), we must pass withCredentials option. Also from the
          server side, we need to add the frontend domain to
          Access-Control-Allow-Origin.
        </Text>

        <Text size="sm" mb={20}>
          We can read more details about Set-Cookie.{" "}
          <Anchor
            href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"
            target="_blank"
          >
            Check it out
          </Anchor>
          .
        </Text>

        <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
      </main>
    </div>
  );
};

export default SecureJWTInFrontendApp;
