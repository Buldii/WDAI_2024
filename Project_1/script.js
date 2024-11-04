let homeButton = document.querySelector(".logo");
let contactButton = document.getElementById("Contact-button");
let galleryButton = document.getElementById("Gallery-button");

let homeContent = document.getElementById("home-main-content");
let contactContent = document.getElementById("contact-main-content");
let galleryContent = document.getElementById("gallery-main-content");

contactContent.style.display = "none";
galleryContent.style.display = "none";

let currentMainContent = homeContent;

homeButton.addEventListener("click", () => {
    if (currentMainContent != homeContent) {
        currentMainContent.style.display = "none";
        homeContent.style.display = "flex";
        currentMainContent = homeContent;
    }
});

contactButton.addEventListener("click", () => {
    if (currentMainContent != contactContent) {
        currentMainContent.style.display = "none";
        contactContent.style.display = "flex";
        currentMainContent = contactContent;
    }
});

galleryButton.addEventListener("click", () => {
    if (currentMainContent != galleryContent) {
        currentMainContent.style.display = "none";
        galleryContent.style.display = "grid";
        currentMainContent = galleryContent;
    }
});
