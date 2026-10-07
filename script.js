/* =========================
   SCROLL REVEAL
========================= */

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.12
    }
);


elements.forEach((element) => {

    observer.observe(element);

});


/* =========================
   HERO LOAD ANIMATION
========================= */

window.addEventListener("load", () => {

    const heroElements =
        document.querySelectorAll(".hero .reveal");

    heroElements.forEach((element, index) => {

        setTimeout(() => {

            element.classList.add("show");

        }, index * 200);

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section[id]");

const links =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const top =
            section.offsetTop - 160;

        const height =
            section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < top + height
        ) {

            current =
                section.getAttribute("id");

        }

    });


    links.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});