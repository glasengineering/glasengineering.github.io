const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".navbar-link");
const navbarOffsetTop = navbar.offsetTop;

const sections = document.querySelectorAll("section");

const updateNavBar = () => {
    if (window.scrollY >= navbarOffsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

    sections.forEach((section, i) => {
        if (window.scrollY > section.offsetTop - 10) {
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.remove("change");
            });
            navbarLinks[i].classList.add("change");
        }
    });
};

updateNavBar();

window.addEventListener("scroll", () => {
    updateNavBar();
});