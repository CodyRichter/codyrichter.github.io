"use client";

import { Center, Grid, Group, Menu, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconChevronDown,
  IconCopy,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";

import AutoTypeTerminal from "./AutoTypeTerminal";
import Image from "next/image";
import classes from "./Home.module.css";
import { notifications } from "@mantine/notifications";
import { sectionIndex } from "@/sections";

const EMAIL = "cody@richter.codes";
const section = sectionIndex("home");

export default function Home() {
  return (
    <div id={`section-${section}`}>
      <Grid classNames={{ root: classes.hero, inner: classes.heroInner }}>
        <Grid.Col span={12}>
          <Center>
            <Image
              className={classes.avatar}
              src="/headshot.webp"
              alt="A picture of Cody Richter"
              width={250}
              height={250}
              loading="eager"
              fetchPriority="high"
            />
          </Center>
        </Grid.Col>

        <Grid.Col span={12} className={classes.row}>
          <Center>
            <Text
              component="h1"
              className={`${classes.white} ${classes.name} mono`}
            >
              Cody Richter
            </Text>
          </Center>
          <Text className={classes.tagline}>Software Engineer @ Affirm</Text>
          <Center>
            <AutoTypeTerminal />
          </Center>
        </Grid.Col>

        <Grid.Col span={12} className={classes.row}>
          <Group justify="center" gap="md">
            <a
              className={classes.icon}
              href="https://github.com/codyrichter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <IconBrandGithub size={32} stroke={1.5} />
            </a>

            <a
              className={classes.icon}
              href="https://linkedin.com/in/cody-richter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={32} stroke={1.5} />
            </a>

            <Menu shadow="md" position="top">
              <Menu.Target>
                <button
                  type="button"
                  className={classes.icon}
                  style={{ background: "none", border: 0, padding: 0 }}
                  aria-label="Contact via email"
                >
                  <IconMail size={32} stroke={1.5} />
                </button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Contact Via Email</Menu.Label>
                <Menu.Item
                  leftSection={<IconMail size={14} />}
                  component="a"
                  href={`mailto:${EMAIL}`}
                >
                  Send Email
                </Menu.Item>
                <Menu.Item
                  leftSection={<IconCopy size={14} />}
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
          </Group>
        </Grid.Col>

        <Grid.Col span={12} className={classes.row}>
          <Center>
            <span className={`${classes.location} mono`}>
              <IconMapPin size={16} aria-hidden />
              Seattle, WA
            </span>
          </Center>
          <div className={classes.scrollCue} aria-hidden>
            <IconChevronDown size={28} />
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
