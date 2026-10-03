import Bio from "@/sections/bio/Bio";
import Contact from "@/sections/contact/Contact";
import { FooterCentered } from "@/shared/footer/FooterCentered";
import Home from "@/sections/home/Home";
import Projects from "@/sections/projects/Projects";
import SiteChrome from "@/shared/SiteChrome";
import Timeline from "@/sections/timeline/Timeline";
import classes from "./page.module.css";

export default function Page() {
  return (
    <SiteChrome>
      <main>
        <Home />
        <div className={classes.content}>
          <Bio />
          <Projects />
          <Timeline />
          <Contact />
        </div>
      </main>
      <FooterCentered />
    </SiteChrome>
  );
}
