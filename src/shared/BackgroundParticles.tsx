"use client";

import { useState } from "react";
import Particles from "@tsparticles/react";
import { particlePattern } from "@/styles/backgroundParticles";

export default function BackgroundParticles() {
  const [loaded, setLoaded] = useState(false);

  // The fixed-size box avoids the canvas resizing (and re-seeding) while the
  // page lays out; it fades in over the prerendered `.hero-backdrop`.
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Particles
        id="tsparticles"
        options={particlePattern}
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
