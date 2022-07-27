import React from "react";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AutoTypeTerminal from "./AutoTypeTerminal";

function Home() {

    return (
        <div>
            <Grid
                style={{marginTop: '12vh'}}
                container
                alignItems="center"
            >

                <Grid item xs={12} align="center" style={{marginBottom: '4vh'}}>
                    <Typography variant='h2' style={{marginBottom: '1vh'}}>Cody Richter</Typography>


                    <AutoTypeTerminal/>


                </Grid>

                <Grid item xs={12} align="center">
                    <Avatar variant="circular" alt="Cody Richter" src="https://i.imgur.com/oAIdMh7.jpg"
                            style={{width: 200, height: 200}}/>
                </Grid>

            </Grid>


        </div>
    );
}

export default Home;
