import React from "react";
import {createTheme} from '@mui/material/styles';
import {ThemeProvider} from "@mui/styles";
import {StyledEngineProvider} from '@mui/material/styles';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import SideNavigation from "./Components/SideNavigation";
import TimelinePage from "./pages/TimelinePage";

const theme = createTheme({
    typography: {
        h4: {
            fontFamily: 'Source Code Pro'
        },
    }
});

function App() {

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Router>
                    <SideNavigation/>

                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/timeline" element={<TimelinePage/>}/>
                    </Routes>
                </Router>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
