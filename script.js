const cards = document.querySelectorAll(".skill-card");

let current = 0;

function updateSlider() {

    cards.forEach(card => {
        card.classList.remove("prev", "active", "next");
    });

    let prev = (current - 1 + cards.length) % cards.length;
    let next = (current + 1) % cards.length;

    cards[prev].classList.add("prev");
    cards[current].classList.add("active");
    cards[next].classList.add("next");
}

updateSlider();

setInterval(() => {
    current = (current + 1) % cards.length;
    updateSlider();
}, 2500);




// ================= PROJECT IMAGE SLIDER =================

const projectSliders = document.querySelectorAll(".project-image-slider");


projectSliders.forEach(slider => {

    const images = slider.querySelectorAll(".project-img");

    let currentIndex = 0;


    // If only one image exists, no need for slider
    if(images.length <= 1){
        return;
    }


    setInterval(() => {


        // Remove active from current image

        images[currentIndex].classList.remove("active");


        // Move to next image

        currentIndex++;


        // If reached last image, go back to first

        if(currentIndex >= images.length){

            currentIndex = 0;

        }


        // Add active to next image

        images[currentIndex].classList.add("active");


    }, 3000);


});

// ================= IMAGE FULL VIEW =================


const projectImages = document.querySelectorAll(".project-img");

const imageModal = document.querySelector(".image-modal");

const modalImage = document.querySelector(".modal-image");

const closeModal = document.querySelector(".close-modal");



projectImages.forEach(img => {


    img.addEventListener("click",()=>{


        imageModal.classList.add("active");

        modalImage.src = img.src;


    });


});



closeModal.addEventListener("click",()=>{


    imageModal.classList.remove("active");


});



imageModal.addEventListener("click",(e)=>{


    if(e.target === imageModal){

        imageModal.classList.remove("active");

    }


});

// ================= NAVBAR ACTIVE SECTION =================





// ================= ACTIVE NAVBAR =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-right .a-element");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");
        }

    });

    console.log(current);

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


const menuIcon = document.querySelector(".menu-icon");
const navRight = document.querySelector(".nav-right");

if(menuIcon){
    menuIcon.addEventListener("click", () => {
        navRight.classList.toggle("active");
    });
}