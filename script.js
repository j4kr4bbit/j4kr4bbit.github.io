document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to Carr!');
    
    // Animate counters in the metrics section
    animateCounters();
    
    // Add scroll animations
    addScrollAnimations();
    
    // Add hover effects for interactive elements
    addHoverEffects();
    
    // Simulate AI-powered features
    simulateAiFeatures();
});

// Function to animate the counters in the metrics section
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = 30; // Update every 30ms
        
        let current = 0;
        const increment = target / (duration / step);
        const isDecimal = target % 1 !== 0;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= target) {
                counter.textContent = isDecimal ? target.toFixed(1) : Math.round(target);
                clearInterval(timer);
            } else {
                counter.textContent = isDecimal ? current.toFixed(1) : Math.round(current);
            }
        }, step);
    });
}

// Function to add scroll animations
function addScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Highlight active section in navigation
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
        
        // Add parallax effect to the hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
    
    // Add animation to timeline items when they come into view
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Function to add hover effects for interactive elements
function addHoverEffects() {
    // Add hover effect to the card elements
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hovered');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovered');
        });
    });
    
    // Add "connect wallet" button functionality
    const connectWalletBtn = document.querySelector('.connect-wallet');
    
    if (connectWalletBtn) {
        connectWalletBtn.addEventListener('click', () => {
            connectWalletBtn.textContent = 'Connecting...';
            
            // Simulate connection delay
            setTimeout(() => {
                connectWalletBtn.textContent = 'Wallet Connected';
                connectWalletBtn.classList.add('connected');
                
                // Show notification
                showNotification('Wallet connected successfully!');
            }, 1500);
        });
    }
}

// Function to simulate AI-powered features
function simulateAiFeatures() {
    // Simulate loading car model with AI-generated image
    const carModel = document.querySelector('.car-model');
    
    if (carModel) {
        setTimeout(() => {
            // Add a futuristic glowing effect
            const glow = document.createElement('div');
            glow.classList.add('ai-glow');
            carModel.appendChild(glow);
            
            // Add AI analysis overlay
            const aiOverlay = document.createElement('div');
            aiOverlay.classList.add('ai-overlay');
            aiOverlay.innerHTML = `
                <div class="ai-scanner"></div>
                <div class="ai-data">
                    <div class="ai-data-item">Model Analysis: <span>In Progress</span></div>
                    <div class="ai-data-item">Value Prediction: <span>Calculating</span></div>
                    <div class="ai-data-item">NFT Performance: <span>Analyzing</span></div>
                </div>
            `;
            carModel.appendChild(aiOverlay);
            
            // Simulate AI analysis completion
            setTimeout(() => {
                const dataItems = document.querySelectorAll('.ai-data-item span');
                dataItems[0].textContent = 'Complete';
                dataItems[0].classList.add('completed');
                
                setTimeout(() => {
                    dataItems[1].textContent = '$268,500';
                    dataItems[1].classList.add('completed');
                    
                    setTimeout(() => {
                        dataItems[2].textContent = '+24.6% Growth';
                        dataItems[2].classList.add('completed');
                        
                        showNotification('AI analysis complete!');
                    }, 800);
                }, 600);
            }, 2000);
        }, 1000);
    }
}

// Function to show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove notification after delay
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for new elements created by JavaScript
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: -60px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--gradient-1);
        color: var(--dark);
        padding: 12px 25px;
        border-radius: 30px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .notification.show {
        bottom: 30px;
        opacity: 1;
    }
    
    .ai-glow {
        position: absolute;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, rgba(0, 255, 204, 0.1) 0%, transparent 70%);
        animation: pulse 3s infinite;
    }
    
    .ai-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 20px;
    }
    
    .ai-scanner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background: var(--primary);
        opacity: 0.7;
        box-shadow: 0 0 10px var(--primary);
        animation: scan 4s ease-in-out infinite;
    }
    
    .ai-data {
        background: rgba(10, 10, 10, 0.8);
        border-radius: 10px;
        padding: 15px;
        border: 1px solid var(--glass-effect);
        width: 80%;
        margin: 0 auto;
    }
    
    .ai-data-item {
        margin-bottom: 8px;
        font-size: 14px;
        font-family: 'Rajdhani', sans-serif;
    }
    
    .ai-data-item span {
        color: var(--primary);
        font-weight: 600;
    }
    
    .ai-data-item span.completed {
        animation: fadeIn 0.5s ease;
    }
    
    .nav-links a.active {
        color: var(--primary);
    }
    
    .nav-links a.active::after {
        width: 100%;
    }
    
    .timeline-item {
        opacity: 0;
        transform: translateX(-20px);
        transition: all 0.6s ease;
    }
    
    .timeline-item.animate {
        opacity: 1;
        transform: translateX(0);
    }
    
    .connect-wallet.connected {
        background: var(--primary-dark);
    }
    
    @keyframes pulse {
        0% { opacity: 0.3; }
        50% { opacity: 0.7; }
        100% { opacity: 0.3; }
    }
    
    @keyframes scan {
        0% { top: 0; }
        48% { top: calc(100% - 5px); }
        52% { top: calc(100% - 5px); }
        100% { top: 0; }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

document.head.appendChild(style); 
