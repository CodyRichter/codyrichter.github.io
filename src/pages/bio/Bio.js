import { Center, Grid, Text, Title } from "@mantine/core";

import React from "react";
import { useInView } from "react-intersection-observer";

export default function Bio({ section, onVisible }) {
  const { ref } = useInView({
    threshold: 0.6,
    onChange: (inView, entry) => inView && onVisible(section),
  });

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        marginTop: "9vh",
        marginBottom: "5vh",
      }}
      key={`section-${section}`}
      id={`section-${section}`}
      ref={ref}
    >
      <Grid justify="center">
        <Grid.Col span={8}>
          <Grid gutter="xl" justify="center">
            <Grid.Col span={12}>
              <Center>
                <Title
                  variant="h1"
                  style={{
                    marginTop: "4vh",
                    marginBottom: "3vh",
                    fontFamily: "Source Code Pro",
                  }}
                >
                  About Me
                </Title>
              </Center>
            </Grid.Col>

            <Grid.Col sm={8} xs={12}>
              <Center>
                <Text ta="center" fz="lg">
                  Hello! My name is Cody and I&apos;m a Software Engineer at
                  Amazon where I develop tools and systems on the eCommerce team
                  to make it easier for you to buy your favorite products.
                  {/* TODO: If I get a new job fill out this section */}
                  {/* I previously worked at XXX on the YYY team building ZZZ for AAA. */}
                </Text>
              </Center>
            </Grid.Col>

            <Grid.Col sm={8} xs={12}>
              <Center>
                <Text ta="center" fz="lg">
                  My main interests lie in cloud computing and full stack
                  development. I received both my masters (
                  <Text
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                    span
                  >
                    2023
                  </Text>
                  ) and undergraduate (
                  <Text
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                    span
                  >
                    2021
                  </Text>
                  ) degrees in Computer Science from the University of
                  Massachusetts Amherst. During my time as a student, I worked
                  under Brian Levine in the Rescue Lab.
                </Text>
              </Center>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
