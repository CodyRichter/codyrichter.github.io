import type { ISourceOptions } from "@tsparticles/engine";

// The canvas paints its own navy, matching the page background on `html`.
export const particlePattern: ISourceOptions = {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  detectRetina: true,
  preset: "links",
  fpsLimit: 60,
  particles: {
    move: {
      speed: 1,
    },
    color: {
      value: "#ffffff",
    },
  },
  background: {
    color: {
      value: "#232741",
    },
  },
};

// Used when the visitor prefers reduced motion: same network, but drifting
// very slowly instead of off entirely.
export const calmParticlePattern: ISourceOptions = {
  ...particlePattern,
  particles: {
    ...particlePattern.particles,
    move: {
      speed: 0.15,
    },
  },
};

// Phones get a sparse starfield: small dots, no connecting lines, no pointer
// interaction, and a lower frame rate to go easy on the battery.
export const mobileParticlePattern: ISourceOptions = {
  ...particlePattern,
  fpsLimit: 30,
  particles: {
    number: { value: 40 },
    color: { value: "#ffffff" },
    links: { enable: false },
    size: { value: { min: 1, max: 2 } },
    opacity: { value: { min: 0.3, max: 0.8 } },
    move: { enable: true, speed: 0.3 },
  },
  interactivity: {
    events: {
      onHover: { enable: false },
      onClick: { enable: false },
    },
  },
};

export const calmMobileParticlePattern: ISourceOptions = {
  ...mobileParticlePattern,
  particles: {
    ...mobileParticlePattern.particles,
    move: { enable: true, speed: 0.1 },
  },
};
