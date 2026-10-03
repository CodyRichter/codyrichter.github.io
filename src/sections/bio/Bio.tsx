"use client";

import { Stack, Text } from "@mantine/core";

import Section from "@/shared/Section";
import { sectionIndex } from "@/sections";

const section = sectionIndex("about");

const Year = ({ children }: { children: React.ReactNode }) => (
  <Text
    variant="gradient"
    gradient={{ from: "indigo", to: "cyan", deg: 45 }}
    span
  >
    {children}
  </Text>
);

export default function Bio() {
  return (
    <Section index={section} title="About Me" size="sm">
      <Stack gap="xl" maw="65ch" mx="auto">
        <Text fz="lg">
          Hello! My name is Cody and I&apos;m a Software Engineer at Affirm on
          the Loans Platform Team. Before this, I worked at Amazon in the
          Financial Foundational Services organization.
        </Text>

        <Text fz="lg">
          My main interests lie in cloud computing and full stack development. I
          received both my masters (<Year>2023</Year>) and undergraduate (
          <Year>2021</Year>) degrees in Computer Science from the University of
          Massachusetts Amherst. During my time as a student, I worked under
          Brian Levine in the Rescue Lab.
        </Text>
      </Stack>
    </Section>
  );
}
