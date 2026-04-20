/**
 * Flames of Fire — Scroll Fade Animation Controller
 * Observes .fade-in, .fade-in-left, .fade-in-right, .fade-in-up, .fade-in-down
 * Adds .visible when entering viewport, removes it when leaving.
 */
(function () {
    const SELECTORS = '.fade-in, .fade-in-left, .fade-in-right, .fade-in-up, .fade-in-down';

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    // Reset when leaving viewport (Fade Out)
                    entry.target.classList.remove('visible');
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    function initAnimations() {
        document.querySelectorAll(SELECTORS).forEach((el) => {
            observer.observe(el);
        });
    }

    // Expose to window so dynamic content can call it
    window.initAnimations = initAnimations;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimations);
    } else {
        initAnimations();
    }
})();
