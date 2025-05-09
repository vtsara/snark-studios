document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById('ss-home');
    const services = document.getElementById('ss-page-svc');
    const about = document.getElementById('ss-page-about');
    const portfolio = document.getElementById('ss-page-portfolio');

    // Global Scripts
    setupSmoothScrolling();
    setupFadeUpEffects();

    // Page-Specific Scripts
    if (home) setupHomePage();
    if (services) setupServicesPage();
    if (about) setupAboutPage();
    if (portfolio) setupPortfolioPage();
});

function setupHomePage() {
    window.addEventListener('load', () => {
        const hero = document.getElementById('ss-welcome');
        if (!hero) return;

        const inner = hero.querySelector('.inner');
        const elevator = document.querySelector('.elevator');
        const logo = inner.querySelector('img');
        const h2 = inner.querySelector('h2');
        const h3 = elevator.querySelector('h3');
        const boom = elevator.querySelector('.boom');
        const bgBox = elevator.querySelector('.bg-box');
        const bioRibbon = document.querySelector(".ribbon");

        setTimeout(() => {
            hero.classList.add('hero-bg-loaded');
            setTimeout(() => {
                inner.classList.add('now-visible');
                logo.classList.add('now-visible');
                h2.classList.add('now-visible');
            }, 500);
        }, 200);

        const scrollReveal = () => {
            const triggerBottom = window.innerHeight * 0.65;
            if (h3 && h3.getBoundingClientRect().top < triggerBottom) h3.classList.add('now-visible');
            if (boom && boom.getBoundingClientRect().top < triggerBottom) boom.classList.add('now-visible');
            if (bgBox && bgBox.getBoundingClientRect().top < triggerBottom) bgBox.classList.add('now-visible');
            if (bioRibbon && bioRibbon.getBoundingClientRect().top < triggerBottom) bioRibbon.classList.add('now-visible');
        };
        window.addEventListener('scroll', scrollReveal);

        function updateBackgroundImage() {
            const element = document.querySelector(".movie");
            const parallaxEffect = -.4;
            const offset = 170;
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const startOffset = -1;
            const progress = 1 - (elementTop + startOffset) / windowHeight;
            const clampedProgress = Math.max(0, Math.min(progress, 1));
            const backgroundY = offset + clampedProgress * (parallaxEffect * element.offsetHeight);
            element.style.backgroundPosition = `center ${backgroundY}px`;
        }
        window.addEventListener('scroll', updateBackgroundImage);
        window.addEventListener('load', updateBackgroundImage);

        function interpolateColor(color1, color2, factor) {
            return color1.map((c, i) => Math.round(c + factor * (color2[i] - c)));
        }

        function scrollOverlayEffect() {
            const section = document.querySelector('.bio-section');
            if (!section) return;
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
    });
}

function setupServicesPage() {
    const spans = document.querySelectorAll('#type-target span');
    let index = 0;

    function animateNext() {
        if (index < spans.length) {
            spans[index].classList.add('visible');

            // Optional: longer delay after certain words
            const word = spans[index].textContent.trim().toLowerCase();
            const longPauseWords = ['probably', 'don\'t'];
            const delay = longPauseWords.includes(word) ? 1000 : 400;

            index++;
            setTimeout(animateNext, delay);
        }
    }
    // Start animation after header fade-up completes
    setTimeout(animateNext, 700);

    const subBox = document.querySelector('.row.slide');
    const subHeader = document.querySelector('.bebas.animate');
    const stripe = document.querySelector('.stripe');
    if (!subBox || !subHeader || !stripe) return;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const rawOffset = scrollY * 0.1;
        const maxOffset = 40;
        const clampedOffset = Math.min(rawOffset, maxOffset);
        subHeader.style.setProperty('--header-offset', `${clampedOffset}px`);

        const delayedScrollY = Math.max(scrollY - 40, 0); // prevent negative
        const offsetBox = Math.min(delayedScrollY * 0.1, 40);
        subBox.style.setProperty('--box-offset', `${offsetBox}px`);

        const stripeTrigger = window.innerHeight * 0.75;
        if (stripe && stripe.getBoundingClientRect().top < stripeTrigger) stripe.classList.add('and-go');

    });
}

function setupAboutPage() {
    const pic = document.querySelector('.ab-pic');
    if (pic) {
        setTimeout(() => {
            pic.classList.add('move');
        }, 500);
    }
}

function setupPortfolioPage() {

}



function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href*="#"]:not([href="#"])');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const { pathname, hostname, hash } = this;
            const isSamePage = window.location.pathname.replace(/^\//, '') === pathname.replace(/^\//, '') && window.location.hostname === hostname;
            if (isSamePage) {
                const targetId = hash.slice(1);
                const target = document.getElementById(targetId) || document.querySelector(`[name="${targetId}"]`);
                if (target) {
                    e.preventDefault();
                    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
                }
            }
        });
    });
}

function setupFadeUpEffects() {
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
    window.addEventListener('scroll', animateObjects);
    animateObjects();
}
