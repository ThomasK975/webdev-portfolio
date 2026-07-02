function runTypewriterOnce() {
    const nameHeading = document.getElementById('nameFontSize');

    if (!nameHeading) {
        return;
    }

    const fullText = nameHeading.getAttribute('data-typewriter-text') || '';

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        nameHeading.textContent = fullText;
        nameHeading.classList.add('typing-complete');
        return;
    }

    let index = 0;
    const typingSpeedMs = 240;

    nameHeading.textContent = '';
    nameHeading.classList.add('is-typing');

    const typeTimer = window.setInterval(function () {
        index += 1;
        nameHeading.textContent = fullText.slice(0, index);

        if (index >= fullText.length) {
            window.clearInterval(typeTimer);

            window.setTimeout(function () {
                nameHeading.classList.remove('is-typing');
                nameHeading.classList.add('typing-complete');
            }, 280);
        }
    }, typingSpeedMs);
};

document.addEventListener('DOMContentLoaded', runTypewriterOnce)