// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('show');
            
            // Change hamburger icon
            if (nav.classList.contains('show')) {
                hamburger.innerHTML = '✕'; // X icon when open
            } else {
                hamburger.innerHTML = '☰'; // Hamburger icon when closed
            }
        });
        
        // Close menu when clicking outside (mobile only)
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768 && 
                nav.classList.contains('show') && 
                !event.target.closest('nav') && 
                !event.target.closest('.hamburger')) {
                nav.classList.remove('show');
                hamburger.innerHTML = '☰'; // Reset icon
            }
        });
        
        // Close menu when clicking a link (mobile only)
        nav.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && e.target.tagName === 'A') {
                nav.classList.remove('show');
                hamburger.innerHTML = '☰'; // Reset icon
            }
        });
        
        // Close menu on escape key (mobile only)
        document.addEventListener('keydown', function(e) {
            if (window.innerWidth <= 768 && 
                e.key === 'Escape' && 
                nav.classList.contains('show')) {
                nav.classList.remove('show');
                hamburger.innerHTML = '☰'; // Reset icon
            }
        });
    }
});