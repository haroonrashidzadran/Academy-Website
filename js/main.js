// EduPro Academy - Professional JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
    });

    // Hide preloader
    setTimeout(() => {
        document.querySelector('.preloader').classList.add('hidden');
    }, 500);

    // Initialize all components
    initCourseCards();
    initCounters();
    initNavbarScroll();
    initSmoothScroll();
    initAnimations();
});

/**
 * Course Data
 */
const coursesData = [
    {
        id: 1,
        title: 'Complete Web Development Bootcamp 2026',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
        price: 49.99,
        oldPrice: 199.99,
        rating: 4.9,
        students: 12500,
        duration: '42 hours',
        level: 'Beginner',
        badge: 'Best Seller',
        badgeColor: 'bg-success',
        instructor: 'John Smith'
    },
    {
        id: 2,
        title: 'Data Science & Machine Learning',
        category: 'Data Science',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
        price: 59.99,
        oldPrice: 249.99,
        rating: 4.9,
        students: 8900,
        duration: '38 hours',
        level: 'Intermediate',
        badge: 'New',
        badgeColor: 'bg-primary',
        instructor: 'Dr. Sarah Johnson'
    },
    {
        id: 3,
        title: 'UI/UX Design Masterclass',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
        price: 39.99,
        oldPrice: 179.99,
        rating: 4.8,
        students: 6700,
        duration: '28 hours',
        level: 'Beginner',
        badge: 'Popular',
        badgeColor: 'bg-warning text-dark',
        instructor: 'Emily Davis'
    },
    {
        id: 4,
        title: 'Digital Marketing Strategy',
        category: 'Marketing',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
        price: 34.99,
        oldPrice: 149.99,
        rating: 4.7,
        students: 5400,
        duration: '22 hours',
        level: 'Beginner',
        badge: null,
        badgeColor: null,
        instructor: 'Michael Brown'
    },
    {
        id: 5,
        title: 'React Native Mobile Apps',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
        price: 54.99,
        oldPrice: 229.99,
        rating: 4.8,
        students: 7200,
        duration: '32 hours',
        level: 'Intermediate',
        badge: 'Hot',
        badgeColor: 'bg-danger',
        instructor: 'Alex Chen'
    },
    {
        id: 6,
        title: 'Advanced Machine Learning',
        category: 'Data Science',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
        price: 69.99,
        oldPrice: 299.99,
        rating: 4.9,
        students: 9800,
        duration: '45 hours',
        level: 'Advanced',
        badge: 'Expert',
        badgeColor: 'bg-dark',
        instructor: 'Dr. Lisa Wang'
    }
];

/**
 * Initialize Course Cards
 */
function initCourseCards() {
    const container = document.getElementById('popularCourses');
    if (!container) return;

    const html = coursesData.slice(0, 6).map(course => createCourseCard(course)).join('');
    container.innerHTML = html;
}

/**
 * Create Course Card HTML
 */
function createCourseCard(course) {
    const badgeHtml = course.badge 
        ? `<span class="badge ${course.badgeColor} course-badge">${course.badge}</span>` 
        : '';
    
    const levelColors = {
        'Beginner': 'bg-success-subtle text-success',
        'Intermediate': 'bg-warning-subtle text-warning',
        'Advanced': 'bg-danger-subtle text-danger'
    };

    return `
        <div class="col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="${course.id * 100}">
            <div class="card course-card h-100 shadow-sm">
                ${badgeHtml}
                <img src="${course.image}" alt="${course.title}" class="course-image card-img-top w-100">
                <div class="card-body p-4">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <span class="badge bg-light text-dark">${course.category}</span>
                        <span class="badge ${levelColors[course.level]}">${course.level}</span>
                    </div>
                    <h5 class="card-title fw-bold mb-2 lh-base">${course.title}</h5>
                    <p class="text-muted small mb-3">by ${course.instructor}</p>
                    <div class="d-flex align-items-center mb-3">
                        <div class="text-warning me-2">
                            <i class="fas fa-star"></i>
                            <strong>${course.rating}</strong>
                        </div>
                        <span class="text-muted small">(${course.students.toLocaleString()} students)</span>
                    </div>
                    <div class="d-flex align-items-center mb-3 text-muted small">
                        <i class="far fa-clock me-2"></i>
                        <span>${course.duration}</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                        <div>
                            <span class="course-price">$${course.price}</span>
                            <span class="old-price text-decoration-line-through ms-2">$${course.oldPrice}</span>
                        </div>
                        <button class="btn btn-primary btn-sm" onclick="enrollCourse(${course.id})">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Animated Counter
 */
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    if (!counters.length) return;

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 60;
    const duration = 2000;
    const stepTime = duration / 60;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = current >= 1000 
            ? (current / 1000).toFixed(0) + 'K+'
            : Math.floor(current) + '+';
    }, stepTime);
}

/**
 * Navbar Scroll Effect
 */
function initNavbarScroll() {
    const navbar = document.querySelector('#mainNav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
            navbar.style.padding = '0.75rem 0';
        } else {
            navbar.classList.remove('shadow-sm');
            navbar.style.padding = '1rem 0';
        }
    });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize Scroll Animations
 */
function initAnimations() {
    // Reinitialize AOS on scroll
    window.addEventListener('scroll', () => {
        AOS.refresh();
    });
}

/**
 * Enroll Course Handler
 */
function enrollCourse(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (course) {
        alert(`Thank you for your interest in "${course.title}"!\n\nThis feature will redirect to the enrollment page.`);
    }
}

/**
 * Contact Form Handler
 */
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name')?.value,
        email: document.getElementById('email')?.value,
        subject: document.getElementById('subject')?.value,
        message: document.getElementById('message')?.value
    };

    // Show success message
    alert(`Thank you, ${formData.name}!\n\nYour message has been sent. We will get back to you soon.`);
    
    if (event.target) {
        event.target.reset();
    }
}

/**
 * Newsletter Subscription
 */
function subscribeNewsletter(email) {
    if (email && email.includes('@')) {
        alert('Thank you for subscribing to our newsletter!');
        return true;
    }
    return false;
}

/**
 * Search Functionality
 */
function searchCourses(searchTerm) {
    const filtered = coursesData.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filtered;
}

/**
 * Filter Courses by Category
 */
function filterByCategory(category) {
    if (!category) return coursesData;
    return coursesData.filter(course => course.category === category);
}

/**
 * Filter Courses by Level
 */
function filterByLevel(level) {
    if (!level) return coursesData;
    return coursesData.filter(course => course.level === level);
}
