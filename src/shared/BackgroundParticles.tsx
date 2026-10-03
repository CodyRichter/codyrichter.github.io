"use client";

import { useState } from "react";
import Particles from "@tsparticles/react";
import {
  calmMobileParticlePattern,
  calmParticlePattern,
  mobileParticlePattern,
  particlePattern,
} from "@/styles/backgroundParticles";

const pickPattern = (mobile: boolean, calm: boolean) => {
  if (mobile) return calm ? calmMobileParticlePattern : mobileParticlePattern;
  return calm ? calmParticlePattern : particlePattern;
};

export default function BackgroundParticles({
  mobile = false,
  calm = false,
}: {
  mobile?: boolean;
  calm?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  // The fixed-size box avoids the canvas resizing (and re-seeding) while the
  // page lays out (`svh` so the iOS toolbar showing/hiding doesn't resize it);
  // it fades in over the navy page background.
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100svh",
        zIndex: -1,
      }}
    >
      <Particles
        id="tsparticles"
        options={pickPattern(mobile, calm)}
        particlesLoaded={async () => setLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          opacity: loaded ? 1 : 0,
          transition: "opacity 600ms ease-out",
        }}
      />
    </div>
  );
}
