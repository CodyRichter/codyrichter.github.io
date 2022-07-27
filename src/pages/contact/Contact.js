import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import React, {useState} from "react";

export default function Contact() {

    let [emailDialogOpen, setEmailDialogOpen] = useState(false);

    return (
        <>
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
        </>
    )
}