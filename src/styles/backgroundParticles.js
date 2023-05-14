export let particlePattern = {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  detectRetina: true,
  preset: "links",
  fps_limit: 60,
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
  interactivity: {
    onresize: {
      density_auto: true,
      density_area: 5,
    },
  },
};
