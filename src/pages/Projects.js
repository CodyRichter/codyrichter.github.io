import React, {useEffect, useState} from "react"
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import {CardContent, Container} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import {Activity, HardDrive, Layout, Settings, Shield, Terminal, Tool} from "react-feather";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import {GitHub} from "@material-ui/icons";

export default function Projects() {

    let [pinned, setPinned] = useState([]);

    useEffect(() => {
        let url = "https://gh-pinned-repos-5l2i19um3.vercel.app/?username=CodyRichter";
        axios.get(url).then((response) => {
            setPinned(response.data);
        }).catch((error) => {
        });
    }, [])

    return (
        <Container>
           <Grid container style={{marginTop: '8vh'}} spacing={6}>
               <Grid item xs={12} md={6}>
                   <Card component={Card} elevation={4} style={{background: '#F9F9FF', height: '100%'}}>
                   <CardHeader

                       action={
                           <IconButton aria-label="settings" component='a' href='https://github.com/fuseumass/dashboard' target='_blank'>
                               <GitHub />
                           </IconButton>
                       }
                       avatar={<Terminal color="white" size='1.25em' style={{background: 'purple', borderRadius: '1em', padding: '0.5em'}} />}
                       title={<Typography gutterBottom variant="h5" component="h2"> Hackathon Dashboard</Typography>}
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
                   <Card component={Card} elevation={4} style={{background: '#F9F9FF', height: '100%'}}>
                       <CardHeader

                           action={
                               <IconButton aria-label="settings" component='a' href='https://github.com/UMass-Rescue/PhotoAnalysisServer' target='_blank'>
                                   <GitHub />
                               </IconButton>
                           }
                           avatar={<Shield color="white" size='1.25em' style={{background: 'red', borderRadius: '1em', padding: '0.5em'}} />}
                           title={<Typography gutterBottom variant="h5" component="h2">  CitadelML Server</Typography>}
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
                   <Card component={Card} elevation={4} style={{background: '#F9F9FF', height: '100%'}}>
                       <CardHeader

                           action={
                               <IconButton aria-label="settings" component='a' href='https://github.com/UMass-Rescue/PhotoAnalysisClient' target='_blank'>
                                   <GitHub />
                               </IconButton>
                           }
                           avatar={<Layout color="white" size='1.25em' style={{background: 'blue', borderRadius: '1em', padding: '0.5em'}} />}
                           title={<Typography gutterBottom variant="h5" component="h2"> CitadelML Client</Typography>}
                       />

                       <CardContent>
                           <Typography variant="body2" color="textSecondary" component="p">
                               React client which supports interactions with all models and datasets available
                               on the CitadelML Server. Interface provided for training models on remote datasets,
                               predicting images on models, and reviewing uploaded image data.
                           </Typography>
                       </CardContent>
                   </Card>
               </Grid>
               <Grid item xs={12} md={6}>
                   <Card component={Card} elevation={4} style={{background: '#F9F9FF', height: '100%'}}>
                       <CardHeader

                           action={
                               <div>
                               <IconButton aria-label="settings" component='a' href='https://github.com/UMass-Rescue/MLMicroserviceTemplate' target='_blank'>
                                   <GitHub />
                               </IconButton>
                               <IconButton aria-label="settings" component='a' href='https://github.com/UMass-Rescue/MLDatasetTemplate' target='_blank'>
                               <GitHub />
                               </IconButton>
                               </div>
                           }
                           avatar={<Tool color="white" size='1.25em' style={{background: 'orange', borderRadius: '1em', padding: '0.5em'}} />}
                           title={<Typography gutterBottom variant="h5" component="h2"> CitadelML Developer Tools</Typography>}
                       />

                       <CardContent>
                           <Typography variant="body2" color="textSecondary" component="p">
                               Developer tools provided for creating models and datasets in the CitadelML stack. This
                               supports plug-and-play for connecting trained ML models and datasets to the CitadelML server.
                           </Typography>
                       </CardContent>
                   </Card>
               </Grid>
           </Grid>
        </Container>
    )
}