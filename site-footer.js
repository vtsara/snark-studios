

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      
        <footer class="js">
        <h5>footnotes</h5>
        <div class="inner">
            <p class="fadeup-effect">This site was designed and developed by Snark Studios, obviously. Tech stack simple as apple pie, sans
                fancy
                crust art: html, css, and good ol' vanilla javascript. Long live the classics!</p>
            <div class="socials fadeup-effect">
                <a href="https://instagram.com/__snarkstudios" target="_blank">insta</a>
                <a href="https://linkedin.com/in/saradlloyd/" target="_blank">linkedin</a>
                <a href="mailto:sara@snarkstudios.com" target="_blank">email me like it's 1999</a>
                <a href="https://share.getf.ly/n70n8m" target="_blank">flywheel hosting*</a>
                <a href="https://lovable.dev/?via=sara-lloyd" target="_blank">build a lovable app*</a>
                <a href="https://github.com/vtsara" target="_blank">github</a>
                <a href="https://1password.com" target="_blank">just one password*</a>
                <a href="https://boardroombingo.com" target="_blank">play corporate lingo bingo</a>
                <a href="https://downforeveryoneorjustme.com/" target="_blank">is your site down?</a>
                <a href="https://oken.do/flcr5l8b" target="_blank">the best hair color*</a>
                <p>*these items are affiliate links. this means I maybe get dollars if you click them and then purchase
                    something! cool, eh?</p>
            </div>
        </div>
        <p class="copyrt">&copy; 2025 Sara Elizabeth Works LLC d/b/a Snark Studios</p>
    </footer>
    `;

    }
}

customElements.define('site-footer', SiteFooter);
