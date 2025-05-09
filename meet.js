

class meetSara extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <div class="section green-bg stripe" id="meet-cta">
                <h2 class="blk-txt">who dat</h2>
                <h5 class="code">learn more about me, sara</h5>
                <div class="button">
                    <a class="ss-btn blue blk-txt" href="about.html">oK let's go</a>
                </div>
            </div>
    `;

    }
}

customElements.define('meet-cta', meetSara);
