import React, { useCallback } from "react";
import {
  Route,
  RouterProvider,
  Routes,
  createHashRouter,
} from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
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
                <Home />
                {!isMobile && (
                  <Particles
                    id="tsparticles"
                    options={particlePattern}
                    init={particlesInit}
                    loaded={particlesLoaded}
                  />
                )}
                <Projects />
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
