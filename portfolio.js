fetch('portfolio.json')
    .then(res => res.json())
    .then(portfolio => {
        const container = document.querySelector('.projects-container');

        portfolio.forEach(proj => {
            const div = document.createElement('div');
            div.classList.add('project-box', 'fadeup-effect');

            div.innerHTML = `
        <div class="project-img">
          <img src="${proj.image.src}" alt="${proj.image.alt}">
        </div>
        <div class="project-info">
          <h4 class="project-title">${proj.name}</h4>
          <div class="project-client">${proj.type}</div>
          <div class="project-summary">
            <p>${proj.summary}</p>
            <a class="ss-btn project-sample" href="${proj.link}" target="_blank" rel="noopener noreferrer">See it for real</a>
            <h5>partners</h5>
            <p>${proj.partners}</p>
          </div>
          <h3>&lt;tech specs&gt;</h3>
          <p>${proj.specs}</p>
        </div>
      `;

            container.appendChild(div);
        });

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
    })
    .catch(err => {
        console.error('Error loading client data:', err);
    });
