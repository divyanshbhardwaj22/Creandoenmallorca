/* ============================================================
   script.js — interactive & language support
   ============================================================ */

(function() {
    'use strict';

    // ---- LANGUAGE DICTIONARY ----
    const translations = {
        en: {
    'nav-about': 'ABOUT',
    'nav-services': 'SERVICES',
    'nav-portfolio': 'PORTFOLIO',
    'nav-clients': 'CLIENTS',
    'nav-contact': 'CONTACT',
    'hero-label': 'Content Creation',
    'hero-title': 'Content Creation,<br />Video, Photo &',
    'hero-title-em': 'Social Media<br />Management',
    'hero-sub': 'We help brands and businesses stand out through high-quality visual content and strategic social media management. You can also send us raw footage from anywhere in the world, and we\'ll turn it into engaging videos for your platforms.',
    'hero-cta': 'Contact Us',
    'hero-cta-secondary': 'See our work',
    'about-label': 'About Us',
    'about-title': 'Creando en Mallorca',
    'about-p1': 'We are a creative team focused on audiovisual production and digital strategy for commercial brands, hospitality, and both local and international projects.',
    'about-p2': 'Based in Mallorca, we blend Mediterranean lifestyle with premium visual storytelling to help you connect with your audience authentically.',
    'services-label': 'What we do',
    'services-title': 'Our Services',
    'services-sub': 'Tailored creative solutions for brands that value quality and authenticity.',
    'srv-1-title': 'Photo & Video',
    'srv-1-desc': 'Event coverage, gastronomy, products, real estate, home maintenance, commercial reels, and drone aerial footage.',
    'srv-2-title': 'Video Editing',
    'srv-2-desc': 'Exclusive professional video editing service for creators or brands that already have raw footage ready.',
    'srv-3-title': 'Social Media Management',
    'srv-3-desc': 'Content creation, calendar planning, copywriting, and publishing for Instagram.',
    'srv-4-title': 'Custom Bundles',
    'srv-4-desc': 'Tailored combination of production + social media management based on client needs.',
    'srv-5-title': 'Website Design',
    'srv-5-desc': 'We create modern, fast, fully mobile-responsive websites.',
    'portfolio-label': 'Our Work',
    'port-reel': 'REEL',
    'port-video': 'FLAWLESS DISH',
    'port-foto': 'PHOTO',
    'port-dron': 'DRONE',
    'port-gestion': 'REAL ESTATE',
    'work-more': 'See more projects',
    'clients-label': 'Collaborators',
    'clients-title': 'Trusted by',
    'clients-sub': 'Grateful for the clients and collaborators who have worked with us.',
    'contact-label': 'Get in touch',
    'contact-title': 'Let\'s create something together.',
    'contact-sub': 'We\'d love to hear about your project. Reach out to us anytime.',
    'contact-whatsapp': 'WhatsApp',
    'contact-instagram': 'Instagram',
},
es: {
    'nav-about': 'NOSOTROS',
    'nav-services': 'SERVICIOS',
    'nav-portfolio': 'PORTAFOLIO',
    'nav-clients': 'CLIENTES',
    'nav-contact': 'CONTACTO',
    'hero-label': 'Creación de Contenido',
    'hero-title': 'Creación de<br />Contenido, Video,',
    'hero-title-em': 'Foto & Gestión<br />de Redes',
    'hero-sub': 'Ayudamos a marcas y negocios a destacar a través de contenido visual de alta calidad y gestión estratégica de redes sociales. También puedes enviarnos material de cualquier parte del mundo y lo convertiremos en un video atractivo para tus plataformas.',
    'hero-cta': 'Hablemos',
    'hero-cta-secondary': 'Ver nuestro trabajo',
    'about-label': 'Quiénes somos',
    'about-title': 'Creando en Mallorca',
    'about-p1': 'Somos un equipo creativo enfocado en producción audiovisual y estrategia digital para marcas comerciales, restauración y proyectos tanto locales como internacionales.',
    'about-p2': 'Desde Mallorca, combinamos el estilo de vida mediterráneo con la narrativa visual premium para ayudarte a conectar con tu audiencia de forma auténtica.',
    'services-label': 'Qué hacemos',
    'services-title': 'Nuestros Servicios',
    'services-sub': 'Soluciones creativas a medida para marcas que valoran calidad y autenticidad.',
    'srv-1-title': 'Foto & Video',
    'srv-1-desc': 'Cobertura de eventos, gastronomía, productos, real estate, home maintenance, reels comerciales y tomas aéreas con drone.',
    'srv-2-title': 'Edición de Video',
    'srv-2-desc': 'Servicio exclusivo de edición profesional de videos para creadores o marcas que ya tienen su material grabado.',
    'srv-3-title': 'Gestión de Redes',
    'srv-3-desc': 'Creación de contenido, planificación de calendario, copywriting y publicación para Instagram.',
    'srv-4-title': 'Packs a Medida',
    'srv-4-desc': 'Combinación personalizada de producción + gestión de redes adaptada a las necesidades del cliente.',
    'srv-5-title': 'Diseño de página web',
    'srv-5-desc': 'Creamos sitios web modernos, rápidos y totalmente adaptados a móviles.',
    'portfolio-label': 'Nuestro Trabajo',
    'port-reel': 'REEL',
    'port-video': 'PLATO IMPECABLE',
    'port-foto': 'FOTO',
    'port-dron': 'DRON',
    'port-gestion': 'BIENES RAÍCES',
    'work-more': 'Ver más proyectos',
    'clients-label': 'Colaboradores',
    'clients-title': 'Confían en',
    'clients-sub': 'Agradecemos a los clientes y colaboradores que han trabajado con nosotros.',
    'contact-label': 'Contáctanos',
    'contact-title': 'Creemos algo juntos.',
    'contact-sub': 'Nos encantaría conocer tu proyecto. Escríbenos cuando quieras.',
    'contact-whatsapp': 'WhatsApp',
    'contact-instagram': 'Instagram',
}
};

    // ---- DOM REFS ----
    const langButtons = document.querySelectorAll('.lang-toggle button');
    const translatableEls = document.querySelectorAll('[data-key]');

    // ---- SET LANGUAGE ----
    function setLanguage(lang) {
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        translatableEls.forEach(el => {
            const key = el.dataset.key;
            const val = translations[lang]?.[key];
            if (val !== undefined) {
                if (val.includes('<em>') || val.includes('<br')) {
                    el.innerHTML = val;
                } else {
                    el.textContent = val;
                }
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('creando-lang', lang);
    }

    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });

    const stored = localStorage.getItem('creando-lang');
    const browserLang = navigator.language?.startsWith('es') ? 'es' : 'en';
    setLanguage(stored || browserLang);

    // ---- MOBILE MENU ----
    const menuToggle = document.getElementById('menuToggle');
    const navDesktop = document.getElementById('navDesktop');

    if (menuToggle && navDesktop) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('open');
            navDesktop.classList.toggle('open');
        });

        navDesktop.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                navDesktop.classList.remove('open');
            });
        });
    }

    // ---- FADE-UP OBSERVER ----
    const fadeEls = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.10, rootMargin: '0px 0px -20px 0px' });

    fadeEls.forEach(el => observer.observe(el));

    // ---- HEADER SCROLL ----
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        header.classList.toggle('scrolled', scrollY > 60);
    }, { passive: true });

    // ---- KEYBOARD: close menu on Escape ----
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navDesktop.classList.contains('open')) {
            menuToggle.classList.remove('open');
            navDesktop.classList.remove('open');
        }
    });

    // ---- WORK REELS — autoplay muted loop, battery-smart ----
    const reelVideos = document.querySelectorAll('.work-reel video');

    if (reelVideos.length) {
        reelVideos.forEach(v => { v.muted = true; });

        if ('IntersectionObserver' in window) {
            const reelObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const v = entry.target;
                    if (entry.isIntersecting) {
                        v.play().catch(() => {});
                    } else {
                        v.pause();
                    }
                });
            }, { threshold: 0.25 });
            reelVideos.forEach(v => reelObserver.observe(v));
        } else {
            reelVideos.forEach(v => v.play().catch(() => {}));
        }
    }

    // ---- CLIENTS MARQUEE — inject logos (with fallback SVGs if images missing) ----
    const clientLogos = [
        { name: 'Logo 1', src: 'img/logos/2.png' },
        { name: 'Logo 2', src: 'img/logos/3.png' },
        { name: 'Logo 3', src: 'img/logos/4.png' },
        { name: 'Logo 4', src: 'img/logos/5.png' },
        { name: 'Logo 5', src: 'img/logos/6.png' },
        { name: 'Logo 6', src: 'img/logos/7.png' },
        { name: 'Logo 7', src: 'img/logos/8.png' },
        { name: 'Logo 8', src: 'img/logos/9.png' },
        { name: 'Logo 8', src: 'img/logos/10.png' },
        { name: 'Logo 8', src: 'img/logos/11.png' },
        { name: 'Logo 8', src: 'img/logos/12.png' },
        { name: 'Logo 8', src: 'img/logos/13.png' },
        { name: 'Logo 8', src: 'img/logos/14.png' },
        { name: 'Logo 8', src: 'img/logos/15.png' },
        { name: 'Logo 8', src: 'img/logos/16.png' },
        { name: 'Logo 8', src: 'img/logos/17.png' },
    ];

    const track = document.getElementById('clientsTrack');
    if (track) {
        const all = [...clientLogos, ...clientLogos];
        all.forEach((client) => {
            const div = document.createElement('div');
            div.className = 'logo-item';
            const img = document.createElement('img');
            img.src = client.src;
            img.alt = client.name;
            img.loading = 'lazy';
            img.onerror = function() {
                this.outerHTML = `
                    <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;">
                        <rect width="120" height="80" fill="#2A2C2C" rx="4"/>
                        <rect x="10" y="20" width="100" height="6" fill="#74ACDF" rx="2" opacity="0.35"/>
                        <rect x="10" y="34" width="80" height="6" fill="#FFFFFF" rx="2" opacity="0.18"/>
                        <rect x="10" y="48" width="60" height="6" fill="#FFFFFF" rx="2" opacity="0.10"/>
                        <circle cx="95" cy="40" r="14" fill="none" stroke="#74ACDF" stroke-width="1.5" opacity="0.35"/>
                        <circle cx="95" cy="40" r="6" fill="#D4A843" opacity="0.30"/>
                    </svg>
                `;
            };
            div.appendChild(img);
            track.appendChild(div);
        });
    }

    console.log('🌙 Dark Edition — autoplay reels engaged');
})();


/* ============================================================
   PORTFOLIO MEDIA CARDS
   Videos autoplay only when visible
   ============================================================ */

const portfolioVideos = document.querySelectorAll('.media-card video');

if (portfolioVideos.length) {

    portfolioVideos.forEach(video => {
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
    });

    const portfolioVideoObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                const video = entry.target;

                if (entry.isIntersecting) {

                    video.play().catch(() => {});

                } else {

                    video.pause();

                }

            });

        },
        {
            threshold: 0.35
        }
    );

    portfolioVideos.forEach(video => {
        portfolioVideoObserver.observe(video);
    });
}


/* ============================================================
   PORTFOLIO CARD HOVER
   Slightly enhances video movement
   ============================================================ */

document.querySelectorAll('.media-card').forEach(card => {

    const media = card.querySelector('.card-media');

    if (!media) return;

    card.addEventListener('mouseenter', () => {

        if (media.tagName === 'VIDEO') {
            media.play().catch(() => {});
        }

    });

});
