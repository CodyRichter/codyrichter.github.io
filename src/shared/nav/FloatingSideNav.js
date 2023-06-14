import {
  Button,
  Card,
  Center,
  Collapse,
  Divider,
  Stack,
  createStyles,
  rem,
} from "@mantine/core";
import { RiHome2Line, RiMenu3Line } from "react-icons/ri";

import { FiMinimize } from "react-icons/fi";
import { HiDocument } from "react-icons/hi";
import React from "react";
import { TbHammer } from "react-icons/tb";
import { useDisclosure } from "@mantine/hooks";
import useIsMobile from "../../utils/useIsMobile";

const useStyles = createStyles((theme) => ({
  burgerClosed: {
    position: "fixed",
    top: "20px",
    left: "30px",
    zIndex: 9999,
    borderRadius: "10%",
    paddingLeft: "1em",
    paddingRight: "1em",
  },
  burderOpen: {
    position: "fixed",
    top: "20px",
    left: "30px",
    minWidth: "15vw",
    zIndex: 9999,
    borderRadius: "10px 10px 0px 0px",
  },
  collapse: {
    position: "fixed",
    top: `calc(20px + 35px)`, // We need to account for the height of the burger button. "md" is 40px by default in Mantine
    left: "30px",
    zIndex: 9998,
  },
  card: {
    minWidth: "15vw",
    overflow: "hidden",
    padding: theme.spacing.xl,
    boxShadow: theme.shadows.lg,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,
    zIndex: 9997,

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

export default function FloatingSideNav({ scrollToSectionByName }) {
  const { classes } = useStyles();

  const isMobile = useIsMobile();

  const [opened, { toggle }] = useDisclosure(false);

  return isMobile ? (
    <></>
  ) : (
    <>
      <Button
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
        size="md"
        className={opened ? classes.burderOpen : classes.burgerClosed}
        onClick={toggle}
      >
        {opened ? (
          <>
            <FiMinimize />
          </>
        ) : (
          <RiMenu3Line />
        )}
      </Button>
      <Collapse in={opened} className={classes.collapse}>
        <Card withBorder radius="md" className={classes.card}>
          <Center>
            <Stack>
              <Button
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan" }}
                leftIcon={<RiHome2Line />}
                onClick={() => scrollToSectionByName("home")}
              >
                Home
              </Button>

              <Divider />

              <Button
                variant="gradient"
                gradient={{ from: "cyan", to: "teal" }}
                leftIcon={<TbHammer />}
                onClick={() => scrollToSectionByName("projects")}
              >
                Projects
              </Button>

              <Divider />

              <Button
                variant="gradient"
                gradient={{ from: "teal", to: "blue" }}
                leftIcon={<HiDocument />}
                onClick={() => scrollToSectionByName("experience")}
              >
                Experience
              </Button>

              <Divider />
            </Stack>
          </Center>
        </Card>
      </Collapse>
    </>
  );
}
