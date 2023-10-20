import { Center, Group, createStyles, rem } from "@mantine/core";

import React from "react";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.md} ${theme.spacing.md}`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  links: {
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
}));

export function FooterCentered() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Center className="pt-2 pb-2">
        <Group className={classes.links}>
          Copyright &nbsp; © &nbsp; 2021 - {new Date().getFullYear()} &nbsp;
          Cody Richter
        </Group>
      </Center>
    </div>
  );
}
