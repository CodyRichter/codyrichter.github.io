import React, { useCallback, useEffect, useState } from "react";
import {
  Route,
  RouterProvider,
  Routes,
  createHashRouter,
} from "react-router-dom";

import Bio from "./pages/bio/Bio";
import Contact from "./pages/contact/Contact";
import ErrorPage from "./pages/ErrorPage";
import FloatingActionNavButton from "./shared/nav/FloatingActionNavButton";
import FloatingSideNav from "./shared/nav/FloatingSideNav";
import { FooterCentered } from "./shared/footer/FooterCentered";
import Home from "./pages/home/Home";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import Particles from "react-tsparticles";
import Projects from "./pages/projects/Projects";
import Timeline from "./pages/timeline/Timeline";
import { loadLinksPreset } from "tsparticles-preset-links";
import { particlePattern } from "./styles/backgroundParticles";
import useIsMobile from "./utils/useIsMobile";

function App() {
  const isMobile = useIsMobile();

  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  useEffect(() => {
    const metricsUrl =
      "https://i2d2nqrs5jpungxjxd2ppcpwyi0asqob.lambda-url.us-east-1.on.aws/?url=https://cody.richter.codes";
    fetch(metricsUrl, {
      method: "GET",
    }).catch(() => {
      console.error("Failed to send metrics...");
    });
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const [activeSection, setActiveSection] = useState(0);

  const sectionMap = {
    home: 0,
    about: 1,
    projects: 2,
    timeline: 3,
    contact: 4,
  };

  const scrollToSectionById = (id) => {
    // Scroll to the next section

    id = id % Object.keys(sectionMap).length;

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
    if (Object.keys(sectionMap).includes(name)) {
      scrollToSectionById(sectionMap[name]);
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
                {/* {!isMobile && ( */}
                <FloatingSideNav
                  scrollToSectionByName={scrollToSectionByName}
                />
                {/* )} */}

                {!isMobile && (
                  <FloatingActionNavButton
                    currentSectionId={activeSection}
                    finalSectionId={Object.keys(sectionMap).length - 1}
                    scrollToNextSection={() =>
                      scrollToSectionById(activeSection + 1)
                    }
                  />
                )}

                <Home
                  section={sectionMap["home"]}
                  onVisible={() => setActiveSection(sectionMap["home"])}
                />

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
                      zIndex: -1,
                    }}
                  />
                )}

                <Bio
                  section={sectionMap["about"]}
                  onVisible={() => setActiveSection(sectionMap["about"])}
                />

                <Projects
                  section={sectionMap["projects"]}
                  onVisible={() => setActiveSection(sectionMap["projects"])}
                />

                <Timeline
                  section={sectionMap["timeline"]}
                  onVisible={() => setActiveSection(sectionMap["timeline"])}
                />

                <Contact
                  section={sectionMap["contact"]}
                  onVisible={() => setActiveSection(sectionMap["contact"])}
                />

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
