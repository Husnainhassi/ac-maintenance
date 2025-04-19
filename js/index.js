document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form elements
    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const submitSpinner = document.getElementById('submitSpinner');
    const successDiv = document.getElementById('formSuccess');
    const errorDiv = document.getElementById('formError');
    
    // Hide messages and show loading state
    successDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');
    submitText.textContent = 'Sending...';
    submitSpinner.classList.remove('hidden');
    submitBtn.disabled = true;
    
    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would normally send to your server/email service
    // This is a simulation - replace with actual fetch() to your backend
    setTimeout(() => {
        // Simulate successful submission
        submitText.textContent = 'Send Message';
        submitSpinner.classList.add('hidden');
        submitBtn.disabled = false;
        
        successDiv.textContent = 'Thank you for your message! We will contact you shortly.';
        successDiv.classList.remove('hidden');
        
        // Reset form
        form.reset();
        
        // In a real implementation, you would use something like:
        /*
        fetch('your-email-script.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                successDiv.textContent = data.message || 'Thank you for your message! We will contact you shortly.';
                successDiv.classList.remove('hidden');
                form.reset();
            } else {
                errorDiv.textContent = data.message || 'There was an error sending your message. Please try again.';
                errorDiv.classList.remove('hidden');
            }
        })
        .catch(error => {
            errorDiv.textContent = 'There was an error sending your message. Please try again.';
            errorDiv.classList.remove('hidden');
        })
        .finally(() => {
            submitText.textContent = 'Send Message';
            submitSpinner.classList.add('hidden');
            submitBtn.disabled = false;
        });
        */
    }, 1500);
});