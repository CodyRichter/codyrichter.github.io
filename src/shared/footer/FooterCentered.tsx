"use client";

import { Center, Group } from "@mantine/core";

import classes from "./FooterCentered.module.css";

export function FooterCentered() {
  return (
    <footer className={classes.footer}>
      <Center>
        <Group className={classes.links}>
          Copyright &nbsp; © &nbsp; 2021 -{" "}
          {/* The year is baked in at build time; let the client correct it. */}
          <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
          &nbsp; Cody Richter
        </Group>
      </Center>
    </footer>
  );
}
