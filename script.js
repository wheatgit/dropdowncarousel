// Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdowns on the page
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Loop through each dropdown and set it up
    dropdowns.forEach(dropdown => {
        const dropdownBtn = dropdown.querySelector('.dropdown-btn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
        
        // Toggle dropdown when button is clicked
        dropdownBtn.addEventListener('click', function() {
            dropdownContent.classList.toggle('show');
        });
        
        // Handle dropdown item clicks for this specific dropdown
        dropdownItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Selected:', this.textContent);

                if (this.textContent === 'Calculator') {
                    window.open('https://wheatgit.github.io/calculator/', '_blank');
                }
                if (this.textContent === 'TicTacToe') {
                    window.open('https://wheatgit.github.io/tictactoe/', '_blank');
                }
                if (this.textContent === 'Etch-a-Sketch') {
                    window.open('https://wheatgit.github.io/etch-a-sketch/', '_blank');
                }
                if (this.textContent === 'Library') {
                    window.open('https://wheatgit.github.io/library/', '_blank');
                }
                if (this.textContent === 'Signup Form') {
                    window.open('https://wheatgit.github.io/signupform/', '_blank');
                }
                if (this.textContent === 'Todo List') {
                    window.open('https://wheatgit.github.io/todolist/', '_blank');
                }
                if (this.textContent === 'Restaurant') {
                    window.open('https://wheatgit.github.io/restaurantpage/', '_blank');
                }
                if (this.textContent === 'Library') {
                    window.open('https://wheatgit.github.io/library/', '_blank');
                }
                if (this.textContent === 'Admin Dashboard') {
                    window.open('https://wheatgit.github.io/admindashboard/', '_blank');
                }
                if (this.textContent === 'Rock Paper Scissors') {
                    window.open('https://wheatgit.github.io/rockpaperscissors/', '_blank');
                }
            });
        });
    });
    
    // Close dropdowns when clicking outside (works for all dropdowns)
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-btn')) {
            const allDropdowns = document.querySelectorAll('.dropdown-content');
            allDropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });
});

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentSlide = 0;

    // Function to show a specific slide
    function showSlide(index) {
        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        
        // Slide to the correct position
        const carousel = document.querySelector('.carousel');
        const slideWidth = 100 / slides.length; // 16.666% for 6 slides
        const translateX = -(index * slideWidth);
        carousel.style.transform = `translateX(${translateX}%)`;
        
        currentSlide = index;
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners for navigation buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
});
