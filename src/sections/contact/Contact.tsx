"use client";

import {
  ActionIcon,
  Card,
  CopyButton,
  Group,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";

import Section from "@/shared/Section";
import { sectionIndex } from "@/sections";

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
  );
}

export default function Contact() {
  return (
    <Section index={section} title="Contact" size="sm" divided>
      <Stack gap="xl">
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
      </Stack>
    </Section>
  );
}
