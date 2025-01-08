document.addEventListener('DOMContentLoaded', () => {
    // Typing animation
    const typed = new Typed('#typed-output', {
        strings: ['Web Developer', 'Student', 'Gamer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
});
// Add this to your main JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});



