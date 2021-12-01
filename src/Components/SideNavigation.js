import Drawer from "@mui/material/Drawer";
import React, {useState} from "react";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {Timeline as TimelineIcon} from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ComputerIcon from '@mui/icons-material/Computer';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import {useTheme} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";


const useStyles = makeStyles({
    paper: {
        background: '#ffffff',
        minWidth: '15vw',
        border: "none"
    },
    mobilePaper: {
        background: '#ffffff',
        width: '100%',
        border: "none"
    },
    openButton: {
        position: 'fixed',
        top: '1vh',
        left: '1vw',
    },
    mobileOpenButton: {
        position: 'fixed',
        top: '1vh',
        left: '5vw',
    }
});

export default function SideNavigation() {

    let [drawerOpen, setDrawerOpen] = useState(false);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const classes = useStyles();

    return (
        <div>

            {!drawerOpen &&
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setDrawerOpen(true)}
                edge="start"
                className={matches ? classes.openButton : classes.mobileOpenButton}
                size="large">
                <MenuIcon/>
            </IconButton>
            }

            <Drawer
                variant="persistent"
                anchor="left"
                open={drawerOpen}
                classes={matches ? {paper: classes.paper} : {paper: classes.mobilePaper}}
                className={classes.drawer}
            >
                <Grid container justifyContent="flex-end" alignItems="center"
                      style={{background: '#ffffff', border: '1px solid gray'}}>
                    <Grid item>
                        <IconButton onClick={() => setDrawerOpen(false)} size="large">
                            <ChevronLeftIcon style={{fill: 'black'}}/>
                        </IconButton>
                    </Grid>
                </Grid>
                <Divider/>
                <List>
                    <ListItem button component={Link} to='/' onClick={() => setDrawerOpen(false)}
                              style={{marginBottom: '2vh'}}>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary='Home'/>
                    </ListItem>
                    <ListItem button component={Link} to='/projects' onClick={() => setDrawerOpen(false)}
                              style={{marginBottom: '2vh'}}>
                        <ListItemIcon><ComputerIcon/></ListItemIcon>
                        <ListItemText primary='Projects'/>
                    </ListItem>
                    <ListItem button component={Link} to='/timeline' onClick={() => setDrawerOpen(false)}>
                        <ListItemIcon><TimelineIcon/></ListItemIcon>
                        <ListItemText primary='Timeline'/>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}