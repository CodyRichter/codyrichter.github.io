import React, { useEffect, useState } from "react"
import axios from "axios";
import Grid from "@mui/material/Grid";
import { CardContent, Container } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Shield, Terminal, Map, Edit, Droplet, FileText } from "react-feather";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { GitHub } from "@mui/icons-material";

export default function Projects() {

    return (
        <Container>
            <Grid container style={{ marginTop: '8vh' }} spacing={6}>
                <Grid item xs={12} md={6}>
                    <Card component={Card} elevation={4} style={{ background: '#F9F9FF', height: '100%' }}>
                        <CardHeader

                            action={
                                <IconButton
                                    component='a'
                                    href='https://github.com/fuseumass/dashboard'
                                    target='_blank'
                                    size="large">
                                    <GitHub />
                                </IconButton>
                            }
                            avatar={<Terminal color="white" size='1.25em'
                                style={{ background: 'purple', borderRadius: '1em', padding: '0.5em' }} />}
                            title={<Typography gutterBottom variant="h5" component="h2"> Hackathon
                                Dashboard</Typography>}
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                A Ruby on Rails web app used for managing all aspects of a hackathon, with support for
                                registration, hardware inventory, judging, mentorship, check in, and more. Dashboard is
                                used by multiple hackathons and thousands of participants annually.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card component={Card} elevation={4} style={{ background: '#F9F9FF', height: '100%' }}>
                        <CardHeader

                            action={
                                <IconButton

                                    component='a'
                                    href='https://github.com/UMass-Rescue/CombinedTechStack'
                                    target='_blank'
                                    size="large">
                                    <GitHub />
                                </IconButton>
                            }
                            avatar={<Shield color="white" size='1.25em'
                                style={{ background: 'red', borderRadius: '1em', padding: '0.5em' }} />}
                            title={<Typography gutterBottom variant="h5" component="h2"> Citadel Server</Typography>}
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Train models and create prediction on fully-remote datasets. This centralized server
                                coordinates all aspects of the CitadelML stack with FastAPI, Redis Queue,
                                and MongoDB. Distributes tasks to associated CitadelML services and serves
                                prediction and training results to client.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>


                <Grid item xs={12} md={6}>
                    <Card component={Card} elevation={4} style={{ background: '#F9F9FF', height: '100%' }}>
                        <CardHeader

                            action={
                                <IconButton
                                    component='a'
                                    href='https://github.com/CodyRichter/ElenaApp'
                                    target='_blank'
                                    size="large">
                                    <GitHub />
                                </IconButton>
                            }
                            avatar={<Map color="white" size='1.25em'
                                style={{ background: 'darkblue', borderRadius: '1em', padding: '0.5em' }} />}
                            title={<Typography gutterBottom variant="h5" component="h2"> EleNa: Elevation-Based Navigation</Typography>}
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                The Elevation-Based Navigation App, or EleNa, is an altitude-aware program which can
                                take elevation gain or loss into account when planning routes between two points.
                                Unlike traditional mapping applications, EleNA allows users to specify a threshold
                                distance that will search for the maximal or minimal elevation gain or loss.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>


                <Grid item xs={12} md={6}>
                    <Card component={Card} elevation={4} style={{ background: '#F9F9FF', height: '100%' }}>
                        <CardHeader

                            action={
                                <>
                                    <IconButton
                                        component='a'
                                        href='https://github.com/CodyRichter/Automatic-Short-Answer-Grading'
                                        target='_blank'
                                        size="large">
                                        <GitHub />
                                    </IconButton>
                                    <IconButton
                                        component='a'
                                        href='https://github-website-paper-downloads.s3.amazonaws.com/asag-cody-richter.pdf'
                                        target='_blank'
                                        size="large">
                                        <FileText />
                                    </IconButton>
                                </>
                            }
                            avatar={<Edit color="white" size='1.25em'
                                style={{ background: 'green', borderRadius: '1em', padding: '0.5em' }} />}
                            title={<Typography gutterBottom variant="h5" component="h2"> Automatic Short-Answer Grading</Typography>}
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This project uses transformer-based neural language models to score short open-ended questions.
                                using SentenceBERT and cosine-similarity as a comparison metric. Furthermore, the multitask performance of the
                                T5 - Text-To-Text transformer model is leveraged and a novel way of combining its downstream tasks
                                for Automatic Short-Answer Grading is proposed.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card component={Card} elevation={4} style={{ background: '#F9F9FF', height: '100%' }}>
                        <CardHeader

                            action={
                                <>
                                    <IconButton
                                        component='a'
                                        href='https://github.com/scrs22/670_fish_project'
                                        target='_blank'
                                        size="large">
                                        <GitHub />
                                    </IconButton>
                                    <IconButton
                                        component='a'
                                        href='https://github-website-paper-downloads.s3.amazonaws.com/cv-fish-cody-richter.pdf'
                                        target='_blank'
                                        size="large">
                                        <FileText />
                                    </IconButton>
                                </>
                            }
                            avatar={<Droplet color="white" size='1.25em'
                                style={{ background: 'lightsteelblue', borderRadius: '1em', padding: '0.5em' }} />}
                            title={<Typography gutterBottom variant="h5" component="h2"> Underwater Fish Localization and Classification</Typography>}
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Using a new dataset consisting of underwater photos of cold-water fish species across in low-light high-turbidity environments,
                                multiple dataset enhancement techniques are implemented to improve image features. Then, a new YOLOv7 model is trained on this dataset
                                and a new baseline for underwater fish localization and classification is established.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>


            </Grid>
        </Container>
    );
}