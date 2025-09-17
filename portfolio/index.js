// Typing Animation
var typed = new Typed(".auto-type", {
    strings: ["PROGRAMMER", "WEB DEVELOPER", "GAMER", "STUDENT"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// Mobile Menu Toggle and Sticky Header
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const header = document.querySelector('.header');
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
        });
    });
    
    // Sticky header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.skill-card, .work, .about-image-section, .about-content-section, .contact-card, .highlight-item, .stat-item, .about-stats, .project-list');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
    
    // Add skill card hover effects
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Animate stats on scroll
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateStats = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                const numericValue = parseInt(finalValue);
                
                if (!isNaN(numericValue)) {
                    let currentValue = 0;
                    const increment = numericValue / 50;
                    const timer = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= numericValue) {
                            target.textContent = finalValue;
                            clearInterval(timer);
                        } else {
                            target.textContent = Math.floor(currentValue) + '+';
                        }
                    }, 30);
                }
                observer.unobserve(target);
            }
        });
    };
    
    const statsObserver = new IntersectionObserver(animateStats, { threshold: 0.5 });
    statNumbers.forEach(stat => statsObserver.observe(stat));
    
    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 200);
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => timelineObserver.observe(item));
    
    // Progress bars animation
    const progressBars = document.querySelectorAll('.progress-fill');
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 500);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => progressObserver.observe(bar));
    
    // Skill tags hover effect
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Project cards hover effects
    const projectCards = document.querySelectorAll('.work');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // this.style.zIndex = '10';
        });
    
    });
    
    // Tech tags hover effect
    const techTags = document.querySelectorAll('.tech-tag');
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.3)';
            this.style.transform = 'scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.2)';
            this.style.transform = 'scale(1)';
        });
    });
});

let currentActive = null; // Track the currently active button

// Event Listener for extra buttons
document.getElementById('extra').addEventListener('click', (e) => {
    e.preventDefault();
    const extratext = document.getElementById('extratext');

    // Check if clicked element has the class 'extra-button'
    if (e.target.matches('.extra-button')) {
        // Hide previous text if it exists
        if (currentActive && currentActive !== e.target) {
            currentActive.classList.remove('active'); // Remove active class
            extratext.style.display = "none"; // Hide the text
        }

        // Toggle functionality
        if (currentActive === e.target) {
            extratext.innerHTML = ""; // Clear text if clicked again
            currentActive = null; // Reset current active
        } else {
            currentActive = e.target; // Update current active
            currentActive.classList.add('active'); // Add active class

            // Set content based on the button clicked
            switch (e.target.id) {
                 case 'a':
                    extratext.innerHTML = `
                        <strong>B.Tech in Computer Science and Engineering</strong><br>
                        Specialization: Internet of Things (IoT)<br>
                        GCET, Vallabh Vidyanagar<br>
                        Expected Graduation: 2026<br><br>
                        In my third year, I am delving deeper into data structures, algorithms, and IoT technologies. 
                        I am gaining hands-on experience through projects that involve developing smart applications and systems. 
                        My coursework includes advanced programming, embedded systems, and network protocols, equipping me with 
                        the skills necessary to tackle real-world challenges in the tech industry.
                    `;
                    break;
                case 'b':
                    extratext.innerHTML = `
                        I have a diverse range of hobbies that keep me engaged and motivated. 
                        Gaming is a significant passion of mine, allowing me to immerse myself in intricate narratives and strategic challenges. 
                        I also enjoy programming, constantly exploring new technologies and developing innovative solutions.<br><br>
                        Music is an integral part of my life; it inspires me and enhances my creativity. 
                        Additionally, I play snooker, a relaxing way to unwind while sharpening my focus and precision. 
                        These activities not only bring me joy but also contribute to my personal growth and development.
                    `;
                    break;
                case 'c':
                    extratext.innerHTML = `
                        As a web developer, I aspire to create innovative and scalable applications that make a meaningful impact. 
                        I am dedicated to harnessing the latest technologies to solve real-world problems and enhance user experiences. 
                        My goal is to contribute to projects that drive positive change and improve the way people interact with technology.
                    `; 
                    break;
            }
            extratext.style.display = "block"; // Show the text
        }
    }
});
