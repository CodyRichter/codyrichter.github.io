import type { ISourceOptions } from "@tsparticles/engine";

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
