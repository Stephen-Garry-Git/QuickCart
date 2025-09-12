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

// See more button with spinner
const shop = document.getElementById('shop-btn');
shop.addEventListener("click", function() {
    // Get the text and spinner elements
    const btnText = shop.querySelector('.btn-text');
    const spinner = shop.querySelector('.spinner');
    
    // Provide immediate feedback
    shop.disabled = true;
    spinner.classList.remove('hidden'); // Show spinner
    
    setTimeout(function() {
        window.open("app/shop/shop.html", "_self");
        // Note: The code below won't run due to page navigation
        shop.disabled = false;
        btnText.textContent = 'Shop';
        spinner.classList.add('hidden');
    }, 2000);
});

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

// seller button with spinner
const sellerBtn = document.getElementById('seller-btn');
sellerBtn.addEventListener("click", function() {
    // Get the text and spinner elements
    const btnText = sellerBtn.querySelector('.btn-text');
    const spinner = sellerBtn.querySelector('.spinner');
    
    // Provide immediate feedback
    sellerBtn.disabled = true;
    spinner.classList.remove('hidden'); // Show spinner
    
    setTimeout(function() {
        window.open("app/seller-dashboard/seller.html", "_self");
        // Note: The code below won't run due to page navigation
        sellerBtn.disabled = false;
        btnText.textContent = 'Seller Dashboard';
        spinner.classList.add('hidden');
    }, 2000);
});

// Modal functionality for "Account" link
// Get the modal and the close button
const modalOverlay = document.getElementById('modal-overlay');
const closeBtn = document.querySelector('.close-button');

// Function to hide the modal
function hideModal() {
    modalOverlay.style.display = 'none';
}

// Add the event listener to the close button
if (closeBtn) {
    closeBtn.addEventListener('click', hideModal);
}

// Get the "Account" button from your navbar
const accountBtn = document.getElementById('account-btn');

// Function to show the modal
function showModal() {
    modalOverlay.style.display = 'flex'; // Use flex to center the content
}

// Add the event listener to the "Account" button
if (accountBtn) {
    accountBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents any default action of the button
        showModal();
    });
}