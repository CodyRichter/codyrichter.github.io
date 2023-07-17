import { Button, createStyles, keyframes } from "@mantine/core";

import React from "react";
import { SlArrowDown } from "react-icons/sl";

const rotateIconDown = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(180deg)" },
});
const rotateIconUp = keyframes({
  from: { transform: "rotate(180deg)" },
  to: { transform: "rotate(0deg)" },
});

const useStyles = createStyles((theme) => ({
  normalIcon: {
    animation: `${rotateIconUp} 0.2s linear`,
  },
  flippedIcon: {
    animation: `${rotateIconDown} 0.2s linear`,
    animationFillMode: "forwards",
  },
}));

const FloatingActionNavButton = ({
  currentSectionId,
  finalSectionId,
  scrollToNextSection,
}) => {
  const { classes } = useStyles();

  return (
    <Button
      style={{
        position: "fixed",
        bottom: "20px",
        right: "30px",
        zIndex: 9999,
      }}
      variant="gradient"
      size="lg"
      onClick={scrollToNextSection}
    >
      <SlArrowDown
        className={
          currentSectionId === finalSectionId
            ? classes.flippedIcon
            : classes.normalIcon
        }
      />
    </Button>
  );
};

export default FloatingActionNavButton;
