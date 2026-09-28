/* =====================================================
   BURla HEMA SIREESHA PORTFOLIO
   JAVASCRIPT
   ===================================================== */


/* =====================================================
   LOADING SCREEN
   ===================================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.classList.add("hide");

    }, 700);

});


/* =====================================================
   MOBILE MENU
   ===================================================== */

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");


if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");


        const icon = menuBtn.querySelector("i");


        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

}


/* =====================================================
   CLOSE MOBILE MENU WHEN CLICKING LINK
   ===================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");


        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   TYPING EFFECT
   ===================================================== */

const typingElement = document.querySelector(".typing-text");


const typingWords = [
    "with code.",
    "with creativity.",
    "with AI.",
    "for real problems."
];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    if (!typingElement) {
        return;
    }


    const currentWord =
        typingWords[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1300
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex ===
                typingWords.length
            ) {

                wordIndex = 0;

            }

        }

    }


    const speed =
        deleting ? 55 : 90;


    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();


/* =====================================================
   SCROLL REVEAL ANIMATION
   ===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    function (element) {

        revealObserver.observe(
            element
        );

    }
);


/* =====================================================
   BACK TO TOP BUTTON
   ===================================================== */

const backTop =
    document.getElementById("backTop");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }
);


backTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =====================================================
   ACTIVE NAVIGATION
   ===================================================== */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener(
    "scroll",
    function () {

        let current = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >=
                    sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    current =
                        section.getAttribute("id");

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active-link"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) === "#" + current
                ) {

                    link.classList.add(
                        "active-link"
                    );

                }

            }
        );

    }
);


/* =====================================================
   UPDATE COPYRIGHT YEAR
   ===================================================== */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =====================================================
   PROJECT CARD HOVER EFFECT
   ===================================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(
    function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    (y - centerY) / 35;


                const rotateY =
                    (centerX - x) / 35;


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "";

            }
        );

    }
);


/* =====================================================
   SMOOTH ANCHOR SCROLL
   ===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    function (anchor) {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    }
);


/* =====================================================
   CONSOLE MESSAGE
   ===================================================== */

console.log(
    "Welcome to Burla Hema Sireesha's Portfolio 🚀"
);

console.log(
    "AI Student Chatbot:",
    "https://ai-student-chatbot-8clu.onrender.com/"
);