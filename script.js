// Initialize Lucide icons
lucide.createIcons();

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileCloseBtn = document.getElementById('mobile-close-btn');

// Add click listener to the button (using the icon inside can sometimes cause issues if not targeting button)
mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent immediate closing
    openMobileMenu();
});

mobileCloseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeMobileMenu();
});

function openMobileMenu() {
    mobileMenu.style.opacity = '1';
    mobileMenu.style.pointerEvents = 'auto';
    mobileMenu.style.transform = 'translateY(0)';
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.style.opacity = '0';
    mobileMenu.style.pointerEvents = 'none';
    mobileMenu.style.transform = 'translateY(10px)';
    document.body.style.overflow = 'auto';
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

// Sticky Navbar Background
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-black/30', 'backdrop-blur-md', 'border-b', 'border-white/10', 'shadow-lg');
        navbar.classList.remove('py-6');
        navbar.classList.add('py-4');
    } else {
        navbar.classList.remove('bg-black/30', 'backdrop-blur-md', 'border-b', 'border-white/10', 'shadow-lg');
        navbar.classList.remove('py-4');
        navbar.classList.add('py-6');
    }
});

// Fade In Animation on Scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
});

// Lightbox Functions
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(src) {
    lightbox.style.display = 'flex';
    // Use setTimeout to allow display:flex to apply before adding opacity for transition if we wanted one, 
    // but for now simple display toggle is fine.
    lightboxImg.src = src;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Handle RSVP Form Submission
function handleRSVP(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const guests = document.getElementById('guests').value;
    const message = document.getElementById('message').value;
    
    // Construct WhatsApp Message
    const phoneNumber = "2349060648837"; // Primary RSVP contact
    let text = `Hello, my name is *${name}*.\nI will be attending the Amen Wonder & John Wedding with *${guests} guest(s)*.\nMy phone number is: ${phone}`;
    
    if (message) {
        text += `\nMessage: ${message}`;
    }
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
}

// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date("March 20, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "<div class='text-4xl md:text-6xl font-serif text-white'>It's Our Wedding Day!</div>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Add leading zeros
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
