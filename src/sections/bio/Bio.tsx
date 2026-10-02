"use client";

import { Center, Grid, Text, Title } from "@mantine/core";

import classes from "@/styles/section.module.css";
import { sectionIndex } from "@/sections";
import { useSectionInView } from "@/shared/SiteChrome";

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
  const { ref } = useSectionInView(section, 0.4);

  return (
    <div
      style={{ marginTop: "calc(9vh - 8px)", marginBottom: "5vh" }}
      id={`section-${section}`}
      ref={ref}
    >
      <Grid justify="center">
        <Grid.Col span={8}>
          <Grid gap="xl" justify="center">
            <Grid.Col span={12}>
              <Center>
                <Title order={1} className={`${classes.title} mono`}>
                  About Me
                </Title>
              </Center>
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 8 }}>
              <Center>
                <Text ta="center" fz="lg">
                  Hello! My name is Cody and I&apos;m a Software Engineer at
                  Affirm on the Loans Platform Team. Before this, I worked at
                  Amazon in the Financial Foundational Services organization.
                </Text>
              </Center>
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 8 }}>
              <Center>
                <Text ta="center" fz="lg">
                  My main interests lie in cloud computing and full stack
                  development. I received both my masters (<Year>2023</Year>)
                  and undergraduate (<Year>2021</Year>) degrees in Computer
                  Science from the University of Massachusetts Amherst. During
                  my time as a student, I worked under Brian Levine in the
                  Rescue Lab.
                </Text>
              </Center>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
