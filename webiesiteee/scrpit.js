// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
    <script>
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('show');
});
</script>
});

// Scroll to contact section
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Simulate form submissionz
    const status = document.getElementById('formStatus');
    status.textContent = 'Sending message...';
    status.style.color = '#3498db';
    
    setTimeout(() => {
        status.textContent = 'Thank you! We will contact you soon.';
        status.style.color = '#27ae60';
        document.getElementById('contactForm').reset();
    }, 1500);
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
    } else {
        header.style.background = '#2c3e50';
    }
});
function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}
