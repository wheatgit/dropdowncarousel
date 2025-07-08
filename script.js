// Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    // Toggle dropdown when button is clicked
    dropdownBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-btn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
    
    // Handle dropdown item clicks
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Selected:', this.textContent);
            dropdownContent.classList.remove('show');
        });
    });
});
