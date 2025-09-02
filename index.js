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

/*const shop = document.getElementById('shop-btn');
shop.addEventListener("click", function() {
    // Provide immediate feedback to the user.
    shop.disabled = true; // Disable the button to prevent multiple clicks
    shop.textContent = 'Opening Shop...'; // Change the button text
    setTimeout(function() {
        window.open("app/shop/shop.html", "_self");
        // Optionally, restore the button's state after the action.
        shop.disabled = false;
        shop.textContent = 'Shop';
    }, 5000);
});*/

//navigation link active state delay
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const destiNation = this.getAttribute('href');
        setTimeout(() => {
            window.location.href = destiNation;
        }, 100); // Delay of 100 milliseconds
    });
});

// seller button
const sellerBtn = document.getElementById('seller-btn');
sellerBtn.addEventListener("click", function() {
    // Provide immediate feedback to the user.
    sellerBtn.disabled = true; // Disable the button to prevent multiple clicks
    sellerBtn.textContent = 'Opening Seller...'; // Change the button text
    setTimeout(function() {
        window.open("../seller-dashboard/index.html", "_self");
    }, 500);
});