
// Typing effect when scrolling to the About section
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#about");
    const heading = document.querySelector(".typing-heading");

    if (!aboutSection || !heading) return;

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    heading.classList.add("start-typing");

                    // Run the typing effect only once
                    observer.unobserve(aboutSection);
                }
            });
        },
        {
            threshold: 0.3
        }
    );

    observer.observe(aboutSection);
});
