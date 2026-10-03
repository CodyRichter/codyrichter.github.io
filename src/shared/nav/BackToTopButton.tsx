"use client";

import { ActionIcon } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";
import classes from "./BackToTopButton.module.css";
import { usePastHero } from "./usePastHero";

export default function BackToTopButton({ onClick }: { onClick: () => void }) {
  const pastHero = usePastHero();

  return (
    <ActionIcon
      className={classes.button}
      data-visible={pastHero || undefined}
      size={48}
      radius="xl"
      color="navy.8"
      variant="filled"
      onClick={onClick}
      tabIndex={pastHero ? 0 : -1}
      aria-label="Back to top"
    >
      <IconArrowUp size={22} />
    </ActionIcon>
  );
}
