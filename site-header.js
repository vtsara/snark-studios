

class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      
        <header id="masthead" class="site-header">
            <div class="main-header">
                <div class="container">
                <div class="site-branding">
                    <a href="/">
                    <img src="/media/logo_main_lg.png" alt="Site Logo">
                    </a>
                </div>

                <nav id="site-navigation" class="main-navigation" aria-label="Main Menu">
                    <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <span class="menu-toggle-label">Menu</span>
                    <span class="menu-icon">
                        <i></i>
                        <i></i>
                    </span>
                    </button>

                    <ul id="primary-menu" class="menu">
                    <li><a href="/services.html">Help Yew?</a></li>
                    <li><a href="/portfolio.html">Portfolio</a></li>
                    <li><a href="/about.html">About</a></li>
                    <li><a href="mailto:sara@snarkstudios.com" target="_blank">Contact</a></li>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
    `;
        // Load behavior module after header is in DOM
        import('./header-action.js')
            .then((module) => {
                module.initHeaderBehavior(); // call exported function
            })
            .catch(err => {
                console.error('Error loading header behavior:', err);
            });
    }
}

customElements.define('site-header', SiteHeader);
