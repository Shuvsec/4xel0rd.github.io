// Example JavaScript for adding interactivity
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    // Add active class to the clicked link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
});
