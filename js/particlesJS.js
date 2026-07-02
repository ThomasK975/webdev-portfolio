particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 900
            }
        },
        color: {
            value: '#79f7ff'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.35,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 130,
            color: '#55e6ff',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.4,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.45
                }
            },
            push: {
                particles_nb: 3
            }
        }
    },
    retina_detect: true
});