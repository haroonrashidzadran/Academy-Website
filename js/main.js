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
 * Course Data - Extended with 20+ Courses
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
    },
    // Additional 14 courses for comprehensive catalog
    {
        id: 7,
        title: 'AWS Cloud Practitioner Certification',
        category: 'Cloud',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
        price: 44.99,
        oldPrice: 179.99,
        rating: 4.8,
        students: 4500,
        duration: '18 hours',
        level: 'Beginner',
        badge: 'Certification',
        badgeColor: 'bg-info',
        instructor: 'David Wilson'
    },
    {
        id: 8,
        title: 'JavaScript Algorithms & Data Structures',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop',
        price: 39.99,
        oldPrice: 159.99,
        rating: 4.9,
        students: 6200,
        duration: '28 hours',
        level: 'Intermediate',
        badge: null,
        badgeColor: null,
        instructor: 'Chris Anderson'
    },
    {
        id: 9,
        title: 'Adobe Photoshop Mastery',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&h=250&fit=crop',
        price: 29.99,
        oldPrice: 129.99,
        rating: 4.7,
        students: 3800,
        duration: '20 hours',
        level: 'Beginner',
        badge: 'Popular',
        badgeColor: 'bg-warning text-dark',
        instructor: 'Anna Martinez'
    },
    {
        id: 10,
        title: 'SEO & Google Analytics',
        category: 'Marketing',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
        price: 34.99,
        oldPrice: 149.99,
        rating: 4.6,
        students: 3200,
        duration: '15 hours',
        level: 'Beginner',
        badge: null,
        badgeColor: null,
        instructor: 'Tom Harris'
    },
    {
        id: 11,
        title: 'Advanced React Patterns',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
        price: 49.99,
        oldPrice: 199.99,
        rating: 4.9,
        students: 4100,
        duration: '25 hours',
        level: 'Advanced',
        badge: 'Expert',
        badgeColor: 'bg-dark',
        instructor: 'Sarah Lee'
    },
    {
        id: 12,
        title: 'SQL & Database Management',
        category: 'Data Science',
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop',
        price: 29.99,
        oldPrice: 129.99,
        rating: 4.7,
        students: 5600,
        duration: '18 hours',
        level: 'Beginner',
        badge: 'Bestseller',
        badgeColor: 'bg-success',
        instructor: 'Mike Brown'
    },
    {
        id: 13,
        title: 'Python for Beginners',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
        price: 24.99,
        oldPrice: 99.99,
        rating: 4.8,
        students: 15000,
        duration: '15 hours',
        level: 'Beginner',
        badge: 'Best Seller',
        badgeColor: 'bg-success',
        instructor: 'James Wilson'
    },
    {
        id: 14,
        title: 'DevOps Fundamentals',
        category: 'Cloud',
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop',
        price: 54.99,
        oldPrice: 229.99,
        rating: 4.7,
        students: 3800,
        duration: '30 hours',
        level: 'Intermediate',
        badge: 'New',
        badgeColor: 'bg-primary',
        instructor: 'Robert Chen'
    },
    {
        id: 15,
        title: 'Figma UI Design',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop',
        price: 32.99,
        oldPrice: 139.99,
        rating: 4.8,
        students: 4200,
        duration: '20 hours',
        level: 'Beginner',
        badge: 'Popular',
        badgeColor: 'bg-warning text-dark',
        instructor: 'Sophie Taylor'
    },
    {
        id: 16,
        title: 'Social Media Marketing',
        category: 'Marketing',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=250&fit=crop',
        price: 27.99,
        oldPrice: 119.99,
        rating: 4.6,
        students: 4800,
        duration: '16 hours',
        level: 'Beginner',
        badge: null,
        badgeColor: null,
        instructor: 'Emma Davis'
    },
    {
        id: 17,
        title: 'Node.js Backend Development',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop',
        price: 44.99,
        oldPrice: 189.99,
        rating: 4.8,
        students: 5800,
        duration: '35 hours',
        level: 'Intermediate',
        badge: 'Hot',
        badgeColor: 'bg-danger',
        instructor: 'Kevin Park'
    },
    {
        id: 18,
        title: 'Cybersecurity Basics',
        category: 'Security',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop',
        price: 49.99,
        oldPrice: 199.99,
        rating: 4.7,
        students: 5200,
        duration: '25 hours',
        level: 'Beginner',
        badge: null,
        badgeColor: null,
        instructor: 'Mark Thompson'
    },
    {
        id: 19,
        title: 'Docker & Kubernetes',
        category: 'Cloud',
        image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=250&fit=crop',
        price: 59.99,
        oldPrice: 249.99,
        rating: 4.9,
        students: 3600,
        duration: '32 hours',
        level: 'Advanced',
        badge: 'Expert',
        badgeColor: 'bg-dark',
        instructor: 'Lisa Anderson'
    },
    {
        id: 20,
        title: 'Content Marketing Mastery',
        category: 'Marketing',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop',
        price: 29.99,
        oldPrice: 129.99,
        rating: 4.6,
        students: 2900,
        duration: '14 hours',
        level: 'Beginner',
        badge: null,
        badgeColor: null,
        instructor: 'Rachel Green'
    }
];
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

/**
 * Testimonials Data - Extended with 12 testimonials
 */
const testimonialsData = [
    {
        id: 1,
        name: 'Ahmed Hassan',
        role: 'Web Developer',
        company: 'Tech Solutions Inc.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        rating: 5,
        quote: 'Excellent platform! The courses are well-structured and the instructors are very knowledgeable. I landed my dream job after completing the Web Development course.',
        course: 'Complete Web Development Bootcamp'
    },
    {
        id: 2,
        name: 'Fatima Akbari',
        role: 'Data Scientist',
        company: 'AI Innovations',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
        rating: 5,
        quote: 'EduPro Academy changed my career completely. The Data Science course gave me all the skills I needed to transition into a tech role. Highly recommended!',
        course: 'Data Science & Machine Learning'
    },
    {
        id: 3,
        name: 'Karim Rahimi',
        role: 'UX Designer',
        company: 'Creative Studio',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
        rating: 5,
        quote: 'The best investment I made for my education. The flexibility to learn at my own pace while working full-time was exactly what I needed.',
        course: 'UI/UX Design Masterclass'
    },
    {
        id: 4,
        name: 'Sadia Mahmood',
        role: 'Marketing Manager',
        company: 'Digital Agency',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face',
        rating: 5,
        quote: 'The Digital Marketing course helped me double my client base. The strategies I learned are practical and immediately applicable.',
        course: 'Digital Marketing Strategy'
    },
    {
        id: 5,
        name: 'Omar Farooq',
        role: 'Mobile Developer',
        company: 'AppWorks',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        rating: 5,
        quote: 'React Native course was phenomenal! I built and published my first app within 3 months of starting.',
        course: 'React Native Mobile Apps'
    },
    {
        id: 6,
        name: 'Zara Ahmed',
        role: 'ML Engineer',
        company: 'Tech Giant Corp',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
        rating: 5,
        quote: 'The Advanced Machine Learning course took my skills to the next level. The instructors are true experts in their field.',
        course: 'Advanced Machine Learning'
    },
    {
        id: 7,
        name: 'Nasser Khosro',
        role: 'Cloud Architect',
        company: 'Cloud Solutions',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        rating: 5,
        quote: 'AWS and DevOps courses gave me the confidence to switch from development to cloud architecture. Best decision ever!',
        course: 'AWS & DevOps Bundle'
    },
    {
        id: 8,
        name: 'Lailuma Noori',
        role: 'Content Strategist',
        company: 'Media House',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        rating: 4,
        quote: 'Content Marketing Mastery helped me understand how to create content that actually converts. My engagement rates tripled!',
        course: 'Content Marketing Mastery'
    },
    {
        id: 9,
        name: 'Hamidullah Rasa',
        role: 'Full Stack Developer',
        company: 'StartupHub',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
        rating: 5,
        quote: 'The complete bootcamp gave me a solid foundation. The projects portfolio I built helped me get hired quickly.',
        course: 'Complete Web Development Bootcamp'
    },
    {
        id: 10,
        name: 'Maryam Hemat',
        role: 'Security Analyst',
        company: 'CyberShield',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
        rating: 5,
        quote: 'Cybersecurity Basics opened my eyes to the importance of security. Now I help protect organizations from threats.',
        course: 'Cybersecurity Basics'
    },
    {
        id: 11,
        name: 'Ahmad Shirzad',
        role: 'Backend Developer',
        company: 'ServerSide Inc',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        rating: 5,
        quote: 'Node.js Backend Development was intense but worth it. I can now build scalable APIs and microservices.',
        course: 'Node.js Backend Development'
    },
    {
        id: 12,
        name: 'Farida Nawabi',
        role: 'Product Designer',
        company: 'DesignCo',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
        rating: 5,
        quote: 'Figma UI Design course made me proficient in the most popular design tool. My design quality improved drastically.',
        course: 'Figma UI Design'
    }
];

/**
 * Newsletter Form Handler
 */
function handleNewsletterForm(event) {
    event.preventDefault();
    const email = document.getElementById('newsletterEmail')?.value || document.querySelector('#newsletterForm input[type="email"]')?.value;
    
    if (email && email.includes('@')) {
        alert('🎉 Thank you for subscribing to our newsletter!\n\nYou will receive our latest updates, course announcements, and exclusive offers.');
        event.target.reset();
        return true;
    } else {
        alert('Please enter a valid email address.');
        return false;
    }
}

/**
 * Get All Categories
 */
function getAllCategories() {
    const categories = [...new Set(coursesData.map(course => course.category))];
    return categories.sort();
}

/**
 * Get All Instructors
 */
function getAllInstructors() {
    const instructors = [...new Set(coursesData.map(course => course.instructor))];
    return instructors.sort();
}

/**
 * Calculate Average Rating
 */
function getAverageRating() {
    const total = coursesData.reduce((sum, course) => sum + course.rating, 0);
    return (total / coursesData.length).toFixed(1);
}

/**
 * Get Total Course Duration
 */
function getTotalCourseHours() {
    return coursesData.reduce((sum, course) => {
        const hours = parseInt(course.duration);
        return sum + (isNaN(hours) ? 0 : hours);
    }, 0);
}

/**
 * Export Courses to JSON
 */
function exportCoursesToJSON() {
    const dataStr = JSON.stringify(coursesData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'courses.json';
    a.click();
    URL.revokeObjectURL(url);
}

/**
 * Copy Link to Clipboard
 */
function copyLink(url) {
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy link. Please try again.');
    });
}

/**
 * Share on Social Media
 */
function shareOnSocial(platform, url, title) {
    const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

/**
 * Lazy Load Images
 */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/**
 * Back to Top Button
 */
function initBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'btn btn-primary rounded-circle position-fixed';
    backToTop.style.cssText = 'bottom: 30px; right: 30px; width: 50px; height: 50px; z-index: 1000; display: none;';
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    initBackToTop();
    lazyLoadImages();
});
