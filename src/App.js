import React, { useCallback } from "react";
import {
  Route,
  RouterProvider,
  Routes,
  createHashRouter,
} from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import FloatingSideNav from "./shared/nav/FloatingSideNav";
import { FooterCentered } from "./shared/footer/FooterCentered";
import Home from "./pages/home/Home";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import Particles from "react-tsparticles";
import Projects from "./pages/projects/Projects";
import { loadLinksPreset } from "tsparticles-preset-links";
import { particlePattern } from "./styles/backgroundParticles";
import useIsMobile from "./utils/useIsMobile";

function App() {
  const isMobile = useIsMobile();

  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const router = createHashRouter([
    {
      path: "*",
      element: (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FloatingSideNav />
                <Home />
                {!isMobile && (
                  <Particles
                    id="tsparticles"
                    options={particlePattern}
                    init={particlesInit}
                    loaded={particlesLoaded}
                    style={{
                      position: "absolute",
                      height: "100%",
                      top: "0",
                      left: "0",
                      width: "100%",
                      zIndex: -1,
                    }}
                  />
                )}
                <Projects />
                <FooterCentered />
              </>
            }
          />
        </Routes>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <Notifications position="top-center" zIndex={2077} limit={3} />
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
