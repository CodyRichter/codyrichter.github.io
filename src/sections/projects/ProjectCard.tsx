"use client";

import { Button, Card, Text } from "@mantine/core";

import { FaGithub } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import type { Project } from "@/types";
import classes from "./ProjectCard.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

const PAPER_URL_ENDPOINT =
  "https://4sjd3sgsbr7meldtvulsute5ou0hjtzv.lambda-url.us-east-1.on.aws/";

/** Saves a (presigned, cross-origin) file under `fileName`, falling back to opening it in a new tab. */
async function saveFile(url: string, fileName: string) {
  const triggerDownload = (href: string, newTab: boolean) => {
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    if (newTab) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  try {
    const blob = await (await fetch(url)).blob();
    const objectUrl = URL.createObjectURL(blob);
    triggerDownload(objectUrl, false);
    setTimeout(() => URL.revokeObjectURL(objectUrl), 10_000);
  } catch {
    // Most likely blocked by CORS; let the browser handle the URL directly.
    triggerDownload(url, true);
  }
}

export default function ProjectCard({
  title,
  description,
  githubLink,
  paperName,
  icon: Icon,
  iconColor,
}: Project) {
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  async function downloadPaper() {
    if (!paperName) return;
    setLoading(true);
    try {
      const response = await fetch(PAPER_URL_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({ file_name: paperName }),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      const { url } = (await response.json()) as { url: string };
      await saveFile(url, paperName);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={classes.card}
    >
      <Card.Section withBorder inheritPadding py="xs">
        <Icon color={iconColor} size="1em" /> &nbsp; {title}
      </Card.Section>
      <Card.Section inheritPadding className={classes.description}>
        <br />
        <Text size="sm" c="dimmed">
          {description}
        </Text>
        <br />
      </Card.Section>
      <Button.Group
        className={classes.buttons}
        orientation={isMobile ? "vertical" : "horizontal"}
      >
        {githubLink && (
          <Button
            fullWidth
            component="a"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            leftSection={<FaGithub size={20} />}
            variant="outline"
          >
            View Code
          </Button>
        )}

        {paperName && (
          <Button
            fullWidth
            leftSection={<IoIosPaper size={20} />}
            loading={loading}
            onClick={downloadPaper}
            variant="outline"
          >
            Read Paper
          </Button>
        )}
      </Button.Group>
    </Card>
  );
}
