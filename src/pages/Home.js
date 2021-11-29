import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Avatar from "@material-ui/core/Avatar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
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
                    <Avatar variant='circle' alt="Cody Richter" src="https://i.imgur.com/oAIdMh7.jpg"
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
                    icon={<GitHubIcon style={{fontSize: '4em', color:'black'}}/>}
                    component={'a'}
                    href="https://github.com/CodyRichter/"
                    target="_blank"
                />
                <BottomNavigationAction
                    label="LinkedIn"
                    icon={<LinkedInIcon style={{fontSize: '4em', color:'black'}}/>}
                    component={'a'}
                    href="https://www.linkedin.com/in/cody-richter/"
                    target="_blank"
                />
                <BottomNavigationAction
                    label="Website"
                    onClick={() => setEmailDialogOpen(true)} icon={<EmailIcon style={{fontSize: '5em', color:'black'}}/>}
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
                    justify="center"
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

    )
}

export default Home;
