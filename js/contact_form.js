const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validate form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if any field is empty
    if (name === '' || email === '' || message === '') {
        console.log("Please fill out all fields.");
        result.innerHTML = "Please fill out all fields.";
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        console.log("Please enter a valid email address.");
        result.innerHTML = "Please enter a valid email address.";
        return;
    }

    // Log form data
    console.log("Form data:", { name, email, message });

    // Form data is valid, proceed with submission
    console.log("Form data is valid. Submitting...");

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                console.log("Submission successful:", json.message);
                result.innerHTML = json.message;
            } else {
                console.error("Submission failed:", json.message);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.error("Error submitting form:", error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
