document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const button = document.querySelector('button');
    const cards = document.querySelectorAll('.card');

    // Form validation
    form.addEventListener('submit', function(e) {
        const inputs = form.querySelectorAll('input, textarea');
        let valid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                valid = false;
            } else {
                input.style.borderColor = '#ddd';
            }
        });
        if (!valid) {
            e.preventDefault();
            alert('Please fill in all fields.');
        }
    });

    // Button click animation
    button.addEventListener('click', function() {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => button.style.transform = 'scale(1)', 150);
    });

    // Smooth scroll to cards on form submit (if valid)
    form.addEventListener('submit', function() {
        if (cards.length > 0) {
            cards[0].scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Add hover effects to cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
        });
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
        });
    });

    // Real-time form feedback
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (input.value.trim()) {
                input.style.borderColor = '#4caf50';
            } else {
                input.style.borderColor = '#ddd';
            }
        });
    });

    // Loading state on button click
    button.addEventListener('click', function() {
        button.textContent = 'Submitting...';
        button.disabled = true;
        setTimeout(() => {
            button.textContent = 'Submit';
            button.disabled = false;
        }, 2000); // Simulate delay
    });
});
