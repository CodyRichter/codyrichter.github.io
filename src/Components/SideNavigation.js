import Drawer from "@material-ui/core/Drawer";
import React, {useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from '@material-ui/icons/Home';
import ComputerIcon from '@material-ui/icons/Computer';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";


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
                >
                    <MenuIcon />
                </IconButton>
                }

            <Drawer
                variant="persistent"
                anchor="left"
                open={drawerOpen}
                classes={matches ? { paper: classes.paper } : { paper: classes.mobilePaper }}
                className={classes.drawer}
            >
                <Grid container justify="flex-end" alignItems="center" style={{background: '#ffffff', border: '1px solid gray'}}>
                    <Grid item>
                        <IconButton onClick={() => setDrawerOpen(false)}>
                           <ChevronLeftIcon style={{fill: 'black'}} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Divider />
                <List>
                    <ListItem button component={Link} to='/' onClick={() => setDrawerOpen(false)} style={{marginBottom: '2vh'}}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                    <ListItem button component={Link} to='/projects' onClick={() => setDrawerOpen(false)}>
                        <ListItemIcon><ComputerIcon /></ListItemIcon>
                        <ListItemText primary='Projects' />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}