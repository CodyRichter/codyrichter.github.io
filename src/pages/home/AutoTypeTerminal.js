import React, { useEffect, useState } from "react";

import { IoIosArrowForward } from "react-icons/io";
import { Text } from "@mantine/core";
import Typist from "react-typist-component";
import useIsMobile from "../../utils/useIsMobile";

// Create a component that wraps the mantine text component
// and adds a white color and source code pro font
const TerminalText = (props) => (
  <Text
    style={{
      color: "#ffffff",
      fontFamily: "Source Code Pro",
      fontSize: props.isMobile ? "18pt" : "24pt",
    }}
    span
  >
    {props.children}
  </Text>
);

export default function AutoTypeTerminal() {
  const isMobile = useIsMobile();

  //  Counter for auto typing
  let [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  }, [count]);

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

  return (
    <div
      style={{
        backgroundColor: "black",
        paddingTop: "1vh",
        paddingLeft: "1em",
        paddingRight: "1em",
        paddingBottom: "1vh",
        minWidth: isMobile ? "80vw" : "40vw",
        borderRadius: "0.75em",
        textAlign: "left",
      }}
    >
      <>
        <Typist
          typingDelay={140}
          cursor={<TerminalText isMobile={isMobile}>|</TerminalText>}
        >
          <IoIosArrowForward
            style={{ color: "white", fontSize: isMobile ? "15pt" : "20pt" }}
          />
          <TerminalText isMobile={isMobile}>&#8203;</TerminalText>
          <TerminalText isMobile={isMobile}>Codes</TerminalText>
          <Typist.Delay ms={3000} />
          <Typist.Backspace count={4} />
          <TerminalText isMobile={isMobile}>reates</TerminalText>
          <Typist.Delay ms={3000} />
          <Typist.Backspace count={7} />
          <TerminalText isMobile={isMobile}>Innovates</TerminalText>
          <Typist.Delay ms={3000} />
          <Typist.Backspace count={7} />
          <TerminalText isMobile={isMobile}>vents</TerminalText>
          <Typist.Delay ms={3000} />
          <Typist.Backspace count={6} />
          <TerminalText isMobile={isMobile}>mproves</TerminalText>
          <Typist.Delay ms={3000} />
          <Typist.Backspace count={8} />
          <TerminalText isMobile={isMobile}>Designs</TerminalText>
          <Typist.Delay ms={3000} />
          <Typist.Backspace count={5} />
          <TerminalText isMobile={isMobile}>velops</TerminalText>
          <Typist.Delay ms={3000} />
          <Typist.Backspace count={7} />
          <TerminalText isMobile={isMobile}>iscovers Solutions</TerminalText>
          <Typist.Delay ms={5000} />
        </Typist>
      </>
    </div>
  );
}
