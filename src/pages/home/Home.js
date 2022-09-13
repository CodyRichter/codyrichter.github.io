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
import useIsMobile from "../../utils/useIsMobile";

const WhiteTextTypography = withStyles({
    root: {
        color: "#ffffff",
        fontFamily: 'Source Code Pro'
    }
})(Typography);


function Home() {

    const [emailDialogOpen, setEmailDialogOpen] = useState(false);
    const isMobile = useIsMobile();

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
                        style={isMobile ? {width: 150, height: 150} : {width: 200, height: 200}}
                    />
                </Grid>

                <Grid item xs={12} align="center" style={{marginBottom: '2vh', marginTop: '2vh'}}>
                    <WhiteTextTypography
                        variant='h2'
                        style={{marginBottom: '2vh', fontSize: (isMobile ? '26pt' : '45pt')}}
                    >
                        Cody Richter
                    </WhiteTextTypography>
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
                        <Place style={{fontSize: (isMobile ? '2em' : '3em'), color: 'white' }}/>
                        <WhiteTextTypography
                            variant="h4"
                            className='code'
                            style={{fontSize: (isMobile ? '20pt' : '26pt')}}
                        >Amherst, MA</WhiteTextTypography>

                    </Stack>
                </Grid>
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
                        icon={<GitHubIcon style={{fontSize: (isMobile ? '2em' : '4em'), color: 'white'}}/>}
                        component={'a'}
                        href="https://github.com/CodyRichter/"
                        target="_blank"
                    />
                    <BottomNavigationAction
                        label="LinkedIn"
                        icon={<LinkedInIcon style={{fontSize: (isMobile ? '2em' : '4em'), color: 'white'}}/>}
                        component={'a'}
                        href="https://www.linkedin.com/in/cody-richter/"
                        target="_blank"
                    />
                    <BottomNavigationAction
                        label="Website"
                        onClick={() => setEmailDialogOpen(true)}
                        icon={<EmailIcon style={{fontSize: (isMobile ? '3em' : '5em'), color: 'white'}}/>}
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
