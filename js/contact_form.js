function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    var form = document.getElementById('contact-form');
    var formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Display success message
        document.getElementById('form-message').innerHTML = '<p>Message sent successfully!</p>';
        // Optionally, clear form fields
        form.reset();
    })
    .catch(error => {
        // Display error message
        document.getElementById('form-message').innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
        console.error('There was a problem with the form submission:', error);
    });
}
