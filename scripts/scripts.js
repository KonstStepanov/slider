let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector(".slider__container_slides");
    const totalSlides = document.querySelectorAll(".slider__container_slides_item").length;
    const descriptions = document.querySelectorAll(".slider__container_photo-container_description");
    const dots = document.querySelectorAll(".slider__container_nav-controls_dots_item");
    const cityText = document.querySelector(".city");
    const repairTypeText = document.querySelector(".repair-type");
    const apartmentAreaText = document.querySelector(".apartment-area");

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.style.transform = `translateX(${-currentIndex * 100}%)`;

    descriptions.forEach((desc, i) => {
        desc.classList.toggle("active", i === currentIndex);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });

    const slidesData = [
        {city: "Rostov-on-Don LCD admiral", repairType: "3.5 months", area: "81 m2"},
        {city: "Sochi Thieves", repairType: "4 months", area: "105 m2"},
        {city: "Rostov-on-Don Patriotic", repairType: "3 months", area: "93 m2"}
    ];

    cityText.textContent = slidesData[currentIndex].city;
    repairTypeText.textContent = slidesData[currentIndex].repairType;
    apartmentAreaText.textContent = slidesData[currentIndex].area;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}
