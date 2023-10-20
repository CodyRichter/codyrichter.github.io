import * as React from "react";

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

import { useInView } from "react-intersection-observer";

export default function Contact({ section, onVisible }) {
  const { ref } = useInView({
    threshold: 0.6,
    onChange: (inView, entry) => inView && onVisible(section),
  });

  return (
    <div
      style={{ marginTop: "4vh" }}
      key={`section-${section}`}
      id={`section-${section}`}
      ref={ref}
    >
      <Divider style={{ marginBottom: "1vh" }} />

      <Grid justify="center" gutter="lg">
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
                  Contact
                </Title>
              </Center>
            </Grid.Col>

            <Grid.Col xs={12} md={8}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section withBorder inheritPadding py="xs">
                  <Text weight={500} fz="xl" ta="center">
                    Send an Email
                  </Text>
                </Card.Section>

                <Text mt="sm" color="dimmed" size="sm" ta="center">
                  The best and most reliable way to contact me is via email. You
                  can reach me at the following address:
                </Text>

                <Group position="center">
                  <Text
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                    sx={{ fontFamily: "Greycliff CF, sans-serif" }}
                    ta="center"
                    fz="xl"
                    mt="sm"
                    fw={700}
                    component="a"
                    href="mailto:cody@richter.codes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cody@Richter.codes
                  </Text>
                  <CopyButton value="cody@richter.codes" timeout={2000}>
                    {({ copied, copy }) => (
                      <Tooltip
                        label={copied ? "Copied" : "Copy"}
                        withArrow
                        position="right"
                      >
                        <ActionIcon
                          color={copied ? "teal" : "gray"}
                          onClick={copy}
                          ta="center"
                          fz="xl"
                          mt="sm"
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
                </Group>
              </Card>
            </Grid.Col>

            <Grid.Col xs={12} md={8}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section withBorder inheritPadding py="xs">
                  <Text weight={500} fz="xl" ta="center">
                    Connect on LinkedIn
                  </Text>
                </Card.Section>

                <Text mt="sm" color="dimmed" size="sm" ta="center">
                  I'm always looking to connect with other developers and
                  professionals. Feel free to reach out to me on LinkedIn:
                </Text>

                <Group position="center">
                  <Text
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                    sx={{ fontFamily: "Greycliff CF, sans-serif" }}
                    ta="center"
                    fz="xl"
                    mt="sm"
                    fw={700}
                    component="a"
                    href="https://www.linkedin.com/in/cody-richter/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Cody-Richter
                  </Text>
                </Group>
              </Card>
            </Grid.Col>

            <Grid.Col xs={12} md={8}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section withBorder inheritPadding py="xs">
                  <Text weight={500} fz="xl" ta="center">
                    Follow on GitHub
                  </Text>
                </Card.Section>

                <Text mt="sm" color="dimmed" size="sm" ta="center">
                  All of my open source projects are hosted on GitHub, as well
                  as my latest experiments and prototypes. Follow me to stay up
                  to date:
                </Text>

                <Group position="center">
                  <Text
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                    sx={{ fontFamily: "Greycliff CF, sans-serif" }}
                    ta="center"
                    fz="xl"
                    mt="sm"
                    fw={700}
                    component="a"
                    href="https://github.com/CodyRichter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @CodyRichter
                  </Text>
                </Group>
              </Card>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
