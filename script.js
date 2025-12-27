// Product Data
const products = [
    {
        id: 1,
        name: "Aviator Classic",
        category: "unisex",
        image: "Images/Glasses images/freepik__design-editorial-soft-studio-light-photography-hig__91242.png",
        rating: 4.8,
        reviews: 324,
        isBestSeller: true,
        isNewArrival: false,
        features: ["UV400 Protection", "Lightweight Frame", "Polarized Lenses", "Metal Frame"]
    },
    {
        id: 2,
        name: "Retro Round",
        category: "women",
        image: "Images/Glasses images/freepik__design-editorial-soft-studio-light-photography-hig__91243.png",
        rating: 4.9,
        reviews: 512,
        isBestSeller: true,
        isNewArrival: false,
        features: ["UV400 Protection", "Acetate Frame", "Polarized Lenses", "Vintage Style"]
    },
    {
        id: 3,
        name: "Sport Pro",
        category: "men",
        image: "Images/Glasses images/glasses-with-slightly-rounded-frame.jpg",
        rating: 4.7,
        reviews: 287,
        isBestSeller: true,
        isNewArrival: false,
        features: ["UV400 Protection", "Shatterproof Lenses", "Grip Technology", "Sport Frame"]
    },
    {
        id: 4,
        name: "Cat Eye Elegance",
        category: "women",
        image: "Images/Glasses images/sunglasses.jpg",
        rating: 4.9,
        reviews: 456,
        isBestSeller: false,
        isNewArrival: true,
        features: ["UV400 Protection", "Acetate Frame", "Gradient Lenses", "Fashion Forward"]
    },
    {
        id: 5,
        name: "Wayfarer Modern",
        category: "unisex",
        image: "Images/Glasses images/top-view-modern-blue-sunglasses-grey-background-isolated-vision-spectacles-elegance.jpg",
        rating: 4.6,
        reviews: 389,
        isBestSeller: true,
        isNewArrival: false,
        features: ["UV400 Protection", "Acetate Frame", "Classic Style", "Comfortable Fit"]
    },
    {
        id: 6,
        name: "Bold Square",
        category: "men",
        image: "Images/Glasses images/freepik__design-editorial-soft-studio-light-photography-hig__91242.png",
        rating: 4.7,
        reviews: 234,
        isBestSeller: false,
        isNewArrival: true,
        features: ["UV400 Protection", "Metal Frame", "Polarized Lenses", "Bold Design"]
    },
    {
        id: 7,
        name: "Oval Vintage",
        category: "women",
        image: "Images/Glasses images/freepik__design-editorial-soft-studio-light-photography-hig__91243.png",
        rating: 4.8,
        reviews: 298,
        isBestSeller: false,
        isNewArrival: false,
        features: ["UV400 Protection", "Acetate Frame", "Retro Style", "Lightweight"]
    },
    {
        id: 8,
        name: "Tech Shield",
        category: "unisex",
        image: "Images/Glasses images/glasses-with-slightly-rounded-frame.jpg",
        rating: 4.9,
        reviews: 412,
        isBestSeller: true,
        isNewArrival: true,
        features: ["UV400 Protection", "Blue Light Filter", "Anti-Reflective", "Tech Frame"]
    },
    {
        id: 9,
        name: "Minimalist Edge",
        category: "men",
        image: "Images/Glasses images/sunglasses.jpg",
        rating: 4.5,
        reviews: 156,
        isBestSeller: false,
        isNewArrival: false,
        features: ["UV400 Protection", "Titanium Frame", "Ultra Lightweight", "Minimal Design"]
    },
    {
        id: 10,
        name: "Glossy Glam",
        category: "women",
        image: "Images/Glasses images/top-view-modern-blue-sunglasses-grey-background-isolated-vision-spectacles-elegance.jpg",
        rating: 4.8,
        reviews: 367,
        isBestSeller: false,
        isNewArrival: true,
        features: ["UV400 Protection", "Glossy Finish", "Polarized Lenses", "Fashion Statement"]
    },
    {
        id: 11,
        name: "Urban Explorer",
        category: "unisex",
        image: "Images/Glasses images/freepik__design-editorial-soft-studio-light-photography-hig__91242.png",
        rating: 4.7,
        reviews: 445,
        isBestSeller: true,
        isNewArrival: false,
        features: ["UV400 Protection", "Durable Frame", "Adventure Ready", "Versatile Style"]
    },
    {
        id: 12,
        name: "Designer Edge",
        category: "men",
        image: "Images/Glasses images/freepik__design-editorial-soft-studio-light-photography-hig__91243.png",
        rating: 4.9,
        reviews: 523,
        isBestSeller: true,
        isNewArrival: true,
        features: ["UV400 Protection", "Premium Materials", "Luxury Finish", "Signature Design"]
    }
];

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const bestsellersSlider = document.querySelector('.slider-slides');
const categoryFilters = document.querySelectorAll('.filter-btn');
const quickViewModal = document.getElementById('quick-view-modal');
const modalClose = document.querySelector('.modal-close');
const heroDots = document.querySelectorAll('.hero-dots .dot');
const sliderPrevBtn = document.querySelector('.slider-btn-prev');
const sliderNextBtn = document.querySelector('.slider-btn-next');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');
const newsletterForm = document.querySelector('.newsletter-form');
const bookExamBtn = document.getElementById('book-exam-btn');
const bookingModal = document.getElementById('booking-modal');
const bookingForm = document.getElementById('booking-form');
const bookingModalClose = document.querySelector('.booking-modal-close');

// Current state
let currentCategory = 'all';
let currentHeroSlide = 0;
let currentBestsellerIndex = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderBestsellers();
    setupEventListeners();
    startHeroSlider();
});

// Render Products
function renderProducts(filteredProducts = null) {
    const productsToRender = filteredProducts || products;
    productsGrid.innerHTML = '';

    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.isBestSeller ? '<span class="product-badge">Best Seller</span>' : ''}
            ${product.isNewArrival ? '<span class="product-badge">New</span>' : ''}
        </div>
        <div class="product-info">
            <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                <span class="rating-count">(${product.reviews})</span>
            </div>
            <div class="product-actions">
                <button class="btn btn-primary quick-view" data-id="${product.id}">Quick View</button>
            </div>
        </div>
    `;
    
    // Add event listeners
    card.querySelector('.quick-view').addEventListener('click', (e) => {
        e.stopPropagation();
        showQuickView(product.id);
    });
    
    return card;
}

// Render Best Sellers
function renderBestsellers() {
    const bestsellers = products.filter(p => p.isBestSeller);
    bestsellersSlider.innerHTML = '';
    
    bestsellers.forEach(product => {
        const card = createProductCard(product);
        card.style.minWidth = '280px';
        bestsellersSlider.appendChild(card);
    });
    
    updateBestsellerSlider();
}

// Update Best Seller Slider Position
function updateBestsellerSlider() {
    const slideWidth = 280 + 32; // card width + gap
    const maxIndex = Math.max(0, products.filter(p => p.isBestSeller).length - 3);
    const clampedIndex = Math.min(currentBestsellerIndex, maxIndex);
    currentBestsellerIndex = clampedIndex;
    
    bestsellersSlider.style.transform = `translateX(-${currentBestsellerIndex * slideWidth}px)`;
}

// Category Filter
function filterProducts(category) {
    currentCategory = category;
    
    // Update active filter button
    categoryFilters.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Filter products
    let filtered = products;
    
    if (category === 'men' || category === 'women' || category === 'unisex') {
        filtered = products.filter(p => p.category === category);
    } else if (category === 'best-sellers') {
        filtered = products.filter(p => p.isBestSeller);
    } else if (category === 'new-arrivals') {
        filtered = products.filter(p => p.isNewArrival);
    }
    
    renderProducts(filtered);
    
    // Smooth scroll to products
    document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Show Quick View Modal
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div class="modal-product">
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-product-info">
                <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                <h2>${product.name}</h2>
                <div class="product-rating">
                    <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                    <span class="rating-count">${product.rating} (${product.reviews} reviews)</span>
                </div>
                <p class="modal-product-description">
                    Premium ${product.name} sunglasses combining style and functionality. 
                    Perfect for fashion-conscious individuals who demand both protection and aesthetics.
                </p>
                <ul class="modal-product-features">
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    quickViewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Quick View Modal
function closeQuickView() {
    quickViewModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Hero Slider
function startHeroSlider() {
    const heroSlides = document.querySelectorAll('.hero-slide');
    const totalHeroSlides = heroSlides.length;
    
    if (totalHeroSlides === 0) return;
    
    setInterval(() => {
        currentHeroSlide = (currentHeroSlide + 1) % totalHeroSlides;
        updateHeroSlider();
    }, 5000);
}

function updateHeroSlider() {
    const heroSlides = document.querySelectorAll('.hero-slide');
    
    heroSlides.forEach((slide, index) => {
        if (index === currentHeroSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    heroDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentHeroSlide);
    });
}

// Best Seller Slider Navigation
function setupBestsellerNavigation() {
    if (sliderPrevBtn) {
        sliderPrevBtn.addEventListener('click', () => {
            if (currentBestsellerIndex > 0) {
                currentBestsellerIndex--;
                updateBestsellerSlider();
            }
        });
    }
    
    if (sliderNextBtn) {
        sliderNextBtn.addEventListener('click', () => {
            const bestsellers = products.filter(p => p.isBestSeller);
            const maxIndex = Math.max(0, bestsellers.length - 3);
            if (currentBestsellerIndex < maxIndex) {
                currentBestsellerIndex++;
                updateBestsellerSlider();
            }
        });
    }
}

// Booking Modal Functions
function openBookingModal() {
    if (bookingModal) {
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeBookingModal() {
    if (bookingModal) {
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
        if (bookingForm) {
            bookingForm.reset();
        }
    }
}

function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

function checkFreeExamEligibility() {
    const dateOfBirthInput = document.getElementById('date-of-birth');
    const freeExamMessage = document.getElementById('free-exam-message');
    
    if (!dateOfBirthInput || !freeExamMessage) return;
    
    const dateOfBirth = dateOfBirthInput.value;
    if (!dateOfBirth) {
        freeExamMessage.style.display = 'none';
        return;
    }
    
    const age = calculateAge(dateOfBirth);
    const isFreeExam = age < 18 || age >= 65;
    
    if (isFreeExam) {
        freeExamMessage.style.display = 'block';
    } else {
        freeExamMessage.style.display = 'none';
    }
}

function handleBookingSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(bookingForm);
    const bookingData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        dateOfBirth: formData.get('dateOfBirth'),
        healthConditions: formData.get('healthConditions'),
        preferredDate: formData.get('preferredDate'),
        preferredTime: formData.get('preferredTime')
    };
    
    // Calculate age for free exam eligibility
    const age = calculateAge(bookingData.dateOfBirth);
    const isFreeExam = age < 18 || age >= 65;
    const freeExamText = isFreeExam ? ' (Free Eye Exam - You qualify!)' : '';
    
    // Here you would typically send this to your backend
    // For now, we'll show a confirmation message
    const dateText = bookingData.preferredDate === 'thursday' ? 'Thursday' : 'Sunday';
    alert(`Thank you, ${bookingData.firstName} ${bookingData.lastName}! Your appointment request has been submitted for ${dateText} at ${bookingData.preferredTime}${freeExamText}. We'll contact you at ${bookingData.email} or ${bookingData.phone} to confirm.`);
    
    closeBookingModal();
}

// Setup Event Listeners
function setupEventListeners() {
    // Category filters
    categoryFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            filterProducts(btn.dataset.category);
        });
    });
    
    // Smooth scrolling for anchor links and category navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#home') {
                // Handle category navigation
                if (href === '#men' || href === '#women' || href === '#unisex' || href === '#new-arrivals' || href === '#best-sellers') {
                    e.preventDefault();
                    const category = href.substring(1);
                    filterProducts(category);
                } else {
                    // Handle regular anchor links
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            }
        });
    });
    
    // Modal close
    if (modalClose) {
        modalClose.addEventListener('click', closeQuickView);
    }
    
    // Close modal on outside click
    quickViewModal.addEventListener('click', (e) => {
        if (e.target === quickViewModal) {
            closeQuickView();
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && quickViewModal.classList.contains('active')) {
            closeQuickView();
        }
    });
    
    // Mobile menu toggle
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('mobile-active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Handle dropdown in mobile menu
        const dropdown = document.querySelector('.dropdown');
        if (dropdown) {
            const dropdownToggle = dropdown.querySelector('a');
            dropdownToggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 968) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    }
    
    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing! We'll send exclusive offers to ${email}`);
            newsletterForm.reset();
        });
    }
    
    // Book Exam Button
    if (bookExamBtn) {
        bookExamBtn.addEventListener('click', () => {
            openBookingModal();
        });
    }
    
    // Booking Modal Close
    if (bookingModalClose) {
        bookingModalClose.addEventListener('click', closeBookingModal);
    }
    
    // Close booking modal on outside click
    if (bookingModal) {
        bookingModal.addEventListener('click', (e) => {
            if (e.target === bookingModal) {
                closeBookingModal();
            }
        });
    }
    
    // Booking Form Submit
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
    
    // Set minimum date to today for date of birth
    const dateOfBirthInput = document.getElementById('date-of-birth');
    if (dateOfBirthInput) {
        const today = new Date().toISOString().split('T')[0];
        dateOfBirthInput.setAttribute('max', today);
        
        // Check for free exam eligibility when date of birth changes
        dateOfBirthInput.addEventListener('change', checkFreeExamEligibility);
    }
    
    // Handle preferred date selection (Thursday or Sunday)
    const preferredDateSelect = document.getElementById('preferred-date');
    const timeGroup = document.getElementById('time-group');
    const preferredTimeSelect = document.getElementById('preferred-time');
    
    if (preferredDateSelect && timeGroup && preferredTimeSelect) {
        preferredDateSelect.addEventListener('change', (e) => {
            const selectedDay = e.target.value;
            
            if (selectedDay) {
                timeGroup.style.display = 'block';
                preferredTimeSelect.innerHTML = '<option value="">Select a time</option>';
                
                if (selectedDay === 'thursday') {
                    // Thursday: 2:00 PM - 6:00 PM
                    const times = [
                        { value: '14:00', label: '2:00 PM' },
                        { value: '15:00', label: '3:00 PM' },
                        { value: '16:00', label: '4:00 PM' },
                        { value: '17:00', label: '5:00 PM' },
                        { value: '18:00', label: '6:00 PM' }
                    ];
                    times.forEach(time => {
                        const option = document.createElement('option');
                        option.value = time.value;
                        option.textContent = time.label;
                        preferredTimeSelect.appendChild(option);
                    });
                } else if (selectedDay === 'sunday') {
                    // Sunday: 11:00 AM - 5:00 PM
                    const times = [
                        { value: '11:00', label: '11:00 AM' },
                        { value: '12:00', label: '12:00 PM' },
                        { value: '13:00', label: '1:00 PM' },
                        { value: '14:00', label: '2:00 PM' },
                        { value: '15:00', label: '3:00 PM' },
                        { value: '16:00', label: '4:00 PM' },
                        { value: '17:00', label: '5:00 PM' }
                    ];
                    times.forEach(time => {
                        const option = document.createElement('option');
                        option.value = time.value;
                        option.textContent = time.label;
                        preferredTimeSelect.appendChild(option);
                    });
                }
            } else {
                timeGroup.style.display = 'none';
                preferredTimeSelect.innerHTML = '<option value="">Select a time</option>';
            }
        });
    }
    
    // Setup bestseller slider navigation
    setupBestsellerNavigation();
    
    // Hero Dots Navigation
    if (heroDots.length > 0) {
        heroDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentHeroSlide = index;
                updateHeroSlider();
            });
        });
    }
    
    // Responsive bestseller slider
    let touchStartX = 0;
    let touchEndX = 0;
    
    const sliderTrack = document.querySelector('.slider-track');
    if (sliderTrack) {
        sliderTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        sliderTrack.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left
            sliderNextBtn.click();
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe right
            sliderPrevBtn.click();
        }
    }
}

// Handle window resize for bestseller slider
window.addEventListener('resize', () => {
    updateBestsellerSlider();
});

// Close booking modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModal && bookingModal.classList.contains('active')) {
        closeBookingModal();
    }
});
