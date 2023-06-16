import React, { useCallback } from "react";
import {
  Route,
  RouterProvider,
  Routes,
  createHashRouter,
} from "react-router-dom";

import Bio from "./pages/bio/Bio";
import ErrorPage from "./pages/ErrorPage";
import FloatingActionNavButton from "./shared/nav/FloatingActionNavButton";
import FloatingSideNav from "./shared/nav/FloatingSideNav";
import { FooterCentered } from "./shared/footer/FooterCentered";
import Home from "./pages/home/Home";
import { MantineProvider } from "@mantine/core";
import NavigationSection from "./shared/nav/NavigationSection";
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

  // Track what section is currently being viewed. Updating the state will
  // not change what the user sees -- it is only used by the browser
  // to tell the app what section it thinks is being viewed.
  const [currentSection, setCurrentSection] = React.useState(0);

  const navigationMap = {
    home: 0,
    bio: 1,
    projects: 2,
  };

  const lastSectionId = Object.keys(navigationMap).length - 1;

  const scrollToSectionById = (id) => {
    // Scroll to the next section

    id = id % Object.keys(navigationMap).length;

    if (id === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const nextSectionElement = document.getElementById(`section-${id}`);
      if (nextSectionElement) {
        nextSectionElement.scrollIntoView({ behavior: "smooth" });
      }
      setTimeout(() => {
        nextSectionElement.style.transition = "transform 1s";
      }, 100);
    }
  };

  const scrollToSectionByName = (name) => {
    if (Object.keys(navigationMap).includes(name)) {
      scrollToSectionById(navigationMap[name]);
    } else {
      console.error(
        `Internal Error: Unable to Scroll to Section "${name}". Section does not exist.`
      );
    }
  };

  const router = createHashRouter([
    {
      path: "*",
      element: (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FloatingSideNav
                  scrollToSectionByName={scrollToSectionByName}
                />
                <FloatingActionNavButton
                  currentSectionId={currentSection}
                  finalSectionId={lastSectionId}
                  scrollToNextSection={() =>
                    scrollToSectionById(currentSection + 1)
                  }
                />
                <NavigationSection
                  id={navigationMap["home"]}
                  onVisible={(id) => setCurrentSection(id)}
                >
                  <Home />
                </NavigationSection>
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

                <NavigationSection
                  id={navigationMap["bio"]}
                  onVisible={(id) => setCurrentSection(id)}
                >
                  <Bio />
                </NavigationSection>

                <NavigationSection
                  id={navigationMap["projects"]}
                  onVisible={(id) => setCurrentSection(id)}
                >
                  <Projects />
                </NavigationSection>
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
