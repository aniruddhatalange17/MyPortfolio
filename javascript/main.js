// Menu Show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')


// Activate and Remove Menu
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// Scroll Reveal Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// Scroll Home

sr.reveal('.home_title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home_img', { delay: 400 })
sr.reveal('.home_social-icon', { interval: 200 })

// Scroll About
sr.reveal('.about_img', {})
sr.reveal('.about_subtitle', { delay: 200 })
sr.reveal('.about_text', { delay: 400 })


// Scroll Skills
sr.reveal('.skills_subtitle', {})
sr.reveal('.skills_text', { delay: 200 })
sr.reveal('.skills_data', { interval: 200 })
sr.reveal('.skills__img', { delay: 300 })


// Scroll Projects
sr.reveal('.project', { interval: 100 })
sr.reveal('.project_img', { interval: 200 })

// Scroll Research
sr.reveal('.research', { interval: 100 })
sr.reveal('.research_img', { interval: 200 })

// Scroll Contact
sr.reveal('.contact_subtitle', {})
sr.reveal('.contact_input', { interval: 100 })

// Scroll CV
sr.reveal('.cv', { interval: 100 })
sr.reveal('.cv_title', { interval: 300 })
sr.reveal('.cv_img', { interval: 100 })

// Scroll Publications
sr.reveal('.publication', { interval: 100 })
sr.reveal('.publications_subtitle', { interval: 350 })
sr.reveal('.publication_img', { interval: 100 })

// Scroll Footer
sr.reveal('.footer_title', {})


