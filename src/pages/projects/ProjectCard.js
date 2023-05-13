import {
  ActionIcon,
  Center,
  Divider,
  Group,
  Paper,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import React, { cloneElement } from "react";

import { FaGithub } from "react-icons/fa";
import { GiPapers } from "react-icons/gi";
import { isEmpty } from "lodash";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
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
  githubLink,
  paperLink = null,
  icon,
  iconColor = "black",
}) => {
  const { classes } = useStyles();

  return (
    <Paper withBorder radius="md" className={classes.card}>
      <Text fz="lg" fw={500} mt="md" span>
        {cloneElement(icon, { color: iconColor })} &nbsp; {title}
      </Text>
      <Text fz="sm" c="dimmed" mt={5}>
        {description}
      </Text>

      <Divider mt="md" mb="sm" />

      <Center>
        <Group>
          {!isEmpty(githubLink) && (
            <ActionIcon
              color="blue"
              size="xl"
              onClick={() => window.open(githubLink, "_blank")}
            >
              <FaGithub size={20} />
            </ActionIcon>
          )}

          {!isEmpty(paperLink) && (
            <ActionIcon
              color="blue"
              size="xl"
              onClick={() => window.open(paperLink, "_blank")}
            >
              <GiPapers size={20} />
            </ActionIcon>
          )}
        </Group>
      </Center>
    </Paper>
  );
};

export default ProjectCard;
