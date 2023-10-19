
let slideIndex = 0;

function showSlides() {                                             //image slideshow with timer set to 3s
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 3000); 
    slideIndex++;
}


showSlides();
