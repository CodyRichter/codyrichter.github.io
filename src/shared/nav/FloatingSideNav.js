import {
  Button,
  Card,
  Center,
  Divider,
  Stack,
  Title,
  createStyles,
  rem,
} from "@mantine/core";

import React from "react";
import { scroller } from "react-scroll";
import useIsMobile from "../../utils/useIsMobile";

const useStyles = createStyles((theme) => ({
  card: {
    position: "fixed",
    minWidth: "15vw",
    top: "8vh",
    left: "3vw",
    zIndex: 1000,
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.blue[9],
        theme.colors.teal[3]
      ),
    },

    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.blue[9],
        theme.colors.teal[3]
      ),
    },
  },
}));

function scrollToSection(elementName, containerId) {
  scroller.scrollTo(elementName, {
    duration: 1500,
    delay: 100,
    smooth: true,
    containerId: containerId,
    offset: 10, // Scrolls to element + 10 pixels down the page
  });
}

export default function FloatingSideNav() {
  const { classes } = useStyles();

  const isMobile = useIsMobile();

  return isMobile ? (
    <></>
  ) : (
    <>
      <Card withBorder radius="md" className={classes.card}>
        <Center>
          <Stack>
            <Title order={4} align="center">
              Navigate
            </Title>

            <Divider />

            <Button
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
            >
              Home
            </Button>

            <Divider />

            <Button
              variant="gradient"
              gradient={{ from: "cyan", to: "teal" }}
              onClick={() =>
                scrollToSection("ProjectSection", "projectSection")
              }
            >
              Projects
            </Button>

            <Divider />

            <Button variant="gradient" gradient={{ from: "teal", to: "blue" }}>
              Experience
            </Button>

            <Divider />
          </Stack>
        </Center>
      </Card>
    </>
  );
}
