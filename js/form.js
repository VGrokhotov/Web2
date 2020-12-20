var shadow = document.createElement('div');
shadow.className = 'shadow';

var contactForm = document.querySelector('.contactForm');

// Access the form element...
const form = document.getElementById("contact_form");
// Access the inputs
const email = document.getElementById("email_input");
const message = document.getElementById("message_input");

contactForm.onclick = function(event) {
    event.stopPropagation();
}

shadow.onclick = function() {
    shadow.removeChild(contactForm);
    document.body.removeChild(shadow);
    contactForm.style.display = 'none';
}

document.querySelector('.contact_us_fab').onclick = function() {
    contactForm.className = 'contactForm';
    contactForm.style.display = 'flex';
    shadow.appendChild(contactForm);
    document.body.appendChild(shadow);
}

function sendData() {
    console.log(email.value + " " + message.value);
    form.reset();
}

// ...and take over its submit event.
form.addEventListener("submit", function(event) {
    event.preventDefault();
    sendData();
});