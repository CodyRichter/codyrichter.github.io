"use client";

import { IoIosArrowForward } from "react-icons/io";
import { Text } from "@mantine/core";
import Typist from "react-typist-component";
import classes from "./AutoTypeTerminal.module.css";

const TerminalText = ({ children }: { children: React.ReactNode }) => (
  <Text className={`${classes.text} mono`} span>
    {children}
  </Text>
);

export default function AutoTypeTerminal() {
  return (
    <div className={classes.terminal}>
      <Typist typingDelay={140} cursor={<TerminalText>|</TerminalText>}>
        <IoIosArrowForward className={classes.prompt} />
        <TerminalText>&#8203;</TerminalText>
        <TerminalText>Codes</TerminalText>
        <Typist.Delay ms={3000} />
        <Typist.Backspace count={4} />
        <TerminalText>reates</TerminalText>
        <Typist.Delay ms={3000} />
        <Typist.Backspace count={7} />
        <TerminalText>Innovates</TerminalText>
        <Typist.Delay ms={3000} />
        <Typist.Backspace count={7} />
        <TerminalText>vents</TerminalText>
        <Typist.Delay ms={3000} />
        <Typist.Backspace count={6} />
        <TerminalText>mproves</TerminalText>
        <Typist.Delay ms={3000} />
        <Typist.Backspace count={8} />
        <TerminalText>Designs</TerminalText>
        <Typist.Delay ms={3000} />
        <Typist.Backspace count={5} />
        <TerminalText>velops</TerminalText>
        <Typist.Delay ms={3000} />
        <Typist.Backspace count={7} />
        <TerminalText>iscovers Solutions</TerminalText>
        <Typist.Delay ms={5000} />
      </Typist>
    </div>
  );
}
