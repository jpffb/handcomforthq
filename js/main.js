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

const reviews = [
    {
        title: "Logitech MX Vertical",
        image: "https://images.unsplash.com/photo-1588670319611-703f83050f8d?w=400",
        rating: 4.5,
        price: "$99.99",
        affiliateLink: "https://www.amazon.com/dp/B07V79R5QD"
    },
    {
        title: "Microsoft Sculpt Ergonomic",
        image: "https://images.unsplash.com/photo-1590105508594-00f273b0f91a?w=400",
        rating: 4.2,
        price: "$79.99",
        affiliateLink: "https://www.amazon.com/dp/B00D7Q92N0"
    },
    {
        title: "Anker Vertical Mouse",
        image: "https://images.unsplash.com/photo-1588670319611-703f83050f8d?w=400",
        rating: 4.4,
        price: "$49.99",
        affiliateLink: "https://www.amazon.com/dp/B085575YD4"
    },
    {
        title: "Ergodox EZ Keyboard",
        image: "https://images.unsplash.com/photo-1590105508594-00f273b0f91a?w=400",
        rating: 4.8,
        price: "$299.99",
        affiliateLink: "https://www.amazon.com/dp/B08KQ22ZB7"
    },
    {
        title: "Wrist Rest Pad",
        image: "https://images.unsplash.com/photo-1588670319611-703f83050f8d?w=400",
        rating: 4.7,
        price: "$24.99",
        affiliateLink: "https://www.amazon.com/dp/B0844K676R"
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
