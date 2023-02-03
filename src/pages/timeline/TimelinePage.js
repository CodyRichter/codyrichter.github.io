import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { CardContent, CardHeader, Container, Divider } from "@mui/material";
import {
  ArrowUpward,
  Computer,
  Engineering,
  HistoryEdu,
  LinkedIn,
  Search,
  Security,
} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { TimelineOppositeContent } from "@mui/lab";
import { FaAmazon } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";

export default function TimelinePage() {
  let events = [
    {
      name: "Rescue Lab - UMass Amherst",
      title: "Graduate Research Assistant",
      time: "Sep. 2021 - Present",
      location: "Amherst, MA",
      icon: <Search />,
    },
    {
      name: "Amazon",
      title: "Software Development Engineer Intern",
      time: "Summer 2022",
      location: "Seattle, WA",
      icon: <FaAmazon size={25} />,
    },
    {
      name: "Mathworks",
      title: "Software Engineering Intern",
      time: "Summer 2021",
      location: "Fully Remote",
      icon: <Engineering />,
    },
    {
      name: "Rescue Lab - UMass Amherst",
      title: "Undergraduate Research Assistant",
      time: "Dec. 2020 - May 2021",
      location: "Fully Remote",
      icon: <Search />,
    },
    {
      name: "College of Information and Computer Science - UMass Amherst",
      title: "Undergraduate Course Assistant",
      time: "Aug. 2019 - Dec. 2020",
      location: "Amherst, MA",
      icon: <HistoryEdu />,
    },
    {
      name: "Mathworks",
      title: "Software Engineering Intern",
      time: "Summer 2020",
      location: "Fully Remote",
      icon: <Engineering />,
    },
    {
      name: "ISO New England",
      title: "Cybersecurity Intern",
      time: "Summer 2019",
      location: "Holyoke, MA",
      icon: <Security />,
    },
    {
      name: "Altek Electronics",
      title: "IT Intern",
      time: "Summer 2018",
      location: "Torrington, CT",
      icon: <Computer />,
    },
  ];

  return (
    <Container>
      <Grid
        container
        style={{ marginTop: "8vh" }}
        spacing={6}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={8}>
          <Card
            component={Card}
            elevation={4}
            style={{
              background: "#F9F9FF",
              height: "100%",
              borderRadius: "1em",
            }}
          >
            <CardHeader
              action={
                <IconButton
                  component="a"
                  href="https://linkedin.com/in/Cody-Richter/"
                  target="_blank"
                  size={"large"}
                >
                  <LinkedIn />
                </IconButton>
              }
              title={
                <Typography component={"p"} variant={"h4"} align={"center"}>
                  &nbsp; Career Timeline
                </Typography>
              }
            />
            <CardContent>
              <Divider />
              <Timeline
                sx={{
                  [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                  },
                }}
              >
                {events.map((e, idx) => (
                  <TimelineItem key={e.time}>
                    <TimelineOppositeContent
                      sx={{ m: "auto 0" }}
                      align="right"
                      variant="body2"
                      color="text.secondary"
                    >
                      {e.time}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot
                        color={idx % 2 === 0 ? "primary" : "secondary"}
                      >
                        {e.icon}
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography variant="h6" component="span">
                        {e.name}
                      </Typography>
                      <Typography>{e.title}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
