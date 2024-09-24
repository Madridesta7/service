document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => {
            if (response.ok) {
                alert(`Thank you, ${name}! Your message has been sent.`);
                form.reset(); // Reset the form
            } else {
                throw new Error('Failed to send message');
            }
        })
        .catch(error => {
            alert('Sorry, there was an error. Please try again.');
            console.error(error);
        });
    });
});
