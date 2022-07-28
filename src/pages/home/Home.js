import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import {
    Avatar,
    BottomNavigation,
    BottomNavigationAction,
    Container,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
    Typography
} from "@mui/material";
import AutoTypeTerminal from "./AutoTypeTerminal";
import {Place} from "@mui/icons-material";
import {b64Image} from './b64Image'
import {withStyles} from "@mui/styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const GrayTextTypography = withStyles({
    root: {
        color: "#2e3442",
        fontFamily: 'Source Code Pro'
    }
})(Typography);


function Home() {

    const [emailDialogOpen, setEmailDialogOpen] = useState(false);

    return (
        <div>
            <Grid
                style={{marginTop: '12vh'}}
                container
                alignItems="center"
            >

                <Grid item xs={12} align="center">
                    <Avatar
                        variant="circular"
                        alt="Cody Richter"
                        src={`data:image/png;base64,${b64Image}`}
                        style={{width: 200, height: 200}}
                    />
                </Grid>

                <Grid item xs={12} align="center" style={{marginBottom: '2vh', marginTop: '2vh'}}>
                    <Typography variant='h2' style={{marginBottom: '2vh'}}>Cody Richter</Typography>
                    <AutoTypeTerminal/>
                </Grid>

                <Grid item xs={12} align="center">
                    <br/>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Place fontSize='large'/>
                        <GrayTextTypography variant="h4" className='code'>Amherst, MA</GrayTextTypography>

                    </Stack>
                </Grid>

                {/*<Grid item xs={12}>*/}
                {/*    <GitHubIcon style={{fontSize: '4em', color: 'black'}}/>*/}
                {/*    <LinkedInIcon style={{fontSize: '4em', color: 'black'}}/>*/}
                {/*    <EmailIcon style={{fontSize: '5em', color: 'black'}}/>*/}
                {/*</Grid>*/}
            </Grid>

            <Container sx={{position: 'fixed', bottom: 0, left: 0, right: 0}}>
                <BottomNavigation
                    style={{
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
            </Container>


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
                        <DialogTitle id="email-dialog-head">Connect Via Email</DialogTitle>
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
