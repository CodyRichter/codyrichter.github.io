"use client";

import { Center, Divider, Grid, Title } from "@mantine/core";

import ProjectCard from "./ProjectCard";
import classes from "@/styles/section.module.css";
import { projects } from "@/data/projects";
import { sectionIndex } from "@/sections";
import { useSectionInView } from "@/shared/SiteChrome";

const section = sectionIndex("projects");

export default function Projects() {
  const { ref } = useSectionInView(section, 0.6);

  return (
    <div
      style={{ marginTop: "calc(4vh - 8px)" }}
      id={`section-${section}`}
      ref={ref}
    >
      <Divider style={{ marginBottom: "1vh" }} />

      <Grid justify="center" gap="lg">
        <Grid.Col span={10}>
          <Grid gap="xl" justify="center">
            <Grid.Col span={12}>
              <Center>
                <Title order={1} className={`${classes.title} mono`}>
                  Featured Projects
                </Title>
              </Center>
            </Grid.Col>

            {projects.map((project) => (
              <Grid.Col span={{ base: 12, xs: 11, sm: 6 }} key={project.title}>
                <ProjectCard {...project} />
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
