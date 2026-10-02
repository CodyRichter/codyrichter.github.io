"use client";

import {
  ActionIcon,
  Card,
  Center,
  CopyButton,
  Divider,
  Grid,
  Group,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";

import classes from "./Contact.module.css";
import sectionClasses from "@/styles/section.module.css";
import { sectionIndex } from "@/sections";
import { useSectionInView } from "@/shared/SiteChrome";

const section = sectionIndex("contact");
const EMAIL = "cody@richter.codes";

interface ContactCardProps {
  heading: string;
  blurb: string;
  href: string;
  label: string;
  copyValue?: string;
}

function ContactCard({
  heading,
  blurb,
  href,
  label,
  copyValue,
}: ContactCardProps) {
  return (
    <Grid.Col span={{ base: 12, md: 8 }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500} fz="xl" ta="center">
            {heading}
          </Text>
        </Card.Section>

        <Text mt="sm" c="dimmed" size="sm" ta="center">
          {blurb}
        </Text>

        <Group justify="center">
          <Text
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            className={classes.link}
            ta="center"
            fz="xl"
            mt="sm"
            fw={700}
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </Text>
          {copyValue && (
            <CopyButton value={copyValue} timeout={2000}>
              {({ copied, copy }) => (
                <Tooltip
                  label={copied ? "Copied" : "Copy"}
                  withArrow
                  position="right"
                >
                  <ActionIcon
                    c={copied ? "teal.6" : "gray.6"}
                    variant="subtle"
                    onClick={copy}
                    mt="sm"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <IconCheck size="24px" />
                    ) : (
                      <IconCopy size="24px" />
                    )}
                  </ActionIcon>
                </Tooltip>
              )}
            </CopyButton>
          )}
        </Group>
      </Card>
    </Grid.Col>
  );
}

export default function Contact() {
  const { ref } = useSectionInView(section, 0.6);

  return (
    <div
      style={{ marginTop: "calc(4vh - 10px)" }}
      id={`section-${section}`}
      ref={ref}
    >
      <Divider style={{ marginBottom: "1vh" }} />

      <Grid justify="center" gap="lg">
        <Grid.Col span={8}>
          <Grid gap="xl" justify="center">
            <Grid.Col span={12}>
              <Center>
                <Title order={1} className={`${sectionClasses.title} mono`}>
                  Contact
                </Title>
              </Center>
            </Grid.Col>

            <ContactCard
              heading="Send an Email"
              blurb="The best and most reliable way to contact me is via email. You can reach me at the following address:"
              href={`mailto:${EMAIL}`}
              label="Cody@Richter.codes"
              copyValue={EMAIL}
            />
            <ContactCard
              heading="Connect on LinkedIn"
              blurb="I'm always looking to connect with other developers and professionals. Feel free to reach out to me on LinkedIn:"
              href="https://www.linkedin.com/in/cody-richter/"
              label="@Cody-Richter"
            />
            <ContactCard
              heading="Follow on GitHub"
              blurb="All of my open source projects are hosted on GitHub, as well as my latest experiments and prototypes. Follow me to stay up to date:"
              href="https://github.com/CodyRichter"
              label="@CodyRichter"
            />
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
