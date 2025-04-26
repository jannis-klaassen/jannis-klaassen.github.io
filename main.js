document.addEventListener("DOMContentLoaded", () => {
    // NAVBAR RESPONSIVE MENU BUTTON
    const toggleButton = document.querySelector(".menu-toggle");
    const navbarPages = document.querySelector(".navbar-pages");

    toggleButton.addEventListener("click", () => {
        navbarPages.classList.toggle("active");
    });


    // ANIMATE POPOUTS
    const popoutElements = document.querySelectorAll(".popout");
    const popoutObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("popout");
                entry.target.classList.add("popout-animation");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    popoutElements.forEach(element => popoutObserver.observe(element));


    // ANIMATE SKILL BARS
    const fills = document.querySelectorAll(".fill");
    const fillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.getAttribute("data-fill");
                fill.style.width = width;
                observer.unobserve(fill);
            }
        });
    }, {
        threshold: 0.5
    });
    fills.forEach(fill => fillObserver.observe(fill));


    // INTRO ANIMATION
    const introText = document.querySelector(".intro-text");
    const introSocials = document.querySelectorAll(".intro-socials a");
    const aboutText = document.querySelector(".about-text");

    // To avoid layout shifting
    lockElementSize(introText);
    lockElementSize(document.querySelector(".about"));

    (async () => {
        await delay(1000);
        await typeParagraphs(introText, 30);
        await delay(500);
        await animateIcons(introSocials);
        await delay(1500);
        await typeParagraphs(aboutText);
    })();
});


async function animateIcons(container) {
    container.forEach(icon => {
        icon.classList.remove("hidden");
        icon.classList.add("popout-animation");
    });
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function lockElementSize(element) {
    element.style.minWidth = `${element.offsetWidth}px`;
    element.style.minHeight = `${element.offsetHeight}px`;
}


async function typeParagraphs(container, typingSpeed = 20, delayTime = 400) {
    const paragraphs = Array.from(container.querySelectorAll("p"));
    const texts = paragraphs.map(p => p.textContent);
    paragraphs.forEach(p => p.textContent = "");

    container.classList.remove("hidden");

    for (let i = 0; i < paragraphs.length; i++) {
        await typeParagraph(paragraphs[i], texts[i], typingSpeed);
        if (i < paragraphs.length - 1) {
            await delay(delayTime);
        }
    }

    async function typeParagraph(p, text, typingSpeed) {
        for (let i = 1; i <= text.length; i++) {
            p.textContent = text.slice(0, i);
            await delay(typingSpeed);
        }
    }
}
