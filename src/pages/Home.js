import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Avatar from "@mui/material/Avatar";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Typist from "react-typist";

function Home() {

    let [emailDialogOpen, setEmailDialogOpen] = useState(false);

    // Counter for auto typing
    let [count, setCount] = useState(0);

    useEffect(() => {
        setCount(1);
    }, [count]);

    return (
        <div>
            <Grid
                style={{marginTop: '12vh'}}
                container
                alignItems="center"
            >

                <Grid item xs={12} align="center" style={{marginBottom: '4vh'}}>
                    <Typography variant='h2' style={{marginBottom: '2vh'}}>Cody Richter</Typography>
                    {count ? (
                        <Typist avgTypingDelay={140} cursor={{show: false}} onTypingDone={() => setCount(0)}>
                            <Typography variant='h4' component='h4' display="inline">&#8203;</Typography>
                            <Typography variant='h4' component='h4' display="inline">Codes</Typography>
                            <Typist.Backspace count={4} delay={3000}/>
                            <Typography variant='h4' component='h4' display="inline">reates</Typography>
                            <Typist.Backspace count={7} delay={3000}/>
                            <Typography variant='h4' component='h4' display="inline">Innovates</Typography>
                            <Typist.Backspace count={7} delay={3000}/>
                            <Typography variant='h4' component='h4' display="inline">vents</Typography>
                            <Typist.Backspace count={6} delay={3000}/>
                            <Typography variant='h4' component='h4' display="inline">mproves</Typography>
                            <Typist.Backspace count={8} delay={3000}/>
                            <Typography variant='h4' component='h4' display="inline">Designs</Typography>
                            <Typist.Backspace count={5} delay={3000}/>
                            <Typography variant='h4' component='h4' display="inline">velops</Typography>
                            <Typist.Backspace count={7} delay={3000}/>
                            <Typography variant='h4' component='h4' display="inline">iscovers Solutions</Typography>
                            <Typist.Delay ms={5000}/>
                        </Typist>
                    ) : (
                        ""
                    )}
                </Grid>

                <Grid item xs={12} align="center">
                    <Avatar variant="circular" alt="Cody Richter" src="https://i.imgur.com/oAIdMh7.jpg"
                            style={{width: 200, height: 200}}/>
                </Grid>

            </Grid>

            <BottomNavigation
                style={{
                    width: '100vw',
                    position: 'fixed',
                    bottom: 0,
                    textAlign: 'center',
                    paddingBottom: '3vh',
                    background: 'transparent',
                    boxShadow: 'none'
                }}
            >
                <BottomNavigationAction
                    label="Github"
                    icon={<GitHubIcon style={{fontSize: '4em', color: 'black'}}/>}
                    component={'a'}
                    href="https://github.com/CodyRichter/"
                    target="_blank"
                />
                <BottomNavigationAction
                    label="LinkedIn"
                    icon={<LinkedInIcon style={{fontSize: '4em', color: 'black'}}/>}
                    component={'a'}
                    href="https://www.linkedin.com/in/cody-richter/"
                    target="_blank"
                />
                <BottomNavigationAction
                    label="Website"
                    onClick={() => setEmailDialogOpen(true)}
                    icon={<EmailIcon style={{fontSize: '5em', color: 'black'}}/>}
                />
            </BottomNavigation>


            <Dialog
                open={emailDialogOpen}
                onClose={() => setEmailDialogOpen(false)}
                maxWidth="md"
            >
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item align="center">
                        <DialogTitle id="email-dialog-head">Via Email</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                cody {"[at]"} richter.codes
                            </DialogContentText>
                        </DialogContent>
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    );
}

export default Home;
