import { Button, Card, Text, createStyles, rem } from "@mantine/core";
import React, { cloneElement } from "react";

import { FaGithub } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { isEmpty } from "lodash";

const useStyles = createStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },

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
  },
}));

const ProjectCard = ({
  title,
  description,
  githubLink = null,
  paperLink = null,
  icon,
  iconColor = "black",
}) => {
  const { classes } = useStyles();

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={classes.card}
    >
      <Card.Section withBorder inheritPadding py="xs">
        {cloneElement(icon, { color: iconColor, size: "1em" })} &nbsp; {title}
      </Card.Section>
      <Card.Section inheritPadding style={{ flex: "1" }}>
        <br />
        <Text size="sm" color="dimmed">
          {description}
        </Text>
        <br />
      </Card.Section>
      <Button.Group style={{ marginTop: "auto" }}>
        {!isEmpty(githubLink) && (
          <Button
            fullWidth
            leftIcon={<FaGithub size={20} />}
            onClick={() => window.open(githubLink, "_blank")}
            variant="outline"
          >
            View Code
          </Button>
        )}

        {!isEmpty(paperLink) && (
          <Button
            fullWidth
            leftIcon={<IoIosPaper size={20} />}
            onClick={() => window.open(paperLink, "_blank")}
            variant="outline"
          >
            Read Paper
          </Button>
        )}
      </Button.Group>
    </Card>
  );
};

export default ProjectCard;
