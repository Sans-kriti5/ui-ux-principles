const form = document.getElementById("feedbackForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event){

    event.preventDefault();

    message.textContent =
    "✅ Feedback submitted successfully!";

    form.reset();
});