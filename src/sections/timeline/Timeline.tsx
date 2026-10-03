"use client";

import {
  Center,
  Timeline as MantineTimeline,
  Text,
  ThemeIcon,
} from "@mantine/core";

import { FaMapPin } from "react-icons/fa";
import timelineClasses from "./Timeline.module.css";
import Section from "@/shared/Section";
import { experiences } from "@/data/experiences";
import { sectionIndex } from "@/sections";

const section = sectionIndex("timeline");

export default function Timeline() {
  return (
    <Section
      index={section}
      threshold={0.5}
      title="Professional Experience"
      size="sm"
      divided
    >
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
    </Section>
  );
}
