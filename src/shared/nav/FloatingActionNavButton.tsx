"use client";

import { Button } from "@mantine/core";
import { SlArrowDown } from "react-icons/sl";
import classes from "./FloatingActionNavButton.module.css";

interface Props {
  currentSectionId: number;
  finalSectionId: number;
  scrollToNextSection: () => void;
}

export default function FloatingActionNavButton({
  currentSectionId,
  finalSectionId,
  scrollToNextSection,
}: Props) {
  const atEnd = currentSectionId === finalSectionId;

  return (
    <Button
      className={classes.button}
      variant="gradient"
      size="lg"
      onClick={scrollToNextSection}
      aria-label={atEnd ? "Scroll back to top" : "Scroll to next section"}
    >
      <SlArrowDown
        className={atEnd ? classes.flippedIcon : classes.normalIcon}
      />
    </Button>
  );
}
