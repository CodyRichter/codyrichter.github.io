export let particlePattern = {
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    preset: "links",
    fps_limit: 60,
    particles: {
        move: {
            speed: 1
        },
        color: {
            value: "#ffffff"
        },
    },
    background: {
        color: {
            value: "#232741"
        },
    },
    // number: {
    //     density: {
    //         enable: false,
    //         area: 800,
    //     },
    //     value: 80,
    // },
    interactivity: {
        onresize:{
            density_auto: true,
            density_area: 10
        }
    }


};