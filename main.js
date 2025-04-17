document.addEventListener("DOMContentLoaded", () => {
    // Navbar responsive menu button
    const toggleButton = document.querySelector(".menu-toggle");
    const navbarPages = document.querySelector(".navbar-pages");

    toggleButton.addEventListener("click", () => {
        navbarPages.classList.toggle("active");
    });


    // Animate popouts
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


    // Animate skill bars
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
});


document.querySelector('.language-toggle').addEventListener('click', () => {
    document.querySelector('.language-dropdown').classList.toggle('hidden');
  });
  