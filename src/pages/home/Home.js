import {
  ActionIcon,
  Avatar,
  Center,
  Grid,
  Menu,
  Space,
  Text,
} from "@mantine/core";
import { CiLinkedin, CiMail } from "react-icons/ci";

import AutoTypeTerminal from "./AutoTypeTerminal";
import { MdPlace } from "react-icons/md";
import React from "react";
import { VscGithub } from "react-icons/vsc";
import { b64Image } from "./b64Image";
import { notifications } from "@mantine/notifications";
import useIsMobile from "../../utils/useIsMobile";

const WhiteText = (props) => (
  <Text
    style={{
      color: "#ffffff",
      fontFamily: "Source Code Pro",
      ...props.style,
    }}
  >
    {props.children}
  </Text>
);

function Home() {
  const isMobile = useIsMobile();

  return (
    <div>
      <Grid style={{ marginTop: "12vh", width: "100vw" }}>
        <Grid.Col span={12}>
          <Center>
            <Avatar
              variant="outline"
              alt="A picture of Cody Richter"
              src={`data:image/png;base64,${b64Image}`}
              style={
                isMobile
                  ? { width: 175, height: 175, borderRadius: "50%" }
                  : { width: 250, height: 250, borderRadius: "50%" }
              }
            />
          </Center>
        </Grid.Col>

        <Grid.Col span={12} style={{ marginBottom: "2vh", marginTop: "2vh" }}>
          <Center>
            <WhiteText
              variant="h2"
              style={{
                marginBottom: "2vh",
                fontSize: isMobile ? "26pt" : "40pt",
              }}
            >
              Cody Richter
            </WhiteText>
          </Center>
          <Center>
            <AutoTypeTerminal />
          </Center>
        </Grid.Col>

        <Grid.Col span={12} style={{ marginBottom: "2vh", marginTop: "2vh" }}>
          <Center>
            <VscGithub
              size={isMobile ? 30 : 50}
              color="white"
              onClick={() => {
                window.open("https://github.com/codyrichter", "_blank");
              }}
              style={{ cursor: "pointer" }}
            />

            <Space w="lg" />

            <CiLinkedin
              size={isMobile ? 40 : 60}
              color="white"
              onClick={() => {
                window.open("https://linkedin.com/in/cody-richter", "_blank");
              }}
              style={{ cursor: "pointer" }}
            />

            <Space w="md" />

            <Menu shadow="md" position="top">
              <Menu.Target>
                <ActionIcon
                  size={isMobile ? 40 : 60}
                  color="white"
                  variant="transparent"
                >
                  <CiMail size={isMobile ? 40 : 60} color="white" />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Contact Via Email</Menu.Label>
                <Menu.Item
                  icon={<CiMail size={14} />}
                  onClick={() => {
                    window.open("mailto:cody@richter.codes");
                  }}
                >
                  Send Email
                </Menu.Item>
                <Menu.Item
                  icon={<CiMail size={14} />}
                  onClick={() => {
                    navigator.clipboard.writeText("cody@richter.codes");
                    notifications.show({
                      title: "Copied Email Address to Clipboard!",
                      message: "cody@richter.codes",
                      color: "teal",
                      autoClose: 3000,
                    });
                  }}
                >
                  Copy Address
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Center>
        </Grid.Col>

        <Grid.Col span={12} style={{ marginBottom: "2vh", marginTop: "2vh" }}>
          <Center>
            <MdPlace
              style={{ fontSize: isMobile ? "2em" : "3em", color: "white" }}
            />
            &nbsp;
            <WhiteText
              variant="h4"
              className="code"
              style={{ fontSize: isMobile ? "20pt" : "26pt" }}
            >
              Amherst, MA
            </WhiteText>
          </Center>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Home;
