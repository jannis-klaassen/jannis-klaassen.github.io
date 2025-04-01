function navigate(offset) {
    let projects = document.querySelectorAll(".project");
    let newIndex = getCurrentIndex(projects) + offset;

    // Handle boundaries
    if (newIndex < 0) {
        newIndex = projects.length - 1; // Wrap around to the last project
    } else if (newIndex >= projects.length) {
        newIndex = 0; // Wrap around to the first project
    }

    projects.forEach(project => project.classList.add("hidden"));
    projects[newIndex].classList.remove("hidden");
};


function getCurrentIndex(projects) {
    for (let i = 0; i < projects.length; i++) {
        if (!projects[i].classList.contains("hidden")) {
            currentIndex = i;
            return i;
        }
    }
}
