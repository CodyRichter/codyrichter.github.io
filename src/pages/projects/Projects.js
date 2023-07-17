import { Center, Divider, Grid, Title } from "@mantine/core";
import { GiDoubleFish, GiShield } from "react-icons/gi";
import { HiOutlineCloud, HiTerminal } from "react-icons/hi";

import { GrScorecard } from "react-icons/gr";
import { ImMap2 } from "react-icons/im";
import ProjectCard from "./ProjectCard";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function Projects({ section, onVisible }) {
  const projects = [
    {
      title: "Hackathon Dashboard",
      description:
        "A Ruby on Rails web app used for managing all aspects of a hackathon, with support for registration, hardware inventory, judging, mentorship, check in, and more. Dashboard is used by multiple hackathons and thousands of participants annually.",
      githubLink: "https://github.com/fuseumass/dashboard",
      icon: <HiTerminal />,
      iconColor: "purple",
    },
    {
      title: "CitadelML",
      description:
        "Train models and create prediction on fully-remote datasets. This centralized server coordinates all aspects of the CitadelML stack with FastAPI, Redis Queue, and MongoDB. Distributes tasks to associated CitadelML services and serves prediction and training results to client.",
      githubLink: "https://github.com/UMass-Rescue/CombinedTechStack",
      icon: <GiShield />,
      iconColor: "red",
    },
    {
      title: "EleNa: Elevation-Based Navigation",
      description:
        "The Elevation-Based Navigation App, or EleNa, is an altitude-aware program which can take elevation gain or loss into account when planning routes between two points. Unlike traditional mapping applications, EleNA allows users to specify a threshold distance that will search for the maximal or minimal elevation gain or loss.",
      githubLink: "https://github.com/CodyRichter/ElenaApp",
      icon: <ImMap2 />,
      iconColor: "blue",
    },
    {
      title: "Automatic Short-Answer Grading",
      description:
        "This project uses transformer-based neural language models to score short open-ended questions. using SentenceBERT and cosine-similarity as a comparison metric. Furthermore, the multitask performance of the T5 - Text-To-Text transformer model is leveraged and a novel way of combining its downstream tasks for Automatic Short-Answer Grading is proposed.",
      githubLink:
        "https://github.com/CodyRichter/Automatic-Short-Answer-Grading",
      paperLink:
        "https://github-website-paper-downloads.s3.amazonaws.com/asag-cody-richter.pdf",
      icon: <GrScorecard />,
      iconColor: "green",
    },
    {
      title: "Underwater Fish Localization and Classification",
      description:
        "Using a new dataset consisting of underwater photos of cold-water fish species across in low-light high-turbidity environments, multiple dataset enhancement techniques are implemented to improve image features. Then, a new YOLOv7 model is trained on this dataset and a new baseline for underwater fish localization and classification is established.",
      githubLink: "https://github.com/scrs22/670_fish_project",
      paperLink:
        "https://github-website-paper-downloads.s3.amazonaws.com/cv-fish-cody-richter.pdf",
      icon: <GiDoubleFish />,
      iconColor: "orange",
    },
    {
      title: "CloudTutor",
      description:
        "CloudTutor is an intelligent tutoring system designed to provide students with a personalized learning experience in cloud computing. This paper describes the design of the CloudTutor system, and presents a framework for the development of the intelligent tutoring system and its effectiveness in improving student learning.",
      paperLink:
        "https://github-website-paper-downloads.s3.amazonaws.com/cloudtutor-cody-richter.pdf",
      icon: <HiOutlineCloud />,
      iconColor: "blue",
    },
  ];

  const { ref } = useInView({
    threshold: 0.6,
    onChange: (inView, entry) => inView && onVisible(section),
  });

  return (
    <div
      style={{ backgroundColor: "#ffffff", marginTop: "4vh" }}
      key={`section-${section}`}
      id={`section-${section}`}
      ref={ref}
    >
      <Divider style={{ marginBottom: "1vh" }} />

      <Grid justify="center" gutter="lg">
        <Grid.Col span={10}>
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
                  Featured Projects
                </Title>
              </Center>
            </Grid.Col>

            {projects.map((project) => (
              <Grid.Col sm={6} xs={11} key={project.title}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  githubLink={project.githubLink}
                  paperLink={project.paperLink}
                  icon={project.icon}
                  iconColor={project.iconColor}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
