import React from "react";
import {createTheme, StyledEngineProvider} from '@mui/material/styles';
import {ThemeProvider} from "@mui/styles";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TimelinePage from "./pages/timeline/TimelinePage";
import HeaderNav from "./shared/header/HeaderNav";
import Grid from "@mui/material/Grid";
import {Divider} from "@mui/material";


const themeLight = createTheme({
    palette: {
        background: {
            default: "#eceef3"
        }
    }
});

const themeDark = createTheme({
    palette: {
        background: {
            default: "#000000"
        },
        text: {
            primary: "#ffffff"
        }
    }
});


function App() {

    const [light, setLight] = React.useState(false);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={light ? themeLight : themeDark}>
                <Router>
                    <Grid
                        container
                        style={{backgroundColor: 'white'}}
                    >
                        <Grid item md={2} xs={0}/>
                        <Grid item md={8} xs={12}>
                            <HeaderNav/>
                        </Grid>
                        <Grid item md={2} xs={0}/>
                    </Grid>
                    <Divider className='mb-4 pb-2'/>

                    <Grid container>
                        <Grid item md={2} xs={0}/>
                        <Grid item md={8} xs={12}>
                            <Routes>
                                <Route exact path="/" element={<Home/>}/>
                                <Route path="/projects" element={<Projects/>}/>
                                <Route path="/experience" element={<TimelinePage/>}/>
                            </Routes>
                        </Grid>
                        <Grid item md={2} xs={0}/>
                    </Grid>

                </Router>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
