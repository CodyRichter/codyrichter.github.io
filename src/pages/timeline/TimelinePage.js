import * as React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {CardContent, CardHeader, Container} from "@mui/material";
import {ArrowUpward, Computer, Engineering, HistoryEdu, LinkedIn, Search, Security} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import {TimelineOppositeContent} from "@mui/lab";
import IconButton from "@mui/material/IconButton";

export default function TimelinePage() {

    let events = [
        {
            name: 'Rescue Lab - UMass Amherst',
            title: 'Graduate Research Assistant',
            time: 'Sep. 2021 - Present',
            color: 'primary',
            icon: <Search/>
        },
        {
            name: 'Mathworks',
            title: 'Software Engineering Intern',
            time: 'Summer 2021',
            color: 'secondary',
            icon: <Engineering/>
        },
        {
            name: 'Rescue Lab - UMass Amherst',
            title: 'Undergraduate Research Assistant',
            time: 'Dec. 2020 - May 2021',
            color: 'secondary',
            icon: <Search/>
        },
        {
            name: 'CICS - UMass Amherst',
            title: 'Undergraduate Course Assistant',
            time: 'Aug. 2019 - Dec. 2020',
            color: 'primary',
            icon: <HistoryEdu/>
        },
        {
            name: 'Mathworks',
            title: 'Software Engineering Intern',
            time: 'Summer 2020',
            color: 'secondary',
            icon: <Engineering/>
        },
        {
            name: 'ISO New England',
            title: 'Cybersecurity Intern',
            time: 'Summer 2019',
            color: 'secondary',
            icon: <Security/>
        },
        {
            name: 'Altek Electronics',
            title: 'IT Intern',
            time: 'Summer 2018',
            color: 'primary',
            icon: <Computer/>
        },
    ]

    return (
        <Container>
            <Grid container style={{marginTop: '8vh'}} spacing={6} direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item xs={12} md={8}>
                    <Card component={Card} elevation={4}
                          style={{background: '#F9F9FF', height: '100%', borderRadius: '1em'}}>
                        <CardHeader
                            action={
                                <IconButton
                                    aria-label="settings"
                                    component='a'
                                    href='https://linkedin.com/in/Cody-Richter/'
                                    target='_blank'
                                    size={'large'}
                                >
                                    <LinkedIn/>
                                </IconButton>
                            }
                            title={
                                <Typography component={'p'} variant={'h4'} align={'center'}>
                                    &nbsp; Career Timeline
                                </Typography>
                            }
                        />
                        <CardContent>
                            <Timeline position="alternate">

                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot>
                                            <ArrowUpward/>
                                        </TimelineDot>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent/>
                                </TimelineItem>

                                {events.map((e) =>
                                    <TimelineItem>
                                        <TimelineOppositeContent
                                            sx={{m: 'auto 0'}}
                                            align="right"
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {e.time}
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector/>
                                            <TimelineDot color={e.color}>
                                                {e.icon}
                                            </TimelineDot>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{py: '12px', px: 2}}>
                                            <Typography variant="h6" component="span">
                                                {e.name}
                                            </Typography>
                                            <Typography>{e.title}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                )}

                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                    </TimelineSeparator>
                                    <TimelineContent/>
                                </TimelineItem>

                            </Timeline>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}