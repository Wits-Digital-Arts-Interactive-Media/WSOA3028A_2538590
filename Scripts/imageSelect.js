function showSlide(slideId, slideIndex) { //This function uses the specific slide id and index, to display the respective image
    const slides = document.querySelectorAll(`#${slideId} img`); //selects all the images inside the 
    for (let i = 0; i < slides.length; i++) { //loops through the images
        slides[i].style.display = i === slideIndex ? 'block' : 'none'; // If the current slide index matches the specific slide Index, it displays it, or hides it.
    }
}

function next(slideId) { //displays the next image in the slide show
    const slides = document.querySelectorAll(`#${slideId} img`);
    let currentSlide = getCurrentSlideIndex(slides);
    currentSlide = (currentSlide + 1) % slides.length; //
    showSlide(slideId, currentSlide); //displays the next slide
}

function previous(slideId) {
    const slides = document.querySelectorAll(`#${slideId} img`);
    let currentSlide = getCurrentSlideIndex(slides);
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(slideId, currentSlide); //displays the previous slide
}

function getCurrentSlideIndex(slides) {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].style.display === 'block') {
            return i;
        }
    }
    return 0; //it goes back to the first slide if no other slide is displayed 
}

showSlide('graphicSlide', 0); //the slide for the graphic design images, which starts with index = "0"
showSlide('interiorSlide', 0); //the slide for the interior design images, which starts with index = "0"
