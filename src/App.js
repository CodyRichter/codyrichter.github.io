import React from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SideNavigation from "./Components/SideNavigation";

const theme = createMuiTheme({
    typography: {
        h4: {
            fontFamily: 'Source Code Pro'
        },
    }
});

function App() {

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <SideNavigation />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
