document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            tabContents[index].classList.add('active');
        });
    });
    
    // Generate button animation
    const generateBtn = document.querySelector('button');
    const inputField = document.querySelector('input');
    
    inputField.addEventListener('input', function() {
        if (this.value.length > 0) {
            generateBtn.classList.add('thinking');
        } else {
            generateBtn.classList.remove('thinking');
        }
    });
    
    // Simulate idea generation
    generateBtn.addEventListener('click', function() {
        const ideaCards = document.querySelectorAll('.idea-card');
        
        ideaCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animationDelay = `${index * 0.08}s`;
                card.classList.add('animate');
            }, index * 80);
        });
    });
    
    // Theme toggle (placeholder - will be implemented in components)
});