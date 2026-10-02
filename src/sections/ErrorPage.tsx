"use client";

import { Button, Container, Group, Text, Title } from "@mantine/core";

import classes from "./ErrorPage.module.css";

export default function ErrorPage({ status }: { status?: number }) {
  const notFound = status === 404;

  return (
    <Container className={classes.root}>
      <div className={classes.label}>Error</div>
      <Title className={classes.title}>
        {notFound ? "Page Not Found" : "Something Went Wrong"}
      </Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        {notFound
          ? "The page you are looking for does not exist."
          : "An unexpected error has occurred."}
      </Text>
      <Group justify="center">
        <Button
          variant="subtle"
          size="lg"
          onClick={() => window.history.back()}
        >
          Take Me Back!
        </Button>
      </Group>
    </Container>
  );
}
