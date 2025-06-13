// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll effect to navbar
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

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

// Add dynamic content loading for reviews
const reviewGrid = document.querySelector('.review-grid');

// Sample review data (replace with actual data later)
const reviews = [
    {
        title: "Logitech MX Vertical Review",
        image: "images/mx-vertical.jpg",
        rating: 4.5,
        price: "$99.99",
        affiliateLink: "#"
    },
    {
        title: "Microsoft Sculpt Ergonomic Review",
        image: "images/sculpt.jpg",
        rating: 4.2,
        price: "$79.99",
        affiliateLink: "#"
    },
    {
        title: "Anker Vertical Mouse Review",
        image: "images/anker.jpg",
        rating: 4.4,
        price: "$49.99",
        affiliateLink: "#"
    }
];

// Function to create review cards
function createReviewCard(review) {
    return `
        <article class="review-card">
            <img src="${review.image}" alt="${review.title}" class="review-image">
            <h3>${review.title}</h3>
            <div class="review-rating">
                ${'★'.repeat(Math.floor(review.rating))}
                ${review.rating % 1 ? '☆' : ''}
            </div>
            <p class="review-price">${review.price}</p>
            <a href="${review.affiliateLink}" class="review-button">Read Review</a>
        </article>
    `;
}

// Populate review grid
reviews.forEach(review => {
    reviewGrid.innerHTML += createReviewCard(review);
});
