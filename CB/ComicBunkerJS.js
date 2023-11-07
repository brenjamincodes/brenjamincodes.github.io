document.querySelector('#newsletter button').addEventListener('click', function() {
    let email = document.querySelector('#email').value;
    
    if(validateEmail(email)) {
        alert('Thank you for subscribing to our newsletter!');
        // You can add AJAX calls or other logic to send the email to your server here
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
