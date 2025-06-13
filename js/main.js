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
        title: "Logitech Wave Keys Wireless Ergonomic Keyboard",
        image: "https://m.media-amazon.com/images/I/71k3fJh6WVL._AC_SL1500_.jpg", // Will update with correct image URL
        rating: 4.6,
        price: "£49.99",
        description: "Wireless Ergonomic Keyboard with Cushioned Palm Rest, Comfortable Natural Typing, Easy-Switch, Bluetooth, Logi Bolt Receiver, for Multi-OS, Windows/Mac, UK English QWERTY - Graphite",
        features: [
            "Wave Design: Contoured keyframe with curved key rows follows the natural shape of your fingertips",
            "Cushioned Palm Rest: Integrated palm rest provides comfortable support for your hands and wrists",
            "Wireless Connectivity: Connect via Bluetooth or Logi Bolt USB receiver with Easy-Switch between up to 3 devices",
            "Multi-Device: Works with Windows, macOS, iPadOS, Chrome OS, and Linux (Bluetooth 5.1 required)",
            "Long Battery Life: Up to 3 years of battery life with standard AA batteries (may vary based on usage)"
        ],
        affiliateLink: "https://amzn.to/4l7OFeo"
    },
    {
        title: "Wrist Support for Office & Gaming",
        image: "https://m.media-amazon.com/images/I/71k3fJh6WVL._AC_SL1500_.jpg",
        rating: 4.4,
        price: "£9.99",
        description: "Ergonomic Wrist Rest Support for Office Workers and Gamers - Memory Foam Padding - Non-Slip Base - Comfortable for Long Hours of Use",
        features: [
            "Ergonomic Design: Provides optimal support to reduce wrist strain during long hours of computer use",
            "Premium Memory Foam: High-density foam offers superior comfort and retains its shape over time",
            "Breathable Fabric: Soft, breathable material keeps your wrists cool and comfortable",
            "Non-Slip Base: Stays firmly in place during use, preventing unwanted movement",
            "Versatile Use: Perfect for office work, gaming, programming, and other computer-based activities"
        ],
        affiliateLink: "https://amzn.to/43Pro9K"
    },
    {
        title: "Logitech MX Master 3S",
        image: "/images/logitech-mx-master-3s.jpg",
        rating: 4.2,
        price: "£39.99",
        description: "Wireless Performance Mouse with Ultra-fast Scrolling, Ergonomic Design, 8K DPI, Customizable Buttons, USB-C, Bluetooth, 3-Device Control, Compatible with Windows, macOS, iPadOS - Graphite",
        features: [
            "MagSpeed™ Electromagnetic Scrolling: Ultra-fast 1,000 fps, 90% less noise, and precise stop on click",
            "8K DPI Optical Sensor: Ultra-precise tracking on virtually any surface, even glass (4mm thickness)",
            "Ergonomic Design: Perfectly sculpted shape and thumb rest for maximum comfort",
            "Multi-Device & Multi-OS: Connect up to 3 devices simultaneously via Bluetooth or the included USB receiver",
            "Customizable Buttons & Gestures: 7 buttons and a gesture button for personalized control"
        ],
        affiliateLink: "https://amzn.to/4jSqcbZ"
    },
    {
        title: "Microsoft Sculpt Ergonomic",
        image: "https://picsum.photos/id/24/800/600",
        rating: 4.2,
        price: "£69.99",
        description: "Split keyboard with natural arc design for comfortable typing",
        affiliateLink: "https://www.amazon.co.uk/Microsoft-5KV-00015-Sculpt-Ergonomic-Desktop/dp/B00D7DHD9U/"
    },
    {
        title: "Anker Vertical Mouse",
        image: "https://picsum.photos/id/40/800/600",
        rating: 4.4,
        price: "£39.99",
        description: "Affordable vertical mouse with adjustable DPI settings",
        affiliateLink: "https://www.amazon.co.uk/Anker-Vertical-Ergonomic-Optical-Comfortable/dp/B07FNJ3PZJ/"
    },
    {
        title: "Perixx PERIMICE-712",
        image: "https://picsum.photos/id/48/800/600",
        rating: 4.6,
        price: "£24.99",
        description: "Ergonomic vertical mouse designed to reduce wrist strain",
        affiliateLink: "https://www.amazon.co.uk/Perixx-PERIMICE-712-Wireless-Ergonomic-Programmable/dp/B00BIFNTMC/"
    },
    {
        title: "Gel Wrist Rest Pad",
        image: "https://picsum.photos/id/60/800/600",
        rating: 4.7,
        price: "£19.99",
        description: "Memory foam wrist rest with breathable fabric cover",
        affiliateLink: "https://www.amazon.co.uk/Ergonomic-Keyboard-Computer-Notebooks-Anti-Slip/dp/B07P5HSTP5/"
    }
];

// Function to create review cards
function createReviewCard(review) {
    return `
        <article class="review-card">
            <div class="review-image-container">
                <img src="${review.image}" alt="${review.title}" class="review-image" loading="lazy">
            </div>
            <div class="review-content">
                <h3>${review.title}</h3>
                <div class="review-meta">
                    <div class="review-rating">
                        ${'★'.repeat(Math.floor(review.rating))}${review.rating % 1 ? '☆' : ''}
                        <span class="rating-text">${review.rating}/5.0</span>
                    </div>
                    <div class="review-price">${review.price}</div>
                </div>
                <p class="review-description">${review.description}</p>
                ${review.features ? `
                    <div class="product-features">
                        <h4>Key Features:</h4>
                        <ul>
                            ${review.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                <a href="${review.affiliateLink}" target="_blank" rel="noopener noreferrer" class="review-button">
                    View on Amazon <span class="button-arrow">→</span>
                </a>
            </div>
        </article>
    `;
}

// Populate review grid
reviews.forEach(review => {
    reviewGrid.innerHTML += createReviewCard(review);
});
