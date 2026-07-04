document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode')
    }
    setActiveCircle(savedTheme)
    updateParticleColours(savedTheme)
})

function setActiveCircle(theme)
{
    const darkCircle = document.querySelector('#theme-dark')
    const lightCircle = document.querySelector('#theme-light')
    if (!darkCircle || !lightCircle) return

    if (theme === 'light') {
        lightCircle.classList.add('theme-circle-active')
        darkCircle.classList.remove('theme-circle-active')
    } else {
        darkCircle.classList.add('theme-circle-active')
        lightCircle.classList.remove('theme-circle-active')
    }
}

function updateParticleColours(theme)
{
    if (typeof pJSDom === 'undefined' || pJSDom.length === 0) return

    const p = pJSDom[0].pJS
    const colour = theme === 'light' ? '#333333' : '#79f7ff'
    const lineColour = theme === 'light' ? '#555555' : '#55e6ff'

    p.particles.color.value = colour
    p.particles.line_linked.color = lineColour
    p.particles.array.forEach(particle => {
        particle.color.value = colour
    })
    p.fn.particlesRefresh()
}

function setTheme(theme)
{
    if (theme === 'light') {
        document.body.classList.add('light-mode')
    } else {
        document.body.classList.remove('light-mode')
    }
    localStorage.setItem('theme', theme)
    setActiveCircle(theme)
    updateParticleColours(theme)
}