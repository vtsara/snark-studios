export function initHeaderBehavior() {
    const toggleBtn = document.querySelector('.menu-toggle');
    const menu = document.querySelector('#primary-menu');
    const siteHeader = document.querySelector('.main-header');
    const body = document.body;
    let lastScrollY = window.scrollY;
    const heroHeight = document.querySelector('#ss-welcome .blue-box')?.offsetHeight || 200;

    if (!siteHeader) {
        console.warn('Header not found.');
        return;
    }

    // Menu toggle
    toggleBtn?.addEventListener('click', () => {
        menu.classList.toggle('active');
        const expanded = toggleBtn.getAttribute('aria-expanded') === 'true' || false;
        toggleBtn.setAttribute('aria-expanded', !expanded);
    });

    // Scroll behavior
    const handleScroll = () => {
        const currentScroll = window.scrollY;
        const isHome = body.classList.contains('home');

        if (isHome) {
            if (currentScroll > heroHeight) {
                siteHeader.classList.add('visible');
            } else {
                siteHeader.classList.remove('visible');
            }
        } else {
            siteHeader.classList.add('visible');
        }

        lastScrollY = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on load
}

// Mark the active page
const currentPage = window.location.pathname.split("/").pop();
const navItems = document.querySelectorAll(".mobile-nav .nav-item");

navItems.forEach(item => {
    const href = item.getAttribute("href");
    if (currentPage === href) {
        item.classList.add("active");
    }
});