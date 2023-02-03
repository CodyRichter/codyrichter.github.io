import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import useIsMobile from "../../utils/useIsMobile";
import Typist from "react-typist-component";

export default function AutoTypeTerminal() {
  const isMobile = useIsMobile();

  //  Counter for auto typing
  let [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <div
      style={{
        backgroundColor: "black",
        paddingTop: "1vh",
        paddingLeft: "1em",
        paddingRight: "1em",
        paddingBottom: "1vh",
        maxWidth: "50%",
        borderRadius: "0.75em",
        textAlign: "left",
      }}
    >
      <>
        <Typist
          typingDelay={140}
          cursor={
            <Typography
              style={{
                color: "#FFFFFF",
                fontFamily: "Source Code Pro",
                fontSize: isMobile ? "18pt" : "24pt",
              }}
              variant="h4"
              component="h4"
              display="inline"
            >
              |
            </Typography>
          }
        >
          <ArrowForwardIosIcon
            style={{ color: "white", fontSize: isMobile ? "15pt" : "20pt" }}
          />
          <Typography
            style={{
              color: "#FFFFFF",
              fontFamily: "Source Code Pro",
              fontSize: isMobile ? "18pt" : "24pt",
            }}
            variant="h4"
            component="h4"
            display="inline"
          >
            &#8203;
          </Typography>
          <Typography
            style={{
              color: "#FFFFFF",
              fontFamily: "Source Code Pro",
              fontSize: isMobile ? "18pt" : "24pt",
            }}
            variant="h4"
            component="h4"
            display="inline"
          >
            Codes
          </Typography>
          <Typist.Delay ms={3000} />
          <Typist.Backspace count={4} />
          <Typography
            style={{
              color: "#FFFFFF",
              fontFamily: "Source Code Pro",
              fontSize: isMobile ? "18pt" : "24pt",
            }}
            variant="h4"
            component="h4"
            display="inline"
          >
            reates
          </Typography>
          <Typist.Delay ms={3000} />
          <Typist.Backspace count={7} />
          <Typography
            style={{
              color: "#FFFFFF",
              fontFamily: "Source Code Pro",
              fontSize: isMobile ? "18pt" : "24pt",
            }}
            variant="h4"
            component="h4"
            display="inline"
          >
            Innovates
          </Typography>
          <Typist.Delay ms={3000} />
          <Typist.Backspace count={7} />
          <Typography
            style={{
              color: "#FFFFFF",
              fontFamily: "Source Code Pro",
              fontSize: isMobile ? "18pt" : "24pt",
            }}
            variant="h4"
            component="h4"
            display="inline"
          >
            vents
          </Typography>
          <Typist.Delay ms={3000} />
          <Typist.Backspace count={6} />
          <Typography
            style={{
              color: "#FFFFFF",
              fontFamily: "Source Code Pro",
              fontSize: isMobile ? "18pt" : "24pt",
            }}
            variant="h4"
            component="h4"
            display="inline"
          >
            mproves
          </Typography>
          <Typist.Delay ms={3000} />
          <Typist.Backspace count={8} />
          <Typography
            style={{
              color: "#FFFFFF",
              fontFamily: "Source Code Pro",
              fontSize: isMobile ? "18pt" : "24pt",
            }}
            variant="h4"
            component="h4"
            display="inline"
          >
            Designs
          </Typography>
          <Typist.Delay ms={3000} />
          <Typist.Backspace count={5} />
          <Typography
            style={{
              color: "#FFFFFF",
              fontFamily: "Source Code Pro",
              fontSize: isMobile ? "18pt" : "24pt",
            }}
            variant="h4"
            component="h4"
            display="inline"
          >
            velops
          </Typography>
          <Typist.Delay ms={3000} />
          <Typist.Backspace count={7} />
          <Typography
            style={{
              color: "#FFFFFF",
              fontFamily: "Source Code Pro",
              fontSize: isMobile ? "18pt" : "24pt",
            }}
            variant="h4"
            component="h4"
            display="inline"
          >
            iscovers Solutions
          </Typography>
          <Typist.Delay ms={5000} />
        </Typist>
      </>
    </div>
  );
}
