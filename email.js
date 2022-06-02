var lemessage = document.getElementById('result-form');
var nom = document.getElementById("nom");
var email = document.getElementById("email");
var telephone = document.getElementById("telephone");
var message = document.getElementById("message");
window.onload = function() {
document.getElementById('contact-form').addEventListener('submit', function(event) {
event.preventDefault();
// these IDs from the previous steps
emailjs.sendForm('service_r9tb77c', 'template_x1036p4', this)
.then(function() {
console.log('SUCCESS!');
success();
}, function(error) {
console.log('FAILED...', error);
failed();
});
});
}