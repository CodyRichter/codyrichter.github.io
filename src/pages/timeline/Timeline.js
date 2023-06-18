import * as React from "react";

import {
  Center,
  Divider,
  Grid,
  Timeline as MantineTimeline,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { FaAmazon, FaBookOpen, FaMapPin, FaSearch } from "react-icons/fa";
import { MdComputer, MdEngineering, MdSecurity } from "react-icons/md";

import { useInView } from "react-intersection-observer";

export default function Timeline({ section, onVisible }) {
  const { ref } = useInView({
    threshold: 0.6,
    onChange: (inView, entry) => inView && onVisible(section),
  });

  let experiences = [
    {
      name: "Amazon",
      title: "Software Development Engineer",
      time: "Summer 2023 - Present",
      location: "Seattle, WA",
      icon: <FaAmazon />,
      iconGradientMap: { from: "yellow", to: "orange" },
    },
    {
      name: "Rescue Lab - UMass Amherst",
      title: "Graduate Research Assistant",
      time: "Sep. 2021 - May 2023",
      location: "Amherst, MA",
      icon: <FaSearch />,
      iconGradientMap: { from: "darkred", to: "red" },
    },
    {
      name: "Amazon",
      title: "Software Development Engineer Intern",
      time: "Summer 2022",
      location: "Seattle, WA",
      icon: <FaAmazon />,
      iconGradientMap: { from: "yellow", to: "orange" },
    },
    {
      name: "Mathworks",
      title: "Software Engineering Intern",
      time: "Summer 2021",
      location: "Fully Remote",
      icon: <MdEngineering />,
      iconGradientMap: { from: "yellow", to: "blue" },
    },
    {
      name: "Rescue Lab - UMass Amherst",
      title: "Undergraduate Research Assistant",
      time: "Dec. 2020 - May 2021",
      location: "Fully Remote",
      icon: <FaSearch />,
      iconGradientMap: { from: "darkred", to: "red" },
    },
    {
      name: "College of Information and Computer Science - UMass Amherst",
      title: "Undergraduate Course Assistant",
      time: "Aug. 2019 - Dec. 2020",
      location: "Amherst, MA",
      icon: <FaBookOpen />,
      iconGradientMap: { from: "darkred", to: "red" },
    },
    {
      name: "Mathworks",
      title: "Software Engineering Intern",
      time: "Summer 2020",
      location: "Fully Remote",
      icon: <MdEngineering />,
      iconGradientMap: { from: "yellow", to: "blue" },
    },
    {
      name: "ISO New England",
      title: "Cybersecurity Intern",
      time: "Summer 2019",
      location: "Holyoke, MA",
      icon: <MdSecurity />,
      iconGradientMap: { from: "indigo", to: "gray" },
    },
    {
      name: "Altek Electronics",
      title: "IT Intern",
      time: "Summer 2018",
      location: "Torrington, CT",
      icon: <MdComputer />,
      iconGradientMap: { from: "orange", to: "teal" },
    },
  ];

  return (
    <div
      style={{ backgroundColor: "#ffffff", marginTop: "4vh" }}
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
                  Professional Experience
                </Title>
              </Center>
            </Grid.Col>

            <Grid.Col span={12}>
              <Center>
                <MantineTimeline bulletSize={36} lineWidth={4}>
                  {experiences.map((exp) => (
                    <MantineTimeline.Item
                      key={`${exp.name}-${exp.title}-${exp.time}`}
                      title={exp.title}
                      bullet={
                        <ThemeIcon
                          size={36}
                          radius="xl"
                          variant="gradient"
                          gradient={exp.iconGradientMap}
                        >
                          {exp.icon}
                        </ThemeIcon>
                      }
                      style={{ marginBottom: "2vh" }}
                    >
                      <Text size="sm" variant="link">
                        @ &nbsp;
                        <Text component="span" inherit>
                          {exp.name}
                        </Text>{" "}
                      </Text>
                      <Text size="xs" color="dimmed" mt={4}>
                        {exp.time}
                      </Text>
                      <Text size="xs" color="dimmed">
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
