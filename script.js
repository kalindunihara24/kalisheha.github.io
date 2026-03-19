document.addEventListener('DOMContentLoaded', () => {
    const clickBtn = document.getElementById('click-here-btn');
    const giftContainer = document.getElementById('gift-container');
    const giftBox = document.getElementById('gift-box');
    const finalMessage = document.getElementById('final-message');
    const moon = document.querySelector('.moon');
    const greeting = document.querySelector('.main-greeting');

    // When "Click Here" is clicked
    clickBtn.addEventListener('click', () => {
        // Fade out previous elements
        clickBtn.classList.add('fade-out');
        if (moon) moon.classList.add('fade-out');
        if (greeting) greeting.classList.add('fade-out');

        // Wait for fade out to complete, then show gift box
        setTimeout(() => {
            clickBtn.classList.add('hidden');
            if (moon) moon.classList.add('hidden');
            if (greeting) greeting.classList.add('hidden');
            
            giftContainer.classList.remove('hidden');
            giftContainer.classList.add('show');
        }, 800);
    });

    // When the gift box is clicked
    giftBox.addEventListener('click', () => {
        // Add the opening class to trigger CSS animations
        giftContainer.classList.add('box-open');
        
        // Create sparkles from the box position
        createSparkles();

        // Wait for the lid and box explosion animation
        setTimeout(() => {
            giftContainer.classList.add('hidden');
            finalMessage.classList.remove('hidden');
            finalMessage.classList.add('show');
            
            // Final color burst
            document.body.style.background = 'radial-gradient(circle, #2c3e50 0%, #000000 100%)';
        }, 800);
    });

    function createSparkles() {
        for (let i = 0; i < 40; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            
            // Random direction and distance
            const angle = Math.random() * Math.PI * 2;
            const velocity = 5 + Math.random() * 10;
            const x = Math.cos(angle) * velocity * 20;
            const y = Math.sin(angle) * velocity * 20;
            
            sparkle.style.left = '50%';
            sparkle.style.top = '50%';
            
            document.body.appendChild(sparkle);

            // Animate using JS for better control over random directions
            sparkle.animate([
                { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0)`, opacity: 0 }
            ], {
                duration: 1000 + Math.random() * 500,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                fill: 'forwards'
            });

            setTimeout(() => sparkle.remove(), 1500);
        }
    }
});
