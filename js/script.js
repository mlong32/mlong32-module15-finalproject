// GreenTech Solutions JavaScript

document.addEventListener("DOMContentLoaded", function () {

    console.log("GreenTech Solutions website loaded.");

    // Homepage button alert
    const exploreButton = document.querySelector(".btn");

    if (exploreButton && exploreButton.textContent.includes("Explore")) {
        exploreButton.addEventListener("click", function () {
            alert("Explore GreenTech's sustainable products and services!");
        });
    }

    // Contact Form Validation
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {

                alert("Please fill out all fields.");

            } else {

                alert("Thank you for contacting GreenTech Solutions!");

                contactForm.reset();
            }

        });

    }

});