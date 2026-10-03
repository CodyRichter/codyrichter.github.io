"use client";

import { SimpleGrid } from "@mantine/core";

import ProjectCard from "./ProjectCard";
import Section from "@/shared/Section";
import { projects } from "@/data/projects";
import { sectionIndex } from "@/sections";

const section = sectionIndex("projects");

export default function Projects() {
  return (
    <Section
      index={section}
      threshold={0.6}
      title="Featured Projects"
      size="lg"
      divided
    >
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </SimpleGrid>
    </Section>
  );
}
