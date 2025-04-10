// Animate skill bars 
document.addEventListener("DOMContentLoaded", () => {
    const fills = document.querySelectorAll(".fill");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.getAttribute("data-fill");
                fill.style.width = width;
                observer.unobserve(fill);
            }
        });
    },
        {
            threshold: 0.5, // Trigger when 50% is visible
        }
    );

    fills.forEach(fill => observer.observe(fill));
});
