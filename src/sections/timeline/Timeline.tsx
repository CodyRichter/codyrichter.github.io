"use client";

import {
  Center,
  Divider,
  Grid,
  Timeline as MantineTimeline,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

import { FaMapPin } from "react-icons/fa";
import timelineClasses from "./Timeline.module.css";
import classes from "@/styles/section.module.css";
import { experiences } from "@/data/experiences";
import { sectionIndex } from "@/sections";
import { useSectionInView } from "@/shared/SiteChrome";

const section = sectionIndex("timeline");

export default function Timeline() {
  const { ref } = useSectionInView(section, 0.5);

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
                <Title order={1} className={`${classes.title} mono`}>
                  Professional Experience
                </Title>
              </Center>
            </Grid.Col>

            <Grid.Col span={12}>
              <Center>
                <MantineTimeline
                  bulletSize={36}
                  lineWidth={4}
                  classNames={{
                    root: timelineClasses.root,
                    item: timelineClasses.item,
                    itemTitle: timelineClasses.title,
                  }}
                >
                  {experiences.map(({ icon: Icon, ...exp }) => (
                    <MantineTimeline.Item
                      key={`${exp.name}-${exp.title}-${exp.time}`}
                      title={exp.title}
                      bullet={
                        <ThemeIcon
                          size={36}
                          radius="xl"
                          variant="gradient"
                          gradient={exp.iconGradient}
                        >
                          <Icon />
                        </ThemeIcon>
                      }
                      style={{ marginBottom: "2vh" }}
                    >
                      <Text size="sm">@ &nbsp;{exp.name}</Text>
                      <Text size="xs" c="dimmed" mt={4}>
                        {exp.time}
                      </Text>
                      <Text size="xs" c="dimmed">
                        <FaMapPin /> {exp.location}
                      </Text>
                    </MantineTimeline.Item>
                  ))}
                </MantineTimeline>
              </Center>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
