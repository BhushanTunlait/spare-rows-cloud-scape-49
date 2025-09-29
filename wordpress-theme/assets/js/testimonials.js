/**
 * Testimonials Slider JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('testimonials-slider');
    if (!slider) return;

    const testimonialCards = slider.querySelectorAll('.testimonial-card');
    const dotsContainer = document.getElementById('testimonial-dots');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    
    let currentIndex = 0;
    let autoAdvanceInterval;
    
    // Create dots
    function createDots() {
        if (!dotsContainer) return;
        
        dotsContainer.innerHTML = '';
        testimonialCards.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'testimonial-dot';
            dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }
    
    // Update slider
    function updateSlider() {
        testimonialCards.forEach((card, index) => {
            card.style.display = 'none';
            card.classList.remove('featured');
        });
        
        // Show testimonials based on screen size
        const isDesktop = window.innerWidth >= 1024;
        
        if (isDesktop) {
            // Desktop: show 3 cards
            for (let i = 0; i < Math.min(3, testimonialCards.length); i++) {
                const cardIndex = (currentIndex + i) % testimonialCards.length;
                const card = testimonialCards[cardIndex];
                card.style.display = 'block';
                
                if (i === 1) { // Middle card is featured
                    card.classList.add('featured');
                }
            }
        } else {
            // Mobile/Tablet: show 1 card
            if (testimonialCards[currentIndex]) {
                testimonialCards[currentIndex].style.display = 'block';
                testimonialCards[currentIndex].classList.add('featured');
            }
        }
        
        // Update dots
        const dots = dotsContainer?.querySelectorAll('.testimonial-dot');
        if (dots) {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        resetAutoAdvance();
    }
    
    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        updateSlider();
    }
    
    // Previous slide
    function prevSlide() {
        currentIndex = currentIndex === 0 ? testimonialCards.length - 1 : currentIndex - 1;
        updateSlider();
    }
    
    // Auto advance
    function startAutoAdvance() {
        autoAdvanceInterval = setInterval(nextSlide, 6000);
    }
    
    function stopAutoAdvance() {
        if (autoAdvanceInterval) {
            clearInterval(autoAdvanceInterval);
        }
    }
    
    function resetAutoAdvance() {
        stopAutoAdvance();
        startAutoAdvance();
    }
    
    // Event listeners
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            nextSlide();
            resetAutoAdvance();
        });
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            prevSlide();
            resetAutoAdvance();
        });
    }
    
    // Handle window resize
    window.addEventListener('resize', updateSlider);
    
    // Pause auto-advance on hover
    slider.addEventListener('mouseenter', stopAutoAdvance);
    slider.addEventListener('mouseleave', startAutoAdvance);
    
    // Initialize
    if (testimonialCards.length > 0) {
        createDots();
        updateSlider();
        startAutoAdvance();
    }
});