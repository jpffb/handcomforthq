// Navbar scroll effect (hides on scroll down, shows on scroll up)
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.top = "0";
            return;
        }
        
        if (currentScroll > lastScroll) {
            // Scrolling down
            navbar.style.top = "-100px";
        } else {
            // Scrolling up
            navbar.style.top = "0";
        }
        
        lastScroll = currentScroll;
    });
}

// No smooth scrolling - all navigation will be handled by default browser behavior
