'use strict';
// index.js GARRY😎
document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('slider');
    const dotsContainer = document.getElementById('slider-dots');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = dots.length;
    let currentSlideIndex = 0;

    function showSlide(index) {
        // Ensure the index is within the bounds
        currentSlideIndex = (index + totalSlides) % totalSlides;
        
        // Use CSS transform to smoothly slide the container
        sliderContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

        // Update the active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlideIndex].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlideIndex + 1);
    }

    // Add click event listeners to the dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Auto-play functionality
    let sliderInterval = setInterval(nextSlide, 5000);

    // Optional: Pause auto-play on hover
    sliderContainer.addEventListener('mouseover', () => clearInterval(sliderInterval));
    sliderContainer.addEventListener('mouseout', () => sliderInterval = setInterval(nextSlide, 5000));

    // Initialize the slider
    showSlide(currentSlideIndex);
});