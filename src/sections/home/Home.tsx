"use client";

import { ActionIcon, Center, Grid, Menu, Space, Text } from "@mantine/core";
import { CiLinkedin, CiMail } from "react-icons/ci";

import AutoTypeTerminal from "./AutoTypeTerminal";
import Image from "next/image";
import { MdPlace } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import classes from "./Home.module.css";
import { notifications } from "@mantine/notifications";
import { sectionIndex } from "@/sections";
import { useSectionInView } from "@/shared/SiteChrome";

const EMAIL = "cody@richter.codes";
const section = sectionIndex("home");

export default function Home() {
  const { ref } = useSectionInView(section, 0.6);

  return (
    <div id={`section-${section}`} ref={ref}>
      <Grid classNames={{ root: classes.hero, inner: classes.heroInner }}>
        <Grid.Col span={12}>
          <Center>
            <Image
              className={classes.avatar}
              src="/headshot.webp"
              alt="A picture of Cody Richter"
              width={250}
              height={250}
              priority
            />
          </Center>
        </Grid.Col>

        <Grid.Col span={12} className={classes.row}>
          <Center>
            <Text className={`${classes.white} ${classes.name} mono`}>
              Cody Richter
            </Text>
          </Center>
          <Center>
            <AutoTypeTerminal />
          </Center>
        </Grid.Col>

        <Grid.Col span={12} className={classes.row}>
          <Center>
            <a
              className={`${classes.icon} ${classes.github}`}
              href="https://github.com/codyrichter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <VscGithub />
            </a>

            <Space w="lg" />

            <a
              className={`${classes.icon} ${classes.linkedin}`}
              href="https://linkedin.com/in/cody-richter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <CiLinkedin />
            </a>

            <Space w="md" />

            <Menu shadow="md" position="top">
              <Menu.Target>
                <ActionIcon
                  className={classes.mailButton}
                  color="white"
                  variant="transparent"
                  aria-label="Contact via email"
                >
                  <CiMail className={classes.mailIcon} color="white" />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Contact Via Email</Menu.Label>
                <Menu.Item
                  leftSection={<CiMail size={14} />}
                  component="a"
                  href={`mailto:${EMAIL}`}
                >
                  Send Email
                </Menu.Item>
                <Menu.Item
                  leftSection={<CiMail size={14} />}
                  onClick={() => {
                    navigator.clipboard.writeText(EMAIL);
                    notifications.show({
                      title: "Copied Email Address to Clipboard!",
                      message: EMAIL,
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

        <Grid.Col span={12} className={classes.row}>
          <Center>
            <MdPlace className={classes.pin} />
            &nbsp;
            <Text className={`${classes.white} ${classes.location} mono`}>
              Seattle, WA
            </Text>
          </Center>
        </Grid.Col>
      </Grid>
    </div>
  );
}
