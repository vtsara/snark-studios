document.addEventListener('DOMContentLoaded', () => {

    // page load check + fading action
    window.addEventListener('load', () => {
        const hero = document.getElementById('ss-welcome');
        if (!hero) return; // Exit early if not on home page

        const inner = hero.querySelector('.inner');
        const elevator = document.querySelector('.elevator');
        const logo = inner.querySelector('img');
        const h2 = inner.querySelector('h2');
        const h3 = elevator.querySelector('h3');
        const boom = elevator.querySelector('.boom');
        const bgBox = elevator.querySelector('.bg-box');
        const bioRibbon = document.querySelector(".ribbon");

        // Step 1: Fade in background
        setTimeout(() => {
            hero.classList.add('hero-bg-loaded');

            // Step 2: Fade in logo and h2
            setTimeout(() => {
                inner.classList.add('now-visible');
                logo.classList.add('now-visible');
                h2.classList.add('now-visible');
            }, 500);
        }, 200);

        // Step 3 & 4: Scroll-triggered elements
        const scrollReveal = () => {
            const triggerBottom = window.innerHeight * 0.65;

            if (h3 && h3.getBoundingClientRect().top < triggerBottom) {
                h3.classList.add('now-visible');
            }

            if (boom && boom.getBoundingClientRect().top < triggerBottom) {
                boom.classList.add('now-visible');
            }

            if (bgBox && bgBox.getBoundingClientRect().top < triggerBottom) {
                bgBox.classList.add('now-visible');
            }

            if (bioRibbon && bioRibbon.getBoundingClientRect().top < triggerBottom) {
                bioRibbon.classList.add('now-visible');
            }
        };

        window.addEventListener('scroll', scrollReveal);

        // parallax movie
        function updateBackgroundImage() {

            // Get the landing page element
            const element = document.querySelector(".movie");

            // Must be between between 1 and -1 exclusive - 0 yields no effect, 
            // negative values shift image up as the user scrolls down
            // positive values shift image down as the user scrolls down
            const parallaxEffect = -.2

            // Must be the same as css background-position-y value
            const offset = 90;

            // Update the background-position-y style property using the vertical scroll position only if on desktop
            // if (!isMobile.any()) {
            element.style.backgroundPositionY = `calc(${parallaxEffect * window.scrollY}px + ${offset}px)`;
            // }

        }


        window.addEventListener('scroll', updateBackgroundImage);
    });

    // smooth scrolling  
    const links = document.querySelectorAll('a[href*="#"]:not([href="#"])');
    console.log(links);
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const { pathname, hostname, hash } = this;

            const isSamePage = window.location.pathname.replace(/^\//, '') === pathname.replace(/^\//, '') &&
                window.location.hostname === hostname;

            if (isSamePage) {
                const targetId = hash.slice(1);
                const target = document.getElementById(targetId) || document.querySelector(`[name="${targetId}"]`);

                if (target) {
                    e.preventDefault();

                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // fade up behavior 
    const fadeObjects = document.querySelectorAll('.fadeup-effect');

    function animateObjects() {
        const windowHeight = window.innerHeight;

        fadeObjects.forEach((el, index) => {
            const offsetTop = el.getBoundingClientRect().top;
            const percent = Math.floor((offsetTop / windowHeight) * 70);

            if (percent < 80) {
                el.classList.add('fadeInUp');
                el.style.animationDelay = `${index * 0.25}s`;
            }
        });
    }

    function interpolateColor(color1, color2, factor) {
        return color1.map((c, i) => Math.round(c + factor * (color2[i] - c)));
    }

    function scrollOverlayEffect() {
        const section = document.querySelector('.bio-section');
        const content = section.querySelector('.scroll-content');

        const rect = section.getBoundingClientRect();
        const scrollPercent = Math.min(1, Math.max(0, -rect.top / rect.height));

        let rgb, alpha;

        if (scrollPercent < 0.3) {
            rgb = [0, 0, 0];
            alpha = 0.7 - (scrollPercent / 0.3) * (0.7 - 0.5);
        } else if (scrollPercent >= 0.3 && scrollPercent < 0.5) {
            const progress = (scrollPercent - 0.3) / (0.5 - 0.3);
            alpha = 0.5 + progress * (0.5 - 0.35);
            rgb = interpolateColor([0, 0, 0], [61, 172, 226], progress);
        } else {
            const progress = (scrollPercent - 0.5) / (1 - 0.5);
            rgb = [61, 172, 226];
            alpha = 0.6 + progress * (0.75 - 0.5);
        }

        const rgbaString = `rgba(${rgb.join(', ')}, ${alpha.toFixed(2)})`;
        content.style.setProperty('--overlay-color', rgbaString);
    }

    window.addEventListener('scroll', scrollOverlayEffect);
    scrollOverlayEffect();

    // Run on scroll
    window.addEventListener('scroll', animateObjects);

    // Run on load (in case some elements are already in view)
    animateObjects();

});