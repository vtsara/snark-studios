class contactCTA extends HTMLElement {
    connectedCallback() {
        // Base CTA content
        let buttonHTML = `
            <a class="ss-btn green" href="contact.html">tap click ping</a>
        `;

        // Swap button on contact page
        if (document.body.classList.contains('ss-pg-contact')) {
            buttonHTML = `
                <a class="ss-btn green" href="mailto:sara@snarkstudios.com">sara@snarkstudios.com</a>
            `;
        }

        // Final content
        this.innerHTML = `
            <div class="section blue-bg" id="contact-cta">
                <img src="media/sara-phone.png">
                <div class="inner">
                    <h2 class="blk-txt">chit chat?</h2>
                    <h5>hey look, it's me, listening to your problems + coming up with brilliant solutions! Take action now to make it real!</h5>
                    <div class="button">
                        ${buttonHTML}
                    </div>
                </div>
            </div>
        `;


    }
}

customElements.define('contact-cta', contactCTA);
