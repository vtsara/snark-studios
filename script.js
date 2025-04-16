document.addEventListener('DOMContentLoaded', () => {

    // page load check + fading action
    window.addEventListener('load', () => {
        const hero = document.getElementById('ss-welcome');
        const inner = hero.querySelector('.inner');
        const logo = inner.querySelector('img');
        const h2 = inner.querySelector('h2');
        const h3 = inner.querySelector('h3');
        const subtitleDiv = inner.querySelector('.boom');
        const bgBox = hero.querySelector('.bg-box');

        console.log(logo);
        console.log(h2);

        // Step 1: Fade in background
        setTimeout(() => {
            hero.classList.add('hero-bg-loaded');

            // Step 2: Fade in logo and h2
            setTimeout(() => {
                inner.classList.add('hero-content-visible');
                logo.classList.add('hero-content-visible');
                h2.classList.add('hero-content-visible');
            }, 500);
        }, 200);

        // Step 3 & 4: Scroll-triggered elements
        const scrollReveal = () => {
            const triggerBottom = window.innerHeight * 0.8;

            const h3Top = h3.getBoundingClientRect().top;
            const divTop = subtitleDiv.getBoundingClientRect().top;
            const boxTop = bgBox.getBoundingClientRect().top;

            if (h3Top < triggerBottom) h3.classList.add('hero-content-visible');
            if (divTop < triggerBottom) subtitleDiv.classList.add('hero-content-visible');
            if (boxTop < triggerBottom) bgBox.classList.add('hero-content-visible');
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

        // smooth scrolling  TODO: not working!
        const links = document.querySelectorAll('div[class^="home"] a[href*="#"]:not([href="#"])');

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

            fadeObjects.forEach(el => {
                const offsetTop = el.getBoundingClientRect().top;
                const percent = Math.floor((offsetTop / windowHeight) * 100);

                if (percent < 80) {
                    el.classList.add('fadeInUp');
                }
            });
        }

        // Run on scroll
        window.addEventListener('scroll', animateObjects);

        // Run on load (in case some elements are already in view)
        animateObjects();
    });
});